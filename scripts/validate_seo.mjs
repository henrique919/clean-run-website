#!/usr/bin/env node
/** Validate the built site's canonical URLs and sitemap coverage. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://www.cleanruniq.com';
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

function fail(message) {
  throw new Error(`SEO validation failed: ${message}`);
}

function readRequired(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`missing ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function validateSitemaps() {
  const sitemap = readRequired(path.join(DIST, 'sitemap.xml'));
  const urls = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<\/url>/g)]
    .map((match) => match[1]);
  if (urls.length === 0) {
    fail('sitemap.xml contains no URLs');
  }
  if (urls.length !== new Set(urls).size) {
    fail('sitemap.xml contains duplicate URLs');
  }
  if (urls.some((url) => !url.startsWith(`${SITE}/`))) {
    fail('every sitemap URL must use https://www.cleanruniq.com/');
  }

  const missing = CORE_PATHS
    .map((route) => `${SITE}${route}`)
    .filter((url) => !urls.includes(url));
  if (missing.length > 0) {
    fail(`core pages missing from sitemap.xml: ${missing.join(', ')}`);
  }

  const sitemapIndex = readRequired(path.join(DIST, 'sitemap-index.xml'));
  const children = [...sitemapIndex.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>\s*<\/sitemap>/g)]
    .map((match) => match[1]);
  if (children.length !== 1 || children[0] !== `${SITE}/sitemap.xml`) {
    fail('sitemap-index.xml must reference only the canonical sitemap.xml');
  }
}

function pageFile(route) {
  return route === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, route.replace(/^\/|\/$/g, ''), 'index.html');
}

function validateCorePages() {
  for (const route of CORE_PATHS) {
    const html = readRequired(pageFile(route));
    const canonical = html.match(
      /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,
    )?.[1];
    const expected = `${SITE}${route}`;
    if (canonical !== expected) {
      fail(`${route} canonical is ${JSON.stringify(canonical)}; expected ${expected}`);
    }
    if (!/<title>[^<]+<\/title>/i.test(html)) {
      fail(`${route} has no usable title`);
    }
    if (!/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i.test(html)) {
      fail(`${route} has no meta description`);
    }
  }

  const homepage = readRequired(path.join(DIST, 'index.html'));
  if (!homepage.includes('<title>CleanRun IQ |')) {
    fail('homepage title must begin with the CleanRun IQ brand');
  }
}

validateSitemaps();
validateCorePages();
console.log('SEO validation passed: canonical www URLs and core sitemap coverage are valid');
