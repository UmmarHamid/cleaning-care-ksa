/**
 * Cloudflare Worker Entry Point — Cleaning Care Trading Co.
 *
 * Intercepts requests for Cloudflare Workers with Static Assets.
 * Enforces "Under Construction / Maintenance Mode" on the production domain.
 */

import { renderMaintenanceHtml } from './maintenance-page';

export interface Env {
  ASSETS: {
    fetch: typeof fetch;
  };
  MAINTENANCE_MODE?: string;
  BYPASS_SECRET?: string;
}

const DEFAULT_BYPASS_SECRET = 'cc-preview-2026';
const COOKIE_NAME = 'cc_maintenance_bypass';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days in seconds

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 1. If maintenance mode is explicitly turned off via env var, pass through
    if (env.MAINTENANCE_MODE === 'false' || env.MAINTENANCE_MODE === '0') {
      return env.ASSETS.fetch(request);
    }

    // 2. Allow static assets, images, and system routes through
    const isStaticAsset =
      url.pathname.startsWith('/assets/') ||
      url.pathname.startsWith('/images/') ||
      url.pathname.startsWith('/_next/') ||
      url.pathname === '/icon.svg' ||
      url.pathname === '/favicon.ico' ||
      url.pathname === '/robots.txt' ||
      url.pathname === '/sitemap.xml';

    if (isStaticAsset) {
      return env.ASSETS.fetch(request);
    }

    // 3. Automatically bypass PR / branch preview environments
    const isCustomDomain =
      url.hostname.includes('cleaningcaretradingco.com') ||
      url.hostname.includes('cleaningcaretrading.com') ||
      url.hostname.includes('cleaningcare.com');

    if (!isCustomDomain) {
      const isWorkersDev = url.hostname.endsWith('.workers.dev');
      const isPagesDev = url.hostname.endsWith('.pages.dev');

      // In workers.dev, root is <worker>.<subdomain>.workers.dev (2 segments before workers.dev).
      // Previews have 3+ segments: <preview>.<worker>.<subdomain>.workers.dev.
      const workerParts = isWorkersDev ? url.hostname.split('.workers.dev')[0].split('.') : [];
      const isWorkerPreview = isWorkersDev && workerParts.length > 2;

      // In pages.dev, root is <project>.pages.dev (1 segment before pages.dev).
      // Previews have 2+ segments: <branch>.<project>.pages.dev.
      const pagesParts = isPagesDev ? url.hostname.split('.pages.dev')[0].split('.') : [];
      const isPagesPreview = isPagesDev && pagesParts.length > 1;

      if (isWorkerPreview || isPagesPreview) {
        return env.ASSETS.fetch(request);
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
      return env.ASSETS.fetch(request);
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
  },
};

export default worker;
