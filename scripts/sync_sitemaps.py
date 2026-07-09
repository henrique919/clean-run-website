#!/usr/bin/env python3
"""Regenerate sitemap.xml and sitemap-index.xml from Astro's sitemap-0.xml."""

from __future__ import annotations

import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
SITEMAP_0 = DIST / "sitemap-0.xml"
SITEMAP = DIST / "sitemap.xml"
SITEMAP_INDEX = DIST / "sitemap-index.xml"
SITE = "https://www.cleanruniq.com"
TODAY = date.today().isoformat()


def read_urls() -> list[str]:
    if not SITEMAP_0.exists():
        raise SystemExit(f"Missing {SITEMAP_0} — run astro build first")
    text = SITEMAP_0.read_text(encoding="utf-8")
    urls = re.findall(r"<loc>(https://www\.cleanruniq\.com/[^<]*)</loc>", text)
    if not urls:
        raise SystemExit("No URLs found in sitemap-0.xml")
    return urls


def priority_for(url: str) -> str:
    if url.rstrip("/") == SITE:
        return "1.0"
    if url.endswith("/sep.html"):
        return "0.8"
    return "0.7"


def write_sitemap(urls: list[str]) -> None:
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for loc in urls:
        lines.extend(
            [
                "  <url>",
                f"    <loc>{loc}</loc>",
                f"    <lastmod>{TODAY}</lastmod>",
                "    <changefreq>monthly</changefreq>",
                f"    <priority>{priority_for(loc)}</priority>",
                "  </url>",
            ]
        )
    lines.append("</urlset>")
    SITEMAP.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_sitemap_index() -> None:
    SITEMAP_INDEX.write_text(
        '<?xml version="1.0" encoding="UTF-8"?>'
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        f"<sitemap><loc>{SITE}/sitemap-0.xml</loc></sitemap>"
        f"<sitemap><loc>{SITE}/sitemap.xml</loc></sitemap>"
        "</sitemapindex>",
        encoding="utf-8",
    )


def main() -> None:
    urls = read_urls()
    write_sitemap(urls)
    write_sitemap_index()
    print(f"Synced {len(urls)} URLs to sitemap.xml and sitemap-index.xml")


if __name__ == "__main__":
    main()
