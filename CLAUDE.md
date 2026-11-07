# CLAUDE.md — web Chatboti ve škole (chatveskole.cz)

Statický obsahový web neziskové organizace AI dětem pro učitele a vedení škol. Převádí se z WordPressu na Astro + Vercel. Obsah je v Markdownu a YAML v repozitáři; web ho jen vykresluje.

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
- `content/prompty/{pedagogove,zaci,archiv-2024}/` — databáze promptů (původní prompty; pedagogove a archiv-2024 vygeneruje `scripts/prevod-promptu.mjs` z exportu)
- `content/znalosti/znalosti.yaml` — odkazy na znalostní soubory na Google Disku
- `data/*.yaml` — data pro tabulky (funkce chatbotů, ceny)
- `migrace/redirects.json` — přesměrování starých URL (generuje `scripts/build-inventura.py`)
- `archiv/` — export starého WordPressu (`node scripts/export-wordpress.mjs --images`)
- `migrace/mapa-promptu.json` — který záznam staré databáze je prompt, žákovský prompt, nebo asistent (→ skill)
- `google-drive/` — složky pro Google Disk (systémový prompt + Data ke každému skillu), generuje `python3 scripts/build-google-drive.py`; není v gitu
- `src/` — Astro aplikace

## Příkazy

- `npm install` — instalace (Node 22+)
- `npm run dev` — vývojový server
- `npm run build` — build (před ním `prebuild`: vercel.json z `migrace/redirects.json` a kopie `archiv/uploads` do `public/archiv/uploads`); ZIPy skills, pluginy a vyhledávání přibudou ve fázi 3 a 5
- `npm run check` — kontrola frontmatteru stránek, skills, promptů, sad, interních odkazů a přesměrování (`scripts/check.mjs`) + `astro check`
- `npm run redirects` — přegeneruje `vercel.json` (needitovat ručně)
- Náhled vs. produkce: při `VERCEL_ENV=production` se generuje jen obsah se stavem `hotovo` (prompty `prevzato`); jinde vše se štítkem „Koncept“

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
- Astro, TypeScript, čisté CSS s tokeny z `docs/design.md`. Žádný CSS framework, žádná databáze.
- JavaScript jen tam, kde je potřeba interakce (kopírování promptu, záložky, menu, filtr katalogu).
- Přístupnost: WCAG AA, ovládání klávesnicí, mobil od 360 px.
- Žádné cookies a sledovací skripty třetích stran bez schválení. Fonty self-hostovat.
- Žádné tajné klíče v repozitáři.

**Postup**
- Pracuj po fázích z `docs/predani-claude-code.md`, malé změny, každou na samostatné větvi s náhledem na Vercelu.
- Po každé fázi spusť build a kontrolu odkazů a napiš Evě stručně, co je hotové a kde se na to podívat.
- Commity česky, stručně.
