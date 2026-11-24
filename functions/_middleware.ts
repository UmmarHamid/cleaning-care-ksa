/**
 * Cloudflare Pages Edge Middleware — Cleaning Care Trading Co.
 *
 * Provides an "Under Construction / Maintenance Mode" edge gate for Cloudflare Pages.
 */

interface Env {
  MAINTENANCE_MODE?: string;
  BYPASS_SECRET?: string;
  CF_PAGES_BRANCH?: string;
}

interface EventContext<Env, P extends string, Data> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<unknown>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env;
  params: Record<P, string | string[]>;
  data: Data;
}

type PagesFunction<
  Env = unknown,
  P extends string = string,
  Data extends Record<string, unknown> = Record<string, unknown>,
> = (context: EventContext<Env, P, Data>) => Response | Promise<Response>;

const DEFAULT_BYPASS_SECRET = 'cc-preview-2026';
const COOKIE_NAME = 'cc_maintenance_bypass';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  // 1. If maintenance mode is explicitly turned off via env var, pass through
  if (env.MAINTENANCE_MODE === 'false' || env.MAINTENANCE_MODE === '0') {
    return context.next();
  }

  // 2. Allow static assets, images, icons, and system routes through
  const isStaticAsset =
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/_next/') ||
    url.pathname === '/icon.svg' ||
    url.pathname === '/favicon.ico' ||
    url.pathname === '/robots.txt' ||
    url.pathname === '/sitemap.xml';

  if (isStaticAsset) {
    return context.next();
  }

  // 3. Cloudflare Pages PR Previews automatically bypass
  const isCustomDomain =
    url.hostname.includes('cleaningcaretradingco.com') ||
    url.hostname.includes('cleaningcaretrading.com') ||
    url.hostname.includes('cleaningcare.com');

  if (!isCustomDomain) {
    const isWorkersDev = url.hostname.endsWith('.workers.dev');
    const isPagesDev = url.hostname.endsWith('.pages.dev');

    const workerParts = isWorkersDev ? url.hostname.split('.workers.dev')[0].split('.') : [];
    const isWorkerPreview = isWorkersDev && workerParts.length > 2;

    const pagesParts = isPagesDev ? url.hostname.split('.pages.dev')[0].split('.') : [];
    const isPagesPreview = isPagesDev && pagesParts.length > 1;

    if (isWorkerPreview || isPagesPreview) {
      return context.next();
    }
  }

  // 4. Handle Relock / Logout (?lock=true or ?bypass_clear=true)
  if (
    url.searchParams.get('lock') === 'true' ||
    url.searchParams.get('bypass_clear') === 'true'
  ) {
    const cleanUrl = new URL(request.url);
    cleanUrl.searchParams.delete('lock');
    cleanUrl.searchParams.delete('bypass_clear');
    return new Response(null, {
      status: 302,
      headers: {
        Location: cleanUrl.toString(),
        'Set-Cookie': `${COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax; HttpOnly`,
      },
    });
  }

  // 5. Check Query Parameter Bypass (?preview_key=... or ?bypass=... or ?access=...)
  const activeSecret = env.BYPASS_SECRET || DEFAULT_BYPASS_SECRET;
  const queryKey =
    url.searchParams.get('preview_key') ||
    url.searchParams.get('bypass') ||
    url.searchParams.get('access');

  if (queryKey && queryKey.trim() === activeSecret) {
    const cleanUrl = new URL(request.url);
    cleanUrl.searchParams.delete('preview_key');
    cleanUrl.searchParams.delete('bypass');
    cleanUrl.searchParams.delete('access');
    const isHttps = url.protocol === 'https:';
    const cookieHeader = `${COOKIE_NAME}=true; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; HttpOnly${
      isHttps ? '; Secure' : ''
    }`;

    return new Response(null, {
      status: 302,
      headers: {
        Location: cleanUrl.toString(),
        'Set-Cookie': cookieHeader,
      },
    });
  }

  // 6. Check Bypass Cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  if (cookieHeader.includes(`${COOKIE_NAME}=true`)) {
    return context.next();
  }

  // 7. Otherwise, render the branded Swiss-Industrial Maintenance Page
  return new Response(renderMaintenanceHtml(), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
  });
};

function renderMaintenanceHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Under Construction | Cleaning Care Trading Co. (Riyadh, KSA)</title>
  <meta name="description" content="Cleaning Care Trading Co. official B2B wholesale platform is launching soon. Contact our commercial sales desk and 3 Riyadh warehouses directly via WhatsApp or phone.">
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #0F172A;
      color: #E2E8F0;
      line-height: 1.5;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-x: hidden;
      position: relative;
    }
    .hero-glow {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1000px;
      height: 480px;
      background: radial-gradient(circle at 50% 20%, rgba(211, 32, 39, 0.22) 0%, rgba(242, 183, 5, 0.08) 35%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
    header {
      position: relative;
      z-index: 10;
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(12px);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .logo-wrap {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: #FFFFFF;
    }
    .logo-img {
      height: 48px;
      width: auto;
      object-fit: contain;
    }
    .header-tag {
      font-size: 0.75rem;
      font-weight: 700;
      color: #F2B705;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: rgba(242, 183, 5, 0.12);
      border: 1px solid rgba(242, 183, 5, 0.25);
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
    }
    main {
      position: relative;
      z-index: 10;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 1.25rem;
    }
    .container {
      max-width: 860px;
      width: 100%;
      text-align: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #F2B705;
      background: rgba(242, 183, 5, 0.12);
      border: 1px solid rgba(242, 183, 5, 0.3);
      padding: 0.4rem 1rem;
      border-radius: 9999px;
      margin-bottom: 1.5rem;
    }
    .badge-dot {
      width: 8px;
      height: 8px;
      background: #F2B705;
      border-radius: 50%;
      box-shadow: 0 0 10px #F2B705;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }
    h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 2.25rem;
      line-height: 1.18;
      color: #FFFFFF;
      letter-spacing: -0.02em;
      margin-bottom: 1.25rem;
    }
    @media (min-width: 640px) {
      h1 { font-size: 3.25rem; }
    }
    .h1-accent {
      color: #D32027;
      background: linear-gradient(135deg, #FF4D54 0%, #D32027 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      font-size: 1rem;
      line-height: 1.65;
      color: #94A3B8;
      max-width: 640px;
      margin: 0 auto 2.5rem;
    }
    @media (min-width: 640px) {
      .subtitle { font-size: 1.125rem; }
    }
    .subtitle strong {
      color: #FFFFFF;
      font-weight: 600;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
    }
    @media (min-width: 640px) {
      .actions {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      min-height: 48px;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 0.9375rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      width: 100%;
    }
    @media (min-width: 640px) {
      .btn { width: auto; }
    }
    .btn-whatsapp {
      background-color: #25D366;
      color: #0F172A;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
    }
    .btn-whatsapp:hover {
      background-color: #20BD5A;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
    }
    .btn-red {
      background-color: #D32027;
      color: #FFFFFF;
      box-shadow: 0 4px 14px rgba(211, 32, 39, 0.3);
    }
    .btn-red:hover {
      background-color: #B0191F;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(211, 32, 39, 0.4);
    }
    .btn-outline {
      background-color: transparent;
      color: #E2E8F0;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.35);
      color: #FFFFFF;
    }
    .stats-card {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1rem;
      padding: 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      margin-bottom: 2.5rem;
      backdrop-filter: blur(8px);
    }
    @media (min-width: 640px) {
      .stats-card {
        grid-template-columns: repeat(4, 1fr);
        padding: 2rem 1.5rem;
      }
    }
    .stat-item {
      text-align: center;
    }
    .stat-metric {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.75rem;
      font-weight: 800;
      color: #FFFFFF;
      line-height: 1.2;
    }
    .stat-metric span {
      color: #F2B705;
    }
    .stat-label {
      font-size: 0.75rem;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.25rem;
      font-weight: 500;
    }
    .info-bar {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 1.5rem;
      font-size: 0.8125rem;
      color: #64748B;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
    }
    @media (min-width: 640px) {
      .info-bar {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
      }
    }
    .info-bar strong {
      color: #CBD5E1;
    }
    footer {
      position: relative;
      z-index: 10;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 1.25rem 1.5rem;
      background: rgba(15, 23, 42, 0.85);
      font-size: 0.75rem;
      color: #64748B;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      text-align: center;
    }
    @media (min-width: 640px) {
      .footer-inner {
        flex-direction: row;
        text-align: left;
      }
    }
    .team-access-form {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .access-input {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 0.375rem;
      padding: 0.4rem 0.65rem;
      font-size: 0.75rem;
      color: #FFFFFF;
      outline: none;
      width: 130px;
    }
    .access-input:focus {
      border-color: #D32027;
    }
    .access-btn {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #FFFFFF;
      padding: 0.4rem 0.65rem;
      border-radius: 0.375rem;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
    }
    .access-btn:hover {
      background: #D32027;
      border-color: #D32027;
    }
  </style>
</head>
<body>
  <div class="hero-glow"></div>

  <!-- Header -->
  <header>
    <div class="header-inner">
      <a href="/" class="logo-wrap">
        <img src="/assets/logo-white.svg" alt="Cleaning Care Trading Co." class="logo-img" onerror="this.style.display='none'">
        <div>
          <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.125rem; letter-spacing: -0.01em;">CLEANING CARE</div>
          <div style="font-size: 0.6875rem; color: #D32027; font-weight: 700; letter-spacing: 0.12em;">TRADING CO.</div>
        </div>
      </a>
      <div class="header-tag">Riyadh Wholesale Hub</div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <div class="container">
      <!-- Status Badge -->
      <div class="badge">
        <span class="badge-dot"></span>
        <span>Infrastructure Staging In Progress</span>
      </div>

      <!-- Main Headline -->
      <h1>
        Commercial Catalog &amp;<br>
        B2B Wholesale Platform<br>
        <span class="h1-accent">Is Launching Soon</span>
      </h1>

      <p class="subtitle">
        We are completing the final staging of the official <strong>Cleaning Care Trading Co.</strong> digital procurement catalog.
        Our 3 strategic Riyadh warehouses, fleet dispatch, and commercial quotation desk remain fully active and ready to fulfill your orders.
      </p>

      <!-- CTAs -->
      <div class="actions">
        <a href="https://wa.me/966562821089?text=Hello%20Cleaning%20Care%20Trading%20Co.%2C%20I%20would%20like%20to%20request%20an%20urgent%20commercial%20wholesale%20quotation." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.84 12.18 15.89C12.76 16.14 13.21 16.29 13.57 16.41C14.16 16.59 14.69 16.57 15.12 16.51C15.6 16.44 16.6 15.9 16.81 15.31C17.02 14.72 17.02 14.22 16.96 14.11C16.89 14.01 16.73 13.95 16.48 13.82C16.24 13.7 15.02 13.1 14.8 13.02C14.57 12.94 14.41 12.9 14.25 13.15C14.08 13.39 13.61 13.95 13.47 14.11C13.33 14.27 13.19 14.29 12.94 14.17C12.7 14.04 11.92 13.79 10.99 12.96C10.27 12.32 9.78 11.52 9.64 11.28C9.5 11.03 9.62 10.9 9.75 10.78C9.86 10.67 10 10.48 10.12 10.34C10.24 10.2 10.28 10.1 10.36 9.94C10.44 9.77 10.4 9.63 10.34 9.51C10.28 9.39 9.8 8.21 9.6 7.72C9.4 7.24 9.21 7.31 9.06 7.3C8.92 7.3 8.75 7.3 8.58 7.3L8.53 7.33Z"/>
          </svg>
          <span>Chat on WhatsApp (+966 56 282 1089)</span>
        </a>
        <a href="tel:+966562821089" class="btn btn-red">
          <span>Call Sales Desk</span>
        </a>
        <a href="mailto:sales@cleaningcaretrading.com" class="btn btn-outline">
          <span>sales@cleaningcaretrading.com</span>
        </a>
      </div>

      <!-- Infrastructure Metrics -->
      <div class="stats-card">
        <div class="stat-item">
          <div class="stat-metric">3<span>+</span></div>
          <div class="stat-label">Riyadh Warehouses</div>
        </div>
        <div class="stat-item">
          <div class="stat-metric">2</div>
          <div class="stat-label">Retail Stores</div>
        </div>
        <div class="stat-item">
          <div class="stat-metric">500<span>+</span></div>
          <div class="stat-label">Bulk SKUs Ready</div>
        </div>
        <div class="stat-item">
          <div class="stat-metric">Fast</div>
          <div class="stat-label">KSA Dispatch</div>
        </div>
      </div>

      <!-- Verified Entity Bar -->
      <div class="info-bar">
        <span>Location: <strong>Riyadh, Kingdom of Saudi Arabia</strong></span>
        <span>VAT No: <strong>314071638700003</strong></span>
        <span>Trusted Supplier to: <strong>Al Bawani, Alfanar, Hashem Contracting &amp; Stepco</strong></span>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <div>
        &copy; ${new Date().getFullYear()} Cleaning Care Trading Co. (شركة عناية التنظيف للتجارة). All Rights Reserved.
      </div>

      <!-- Quick Bypass Form for Team / Stakeholders -->
      <form class="team-access-form" method="GET" action="/">
        <label for="preview-key-input" style="font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em;">Team Access:</label>
        <input
          id="preview-key-input"
          type="password"
          name="preview_key"
          placeholder="Enter Passkey"
          class="access-input"
          aria-label="Enter preview passkey"
          required
        >
        <button type="submit" class="access-btn">Unlock</button>
      </form>
    </div>
  </footer>
</body>
</html>`;
}
