# CLAUDE.md — web Chatboti ve škole (chatveskole.cz)

Statický obsahový web neziskové organizace AI dětem pro učitele a vedení škol. Převádí se z WordPressu na Astro; zatím běží na GitHub Pages z větve `main` (adresa s `/chatveskole`). Obsah je v Markdownu a YAML v repozitáři; web ho jen vykresluje.

## Než začneš

Přečti:
1. `docs/architektura.md` — stack, struktura, jak se generují skills, ZIPy a pluginy
2. `docs/design.md` — design tokeny a komponenty (vzor: `docs/design/vzor-funkce-chatbotu-2027.html`)
3. `docs/specifikace-skills.md` — formát `content/skills/*`
4. `docs/predani-claude-code.md` — fáze práce a co je hotové
5. `docs/otevrene-otazky.md` — co ještě není rozhodnuté (na tyhle věci se zeptej, nerozhoduj sám)

## Struktura

- `content/stranky/**.md` — stránky podle menu; frontmatter: title, menu, poradi, popis (meta description), sablona, data, stav, zdroje
- `content/navigace.yaml` — menu a generované stránky
- `content/skills/<slug>/` — SKILL.md, prompt.md, meta.yaml, references/
- `content/sady.yaml` — sady skills (= pluginy)
- `content/prompty/{pedagogove,vedeni,zaci,archiv-2024}/` — katalog promptů (původní prompty, převedené `scripts/prevod-promptu.mjs`); `archiv-2024` se v katalogu nezobrazuje, stránky existují kvůli starým odkazům
- `content/znalosti/znalosti.yaml` — odkazy na znalostní soubory na Google Disku
- `data/*.yaml` — data pro tabulky (funkce chatbotů, ceny); text s dvojtečkou dávejte do uvozovek, jinak build skončí chybou
- `<!-- komponenta: … -->` v Markdownu = místo pro datovou komponentu nebo úpravu následujícího textu (záložky, karty); seznam značek v `src/lib/komponenty.ts`
- `migrace/redirects.json` — přesměrování starých URL (generuje `scripts/build-inventura.py`)
- `archiv/` — export starého WordPressu (`node scripts/export-wordpress.mjs --images`)
- `migrace/mapa-promptu.json` — který záznam staré databáze je prompt, žákovský prompt, nebo asistent (→ skill)
- `google-drive/` — složky pro Google Disk (systémový prompt + Data ke každému skillu), generuje `python3 scripts/build-google-drive.py`; není v gitu
- `src/` — Astro aplikace

## Příkazy

- `npm install` — jednou po stažení
- `npm run dev` — vývojový server (http://localhost:4321)
- `npm run build` — ZIPy skills a pluginů (`scripts/build-downloads.mjs`), statický web do `dist/`, pak přesměrovací stránky starých URL, sitemap a robots.txt (`scripts/po-buildu.mjs`) a index vyhledávání (Pagefind)
- `npm run check` — kontrola interních odkazů v `dist/` a SKILL.md (`scripts/check-links.mjs`, `scripts/check-skills.py`)
- `BASE_PATH=/chatveskole npm run build` — build pro GitHub Pages (tak to dělá workflow `.github/workflows/deploy.yml`); web na podadrese je náhled a všechny stránky mají `noindex`

## Pravidla

**Obsah**
- Web je česky. Texty piš věcně, konkrétně, bez akademismů a anglicismů, krátké odstavce. Oslovujeme „vy“.
- Neměň význam textů v `content/` bez zadání. Opravy překlepů a formátování jsou v pořádku, věcné změny jen na požádání.
- Fakta o chatbotech (ceny, věk, funkce, data) ber jen z `data/*.yaml` nebo ze zdrojů ve frontmatteru. Když je měníš, aktualizuj i `aktualizovano` a zdroje. Nevymýšlej je.
- Nikde nežádej po učitelích jména žáků; v příkladech používej iniciály.
- Stránky se stavem `ke-kontrole` zobraz na náhledu se štítkem „Koncept“, v produkci jen po schválení.

**Skills**
- Formát podle `docs/specifikace-skills.md`. `name` = název složky, jen `a-z0-9-`, bez `claude`/`anthropic`.
- Validace při buildu: frontmatter jen `name` + `description` (≤ 1024 znaků, bez `<>`), existence `prompt.md` a `meta.yaml`, odkazy na `references/` existují, prompt bloky ```text ≤ 2500 znaků.
- ZIP pro Claude/Gemini má složku `<slug>/` v kořeni; ZIP pro Copilot má `SKILL.md` v kořeni. Znalostní soubory do ZIPu nepatří.
- Systémové prompty a znalosti nabízíme učitelům v Google Docs / na Disku (`meta.yaml → google_doc`, `znalosti`). Učitel nikdy nemá být posílán na GitHub.
- Pluginy mají prefix `aidetem-` a formát `.claude-plugin/plugin.json` + `skills/`; v kořeni repa `.claude-plugin/marketplace.json`.

**Kód**
- Astro, TypeScript, čisté CSS s tokeny z `docs/design.md` (`src/styles/global.css`). Žádný CSS framework, žádná databáze.
- Interní odkazy vždy přes `url()` z `src/lib/url.ts` (doplní base `/chatveskole`); odkazy v Markdownu přepisuje plugin `src/lib/rehype-base.mjs`.
- JavaScript jen tam, kde je potřeba interakce (kopírování promptu, záložky, menu, filtr katalogu).
- Přístupnost: WCAG AA, ovládání klávesnicí, mobil od 360 px.
- Žádné cookies a sledovací skripty třetích stran bez schválení. Fonty self-hostovat.
- Žádné tajné klíče v repozitáři.

**Postup**
- Pracuj po fázích z `docs/predani-claude-code.md`, malé změny, každou na samostatné větvi s pull requestem; po sloučení do `main` se web sám nasadí na GitHub Pages.
- Po každé fázi spusť build a kontrolu odkazů a napiš Evě stručně, co je hotové a kde se na to podívat.
- Commity česky, stručně.
