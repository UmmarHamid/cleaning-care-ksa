const fs = require('fs');
const path = require('path');

const code = 'delete process.env.WRANGLER_CI_MATCH_TAG; delete process.env.CLOUDFLARE_CI_MATCH_WORKER_TAG;';

function patchFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('delete process.env.WRANGLER_CI_MATCH_TAG')) return;

    if (content.startsWith('#!')) {
      const firstLineEnd = content.indexOf('\n');
      content = content.slice(0, firstLineEnd + 1) + code + '\n' + content.slice(firstLineEnd + 1);
    } else {
      content = code + '\n' + content;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[fix-wrangler-ci] Successfully patched: ${filePath}`);
  } catch (err) {
    console.warn(`[fix-wrangler-ci] Warning patching ${filePath}:`, err.message);
  }
}

// Patch local node_modules
patchFile(path.join(process.cwd(), 'node_modules/wrangler/bin/wrangler.js'));
patchFile(path.join(process.cwd(), 'node_modules/wrangler/wrangler-dist/cli.js'));

// Patch pnpm virtual store
const pnpmDir = path.join(process.cwd(), 'node_modules/.pnpm');
if (fs.existsSync(pnpmDir)) {
  const entries = fs.readdirSync(pnpmDir);
  for (const entry of entries) {
    if (entry.startsWith('wrangler@')) {
      patchFile(path.join(pnpmDir, entry, 'node_modules/wrangler/bin/wrangler.js'));
      patchFile(path.join(pnpmDir, entry, 'node_modules/wrangler/wrangler-dist/cli.js'));
    }
  }
}
