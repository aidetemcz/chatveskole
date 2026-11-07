#!/usr/bin/env node
/**
 * Export obsahu starého webu chatveskole.cz (WordPress) do archiv/wordpress/.
 *
 * Spuštění (na počítači s přístupem na internet, Node 18+):
 *   npm install turndown        # volitelné — lepší převod HTML → Markdown
 *   node scripts/export-wordpress.mjs
 *   node scripts/export-wordpress.mjs --images   # stáhne i obrázky z wp-content/uploads
 *
 * Výstup:
 *   archiv/wordpress/export.json                 — kompletní surová data (HTML) všech stránek a záznamů
 *   archiv/wordpress/stranky/<slug>.md           — stránky (page)
 *   archiv/wordpress/databaze-promptu/<slug>.md  — záznamy databáze promptů (manual_kb)
 *   archiv/wordpress/kategorie.json, stitky.json
 *   archiv/uploads/...                           — obrázky (jen s --images)
 *
 * Skript jen čte veřejné REST API, nic na webu nemění.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = "https://chatveskole.cz";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "archiv", "wordpress");
const WITH_IMAGES = process.argv.includes("--images");

let turndown = null;
try {
  const { default: TurndownService } = await import("turndown");
  turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
} catch {
  console.warn("turndown není nainstalovaný — Markdown bude jen zjednodušený (npm install turndown).");
}

const decode = (s = "") =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
   .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
   .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
   .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#8211;/g, "–");

function toMarkdown(html) {
  if (turndown) return turndown.turndown(html);
  return decode(
    html
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, "")
      .replace(/<h([1-6])[^>]*>/gi, (_, n) => "\n\n" + "#".repeat(+n) + " ")
      .replace(/<\/h[1-6]>/gi, "\n\n")
      .replace(/<li[^>]*>/gi, "\n- ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
      .replace(/<img [^>]*src="([^"]+)"[^>]*>/gi, "![]($1)")
      .replace(/<[^>]+>/g, "")
  ).replace(/\n{3,}/g, "\n\n").trim();
}

async function getAll(endpoint) {
  const items = [];
  for (let page = 1; ; page++) {
    const url = `${BASE}/wp-json/wp/v2/${endpoint}${endpoint.includes("?") ? "&" : "?"}per_page=100&page=${page}`;
    const res = await fetch(url, { headers: { "User-Agent": "chatveskole-export/1.0" } });
    if (!res.ok) {
      if (page > 1 && res.status === 400) break;
      throw new Error(`${url} → HTTP ${res.status}`);
    }
    items.push(...(await res.json()));
    const total = Number(res.headers.get("x-wp-totalpages") || 1);
    if (page >= total) break;
  }
  return items;
}

const yamlStr = (s) => JSON.stringify(s ?? "");

async function main() {
  await mkdir(join(OUT, "stranky"), { recursive: true });
  await mkdir(join(OUT, "databaze-promptu"), { recursive: true });

  console.log("Stahuji stránky, databázi promptů, kategorie a štítky…");
  const [pages, kb, cats, tags] = await Promise.all([
    getAll("pages"),
    getAll("manual_kb"),
    getAll("manualknowledgebasecat"),
    getAll("manual_kb_tag"),
  ]);
  const catName = Object.fromEntries(cats.map((c) => [c.id, decode(c.name)]));
  const tagName = Object.fromEntries(tags.map((t) => [t.id, decode(t.name)]));

  await writeFile(join(OUT, "export.json"), JSON.stringify({ exportovano: new Date().toISOString(), pages, kb, cats, tags }, null, 2));
  await writeFile(join(OUT, "kategorie.json"), JSON.stringify(cats.map((c) => ({ id: c.id, slug: c.slug, nazev: decode(c.name), pocet: c.count, link: c.link })), null, 2));
  await writeFile(join(OUT, "stitky.json"), JSON.stringify(tags.map((t) => ({ id: t.id, slug: t.slug, nazev: decode(t.name), pocet: t.count })), null, 2));

  const images = new Set();
  const collectImages = (html) => {
    for (const m of html.matchAll(/https?:\/\/(?:chatveskole|gptveskole)\.cz\/wp-content\/uploads\/[^"'\s)]+\.(?:png|jpe?g|gif|webp|svg)/gi)) images.add(m[0]);
  };

  for (const p of pages) {
    const html = p.content?.rendered ?? "";
    collectImages(html);
    const fm = [
      "---",
      `title: ${yamlStr(decode(p.title?.rendered))}`,
      `slug: ${yamlStr(p.slug)}`,
      `url: ${yamlStr(p.link)}`,
      `upraveno: ${yamlStr(p.modified)}`,
      "---",
      "",
    ].join("\n");
    await writeFile(join(OUT, "stranky", `${p.slug || "index"}.md`), fm + toMarkdown(html) + "\n");
  }

  for (const p of kb) {
    const html = p.content?.rendered ?? "";
    collectImages(html);
    const fm = [
      "---",
      `title: ${yamlStr(decode(p.title?.rendered))}`,
      `slug: ${yamlStr(p.slug)}`,
      `url: ${yamlStr(p.link)}`,
      `upraveno: ${yamlStr(p.modified)}`,
      `kategorie: ${JSON.stringify((p.manualknowledgebasecat || []).map((id) => catName[id]).filter(Boolean))}`,
      `stitky: ${JSON.stringify((p.manual_kb_tag || []).map((id) => tagName[id]).filter(Boolean))}`,
      "---",
      "",
    ].join("\n");
    await writeFile(join(OUT, "databaze-promptu", `${p.slug}.md`), fm + toMarkdown(html) + "\n");
  }

  await writeFile(join(OUT, "obrazky.txt"), [...images].sort().join("\n") + "\n");
  console.log(`Hotovo: ${pages.length} stránek, ${kb.length} záznamů databáze, ${cats.length} kategorií, ${images.size} obrázků v obsahu.`);

  if (WITH_IMAGES) {
    let ok = 0;
    for (const url of images) {
      const rel = url.replace(/^https?:\/\/[^/]+\/wp-content\/uploads\//, "");
      const dest = join(ROOT, "archiv", "uploads", decodeURIComponent(rel));
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await mkdir(dirname(dest), { recursive: true });
        await writeFile(dest, Buffer.from(await res.arrayBuffer()));
        ok++;
      } catch (e) {
        console.warn(`Obrázek se nestáhl: ${url} (${e.message})`);
      }
    }
    console.log(`Staženo ${ok} z ${images.size} obrázků do archiv/uploads/.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
