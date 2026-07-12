// scripts/build-variants.ts
import { execFileSync } from 'child_process';
import { existsSync, mkdirSync, cpSync, readdirSync } from 'fs';
import { resolve } from 'path';

const distDir = resolve('dist');
const sitesDir = resolve(distDir, 'sites');

// Ensure output dirs exist
if (!existsSync(sitesDir)) {
  mkdirSync(sitesDir, { recursive: true });
}

console.log('Building gallery...');
execFileSync('pnpm', ['build'], { cwd: resolve('gallery'), stdio: 'inherit' });

// Copy gallery build to dist root
const galleryDist = resolve('gallery', 'dist');
if (existsSync(galleryDist)) {
  cpSync(galleryDist, distDir, { recursive: true });
  console.log('Gallery build copied to dist/');
}

// Copy each standalone variant site into dist/sites/<slug>/ so the gallery's
// preview iframes (src="/sites/<slug>/") actually resolve. Without this the
// iframes 404 to the host's fallback page — every preview looks identical and
// the retries make the gallery crawl.
const srcSitesDir = resolve('sites');
let copied = 0;
if (existsSync(srcSitesDir)) {
  for (const entry of readdirSync(srcSitesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    cpSync(resolve(srcSitesDir, entry.name), resolve(sitesDir, entry.name), {
      recursive: true,
    });
    copied++;
  }
}
console.log(`Copied ${copied} variant site(s) into dist/sites/`);

console.log('\nBuild complete. Output in dist/');
