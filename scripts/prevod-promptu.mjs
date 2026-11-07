#!/usr/bin/env node
/**
 * Převede prompty ze starého webu (archiv/wordpress/export.json) do databáze promptů
 * v content/prompty/<skupina>/<slug>.md. Zachovává původní znění promptů.
 *
 * Předpoklad: nejdřív proběhl export  →  node scripts/export-wordpress.mjs
 * Spuštění:                              node scripts/prevod-promptu.mjs [--prepsat]
 *
 * Skupiny (podle migrace/mapa-promptu.json, kterou generuje scripts/build-inventura.py):
 *   pedagogove   — 32 promptů pro pedagogy z roku 2025
 *   archiv-2024  — 56 starších promptů (2024), u vizualizací odkaz na Vibe coding
 *   zaci         — 8 žákovských promptů (už upravené ručně, přeskočí se, pokud existují)
 *   asistent     — AI asistenti, ti jsou převedení na skills → přeskočí se
 * Existující soubory se bez --prepsat nepřepisují.
 */
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { htmlToText, extractPrompt, decode } from "./lib/prompt-extract.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PREPSAT = process.argv.includes("--prepsat");
const exists = (p) => access(p).then(() => true, () => false);

const exportPath = join(ROOT, "archiv", "wordpress", "export.json");
if (!(await exists(exportPath))) {
  console.error("Chybí archiv/wordpress/export.json — nejdřív spusťte: node scripts/export-wordpress.mjs");
  process.exit(1);
}
const { kb, cats } = JSON.parse(await readFile(exportPath, "utf8"));
const mapa = JSON.parse(await readFile(join(ROOT, "migrace", "mapa-promptu.json"), "utf8"));

const catName = Object.fromEntries(cats.map((c) => [c.id, decode(c.name).replace(/\s*→\s*$/, "").trim()]));
const slugify = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const IGNOROVANE_KATEGORIE = new Set(["Prompty pro pedagogy"]);
const y = (s) => JSON.stringify(s ?? "");

const skillTitle = {};
for (const slug of new Set(Object.values(mapa).map((m) => m.skill).filter(Boolean))) {
  try {
    const meta = await readFile(join(ROOT, "content", "skills", slug, "meta.yaml"), "utf8");
    skillTitle[slug] = (meta.match(/^title:\s*(.+)$/m) || [])[1]?.trim() || slug;
  } catch { skillTitle[slug] = slug; }
}

const stats = { zapsano: 0, preskoceno: 0, neznamy: [] };
for (const p of kb) {
  const m = mapa[p.slug];
  if (!m || ["asistent", "vynechat"].includes(m.skupina)) continue;
  const out = join(ROOT, "content", "prompty", m.skupina, `${p.slug}.md`);
  // žákovské prompty jsou ručně upravené — nepřepisovat ani s --prepsat
  if ((await exists(out)) && (!PREPSAT || m.skupina === "zaci")) { stats.preskoceno++; continue; }

  const title = decode(p.title?.rendered ?? p.slug).replace(/​/g, "").trim();
  const kategorie = (p.manualknowledgebasecat || []).map((id) => catName[id]).filter((c) => c && !IGNOROVANE_KATEGORIE.has(c));
  const r = extractPrompt(htmlToText(p.content?.rendered ?? ""));
  const fm = [
    "---",
    `title: ${y(title)}`,
    `slug: ${y(p.slug)}`,
    `skupina: ${m.skupina}`,
    `kategorie: ${JSON.stringify(kategorie)}`,
    `kategorie_slug: ${JSON.stringify(kategorie.map(slugify))}`,
    `skill: ${m.skill ? y(m.skill) : "null"}`,
    `puvodni_url: ${y(p.link)}`,
    `puvodni_uprava: ${y(p.modified)}`,
    `stav: ${r.format === "neznamy" ? "ke-kontrole" : "prevzato"}`,
    "---",
    "",
  ];
  const body = [];
  if (r.format === "2025") {
    body.push("## Prompt", "", "```text", r.prompt || "", "```", "");
    if (r.cil) body.push("## Co je cílem promptu", "", r.cil, "");
    if (r.pouziti) body.push("## Jak prompt použít", "", r.pouziti, "");
  } else if (r.format === "2024") {
    for (const pr of r.prompts) {
      body.push(r.prompts.length > 1 ? `## ${pr.nadpis}` : "## Prompt", "", "```text", pr.text, "```", "");
    }
    if (r.tipy) body.push("## Tipy", "", r.tipy, "");
    body.push("> Starší prompt z roku 2024. Chatboti od té doby umí mnohem víc — výsledek bude jiný než na původních ukázkách.", "");
  } else {
    stats.neznamy.push(p.slug);
    body.push("<!-- Strukturu se nepodařilo rozpoznat — zkontrolovat ručně. -->", "", htmlToText(p.content?.rendered ?? ""), "");
  }
  if (m.skill) body.push(`**Používáte tento prompt často?** Stejný úkol zvládne skill [${skillTitle[m.skill]}](/skills/${m.skill}), který si můžete nainstalovat do svého chatbota.`, "");
  if (m.vibe) body.push("**Dnes už i jako aplikace:** podívejte se, jak podobnou vizualizaci postavit přímo v chatbotu — [Vibe coding: materiály do výuky](/vibe-coding/materialy-do-vyuky).", "");

  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, fm.join("\n") + body.join("\n").replace(/\n{3,}/g, "\n\n"));
  stats.zapsano++;
}
console.log(`Zapsáno ${stats.zapsano} promptů, přeskočeno ${stats.preskoceno} existujících.`);
if (stats.neznamy.length) console.log(`Ke kontrole (nerozpoznaná struktura): ${stats.neznamy.join(", ")}`);
