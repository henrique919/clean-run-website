#!/usr/bin/env node
/** Publish one canonical sitemap and a non-duplicating sitemap index. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITEMAP_0 = path.join(DIST, 'sitemap-0.xml');
const SITEMAP = path.join(DIST, 'sitemap.xml');
const SITEMAP_INDEX = path.join(DIST, 'sitemap-index.xml');
const SITE = 'https://www.cleanruniq.com';

// Put the pages most useful to branded-search visitors first. Google chooses
// sitelinks automatically, but a predictable, focused sitemap makes discovery
// and Search Console reporting much easier to audit.
const CORE_PATHS = [
  '/',
  '/features/',
  '/solutions/',
  '/pricing/',
  '/resources/',
  '/compare/',
  '/contact/',
  '/demo/',
  '/security/',
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function readUrls() {
  if (!fs.existsSync(SITEMAP_0)) {
    throw new Error(`Missing ${SITEMAP_0} — run astro build first`);
  }

  const xml = fs.readFileSync(SITEMAP_0, 'utf8');
  const urls = [...xml.matchAll(/<loc>(https:\/\/www\.cleanruniq\.com\/[^<]*)<\/loc>/g)]
    .map((match) => match[1]);
  if (urls.length === 0) {
    throw new Error('No URLs found in sitemap-0.xml');
  }

  const uniqueUrls = [...new Set(urls)];
  const coreRank = new Map(
    CORE_PATHS.map((route, index) => [`${SITE}${route}`, index]),
  );
  return uniqueUrls.sort((a, b) => {
    const rankA = coreRank.get(a) ?? coreRank.size;
    const rankB = coreRank.get(b) ?? coreRank.size;
    return rankA - rankB || a.localeCompare(b);
  });
}

function writeSitemap(urls) {
  const entries = urls
    .map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`)
    .join('\n');
  fs.writeFileSync(
    SITEMAP,
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `${entries}\n</urlset>\n`,
    'utf8',
  );
}

function writeSitemapIndex() {
  fs.writeFileSync(
    SITEMAP_INDEX,
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `  <sitemap>\n` +
      `    <loc>${SITE}/sitemap.xml</loc>\n` +
      `  </sitemap>\n` +
      `</sitemapindex>\n`,
    'utf8',
  );
}

const urls = readUrls();
writeSitemap(urls);
writeSitemapIndex();
console.log(`Synced ${urls.length} URLs to sitemap.xml and sitemap-index.xml`);
