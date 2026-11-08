# Předání Claude Code: jak web postavit

Tento dokument je pro Evu (jak práci spustit) i pro Claude Code (co dělat a v jakém pořadí).

## Co je hotové (7. 11. 2026)

- [x] Audit celého webu a rozhodnutí o každé URL — `docs/audit-stavajiciho-webu.md`, `migrace/inventura.csv`
- [x] 176 přesměrování starých URL — `migrace/redirects.json`
- [x] Nové menu — `content/navigace.yaml`
- [x] Texty všech 24 stránek nového menu + homepage — `content/stranky/`
- [x] 18 skills ve 5 sadách (koncepty ke kontrole) — `content/skills/`, `content/sady.yaml`
- [x] 8 žákovských promptů + úvod — `content/prompty/zaci/`
- [x] Export starého webu (7. 11. 2026, `archiv/`) a převod 88 promptů do databáze — `content/prompty/pedagogove` (32) a `archiv-2024` (56), obrázky z tipů v `archiv/uploads`. Dva prompty ručně opravené (Slovníček pojmů, Nápadníček — geografie), proto převod znovu spouštět **bez** `--prepsat`.
- [x] Složky pro Google Disk (systémové prompty + data) — `google-drive/`, nahrané na sdílený disk, odkazy v `meta.yaml`
- [x] Pluginy pro sady a marketplace — `scripts/build-plugins.py` → `plugins/`, `.claude-plugin/marketplace.json`, ZIPy v `dist/pluginy/` (build webu je má jen spouštět a ZIPy publikovat)
- [x] Data pro tabulky — `data/funkce-chatbotu.yaml`, `data/ceny.yaml`
- [x] Design, architektura, specifikace skills — `docs/`
- [x] Exportní skript z WordPressu — `scripts/export-wordpress.mjs`
- [x] Schválený design (8. 11. 2026) — pravidla v `docs/design.md`, návrh v Claude Design
- [x] Astro aplikace, fáze 2 a 3 (8. 11. 2026): hlavička, patička, homepage, obsahové stránky, katalog a detail skills, sady, katalog a detail promptů včetně žákovských, ZIPy ke stažení, 404, kontrola odkazů (`npm run check`), nasazení na GitHub Pages (`.github/workflows/deploy.yml`)

- [x] Fáze 4 — datové stránky (8. 11. 2026): Změny ve funkcích 2026 (časová osa s čárou „dnes“, matice s přepínačem nástrojů na mobilu, karty nástrojů, zdroje), ceník z `data/ceny.yaml` se štítkem „ověřujeme“, dlaždice sad, karty pluginů, tabulka Tiny, záložky instalace, karty metodik, tabulka nástrojů jako karty na mobilu

- [x] Fáze 5 — SEO a vyhledávání (8. 11. 2026): 175 přesměrovacích stránek starých URL (GitHub Pages neumí 301), sitemap.xml, robots.txt, kanonické URL, Open Graph obrázek, vyhledávání Pagefind (`/hledat`, lupa v hlavičce), `noindex` na náhledu, kontrola odkazů včetně cílů přesměrování

Ještě chybí: analytika (čeká na rozhodnutí, otázka 3), kontrola skills Evou a týmem, napojení domény.

## Krok 0 — příprava (Eva, 15 minut)

1. Složku `chatveskole` (tuto) nahrajte do repozitáře `aidetemcz/chatveskole`:
   - v GitHub Desktop: *Add → Add existing repository* → vyberte složku → *Publish*, nebo
   - v terminálu ve složce: `git init`, `git add .`, `git commit -m "Obsah a podklady pro nový web"`, `git branch -M main`, `git remote add origin https://github.com/aidetemcz/chatveskole.git`, `git push -u origin main`.
2. Otevřete Claude Code v této složce (v aplikaci Claude záložka **Code**, nebo `claude` v terminálu).
3. Propojte repozitář s Vercelem (vercel.com → *Add New Project* → *Import* `aidetemcz/chatveskole`). Framework zvolí Claude Code v kroku 1; zatím stačí import.
4. Stáhněte obsah starého webu (pokud to neudělá Claude Code ve fázi 1). V příkazovém řádku (cmd) nebo PowerShellu — nejrychleji: otevřete složku projektu v Průzkumníku, do adresního řádku napište `cmd` a stiskněte Enter:
   ```
   node --version
   node scripts/export-wordpress.mjs --images
   node scripts/prevod-promptu.mjs
   ```
   Pokud `node --version` hlásí chybu, nainstalujte Node.js LTS z https://nodejs.org (výchozí volby), zavřete a znovu otevřete příkazový řádek. Export je ve složce `archiv/`, převedené prompty v `content/prompty/pedagogove/` a `content/prompty/archiv-2024/`.

## Fáze a prompty pro Claude Code

Každou fázi zadejte zvlášť. Po každé fázi si prohlédněte náhled na Vercelu a teprve pak pokračujte.

### Fáze 1 — Export a základ projektu

```text
Přečti CLAUDE.md a všechny soubory v docs/. Pak:
1) Pokud ještě neexistuje archiv/wordpress/export.json, spusť `node scripts/export-wordpress.mjs --images` (28 stránek, 119 záznamů). Pak `node scripts/prevod-promptu.mjs` a zkontroluj content/prompty/ (32 pedagogove, 56 archiv-2024); soubory se stavem ke-kontrole projdi ručně.
2) Založ Astro projekt podle docs/architektura.md (TypeScript, content collections pro content/stranky, content/skills, content/prompty/zaci; data z data/*.yaml).
3) Nastav vercel.json s přesměrováními z migrace/redirects.json.
4) Přidej `npm run check`, který validuje frontmatter stránek a skills podle docs/specifikace-skills.md a vypíše chyby.
Nic nenasazuj do produkce. Na konci mi napiš, co je hotové a co ti chybí.
```

### Fáze 2 — Design a kostra webu

```text
Podle docs/design.md a vzoru docs/design/vzor-funkce-chatbotu-2027.html vytvoř:
design tokeny (světlý i tmavý režim), self-hostované fonty Space Grotesk a Inter, layout s hlavičkou
(logo AI dětem, rozbalovací menu z content/navigace.yaml, tlačítko Katalog skills), patičku
(menu, kontakty AI dětem, sociální sítě, newsletter) a šablonu obsahové stránky (eyebrow s názvem
sekce, H1, obsah, zdroje, odkaz na další stránku). Vykresli všechny stránky z content/stranky.
Mobil od 360 px, WCAG AA.
```

### Fáze 3 — Skills

```text
Postav katalog /skills (filtr podle sady a „pro koho“), detail /skills/[slug] a rozcestníky /sady/[slug]
podle docs/architektura.md, sekce „Jak se generují skills“. Na detailu: popis, režimy, bloky promptů
z prompt.md s tlačítkem Kopírovat, tlačítka Stáhnout skill (Claude/Gemini) a Stáhnout pro Copilot,
tlačítko Systémový prompt (Google Docs) z meta.yaml → google_doc, znalosti ke stažení z content/znalosti/znalosti.yaml
(jen verejne: true), autoři a metodika, a pokud jsou v meta.yaml původní GPT/Gem, upozornění
„Tento asistent končí 11. 12. 2026 (GPT) / postupně (Gem) — použijte skill nebo prompt“.
Do buildu přidej generování ZIPů skills, pluginů pro sady (prefix aidetem-) a .claude-plugin/marketplace.json.
Databáze promptů na /funkce/prompty (přepínač Pro pedagogy / Pro žáky / Starší prompty 2024, filtr podle kategorie s kotvami #<kategorie_slug>, tlačítko Kopírovat), detail /funkce/prompty/[slug] a žákovské /funkce/prompty/zaci a /funkce/prompty/zaci/[slug].
```

### Fáze 4 — Datové stránky

```text
Stránku /funkce/zmeny-2026 vykresli z data/funkce-chatbotu.yaml tak, aby vypadala a fungovala jako
vzor docs/design/vzor-funkce-chatbotu-2027.html (časová osa s čárou „dnes“ počítanou z aktuálního data,
matice s kuličkami, na mobilu přepínač nástrojů, karty nástrojů, zdroje). Stránku /zaciname/kolik-stoji-chatboti
vykresli z data/ceny.yaml (karty tarifů). Údaje označené ⚠ zobraz se štítkem „ověřujeme“.
```

### Fáze 5 — SEO, vyhledávání, kontrola

```text
Přidej meta description z frontmatteru, Open Graph obrázky, sitemap.xml, robots.txt, kanonické URL,
vyhledávání Pagefind, stránku 404 s odkazem na katalog skills, analytiku bez cookies (podle rozhodnutí
v docs/otevrene-otazky.md). Spusť kontrolu všech interních i externích odkazů a přesměrování
(každá URL z migrace/inventura.csv musí vést na existující stránku) a pošli mi seznam problémů.
```

### Fáze 6 — Spuštění

1. Eva a tým projdou náhled, hlavně skills (stav `koncept` → `hotovo`).
2. Claude Code přepne stránky `ke-kontrole` podle schválení.
3. DNS chatveskole.cz u Váš hosting → Vercel (záznamy ukáže Vercel v nastavení domény).
4. Kontrola přesměrování na produkci, odeslání sitemap do Google Search Console.

### Fáze 7 — Volitelné

- Automatická synchronizace SKILL.md ↔ Google Doc (Google Drive API, GitHub Action). Do té doby ručně nebo přes Clauda s konektorem Google Drive.
- Podání pluginů do adresářů Claude a ChatGPT.
- Anglická nebo slovenská verze (struktura `content/` to unese).

## Jak web udržovat (po spuštění)

Typické úkoly pro Claude Code:

- *„Výrobci změnili ceny — aktualizuj data/ceny.yaml podle oficiálních ceníků a uveď zdroje.“*
- *„Přidej nový skill podle docs/specifikace-skills.md z tohoto promptu: …“*
- *„Projdi všechny skills a zkontroluj, jestli odpovídají specifikaci. Vypiš problémy, nic neměň.“*
- *„Gemini změnil věkové limity — najdi všechna místa na webu, kde je uvádíme, a uprav je.“*

Úpravy textů zvládnete i bez Claude Code přímo na GitHubu (tužka u souboru → upravit → *Commit*). Vercel web sám znovu nasadí.
