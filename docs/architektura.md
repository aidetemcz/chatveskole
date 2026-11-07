# Architektura: jak bude web postavený

## Krátká odpověď na otázku „Budu potřebovat databázi?“

**Ne.** Web je obsahový — stránky, skills, prompty, tabulky. Všechno může žít v souborech v repozitáři a sestavit se do statických stránek. Stačí **GitHub + Vercel**.

Výhody:
- žádná databáze, žádný WordPress, žádné aktualizace pluginů a bezpečnostní díry,
- každá změna je v historii GitHubu a dá se vrátit,
- hromadné úpravy přes Claude Code („aktualizuj věkové limity na všech stránkách“),
- rychlý web, nízké náklady.

## Doporučený stack

| Vrstva | Volba | Proč |
|---|---|---|
| Framework | **Astro** (content collections, Markdown/MDX) | je stavěný na obsahové weby, z Markdownu dělá rychlé statické stránky, interaktivní kousky (tlačítko Kopírovat, záložky) přidá jen tam, kde jsou potřeba |
| Obsah | Markdown + YAML v `content/` a `data/` | upravíte ho v GitHubu, ve VS Code nebo přes Claude Code |
| Styl | čisté CSS s tokeny z `docs/design.md` | bez frameworku, design tokeny 1:1 z artefaktu |
| Vyhledávání | **Pagefind** | statické hledání, funguje bez serveru |
| ZIPy skills a pluginů | build skript (Node, `archiver` nebo `jszip`) | generuje se při každém buildu z `content/skills` |
| Hosting | **Vercel** (placený tarif AI dětem, rozhodnuto 7. 11. 2026) | automatický deploy z GitHubu, náhledové verze pro každou změnu |
| Přesměrování | `vercel.json` z `migrace/redirects.json` | 176 trvalých přesměrování starých URL |
| Analytika | **Google Analytics 4** (rozhodnuto 7. 11. 2026) | používá cookies → lišta se souhlasem, GA4 se načte až po souhlasu (Consent Mode v2) |

Alternativa: Next.js (pokud chcete stejný stack jako ostatní appky AI dětem na Vercelu). Pro tento typ webu je ale Astro jednodušší a rychlejší.

> **Tarif Vercelu:** AI dětem má placený tarif, který použití organizací povoluje (bezplatný Hobby je jen pro osobní nekomerční použití).

## Co by potřebovalo server nebo databázi — a jak to vyřešit bez nich

| Funkce | Řešení bez databáze |
|---|---|
| Kontaktní formulář, „Pošlete nám skill“ | Google Formulář (jako dnes) |
| Newsletter | formulář Ecomail (jako dnes) |
| Hodnocení „Bylo to přínosné?“ | vynechat, nebo měřit kliknutí v analytice; pokud by bylo nutné, Vercel KV / Upstash Redis + jedna serverless funkce |
| Systémové prompty a znalosti | zůstávají v Google Docs / na Google Disku (rozhodnutí 7. 11. 2026), web na ně odkazuje z `meta.yaml` — viz sekce „Google Docs“ níže |
| Počítadlo stažení skills | analytika (událost „download“) |

## Struktura repozitáře

```
chatveskole/
├── CLAUDE.md                 # pravidla pro Claude Code
├── README.md                 # návod pro lidi
├── content/
│   ├── navigace.yaml         # menu
│   ├── sady.yaml             # sady skills = pluginy
│   ├── stranky/              # texty stránek podle menu (Markdown)
│   ├── skills/<slug>/        # SKILL.md, prompt.md, meta.yaml, references/
│   ├── prompty/              # databáze promptů: pedagogove/, zaci/, archiv-2024/
│   └── znalosti/             # seznam znalostních souborů na Google Disku (znalosti.yaml)
├── data/                     # funkce-chatbotu.yaml, ceny.yaml
├── migrace/                  # inventura.csv, redirects.json
├── archiv/                   # export starého WordPressu (po spuštění skriptu)
├── docs/                     # audit, architektura, design, specifikace skills, předání
├── google-drive/             # vygenerované složky pro Google Disk (není v gitu)
├── scripts/                  # export z WordPressu, inventura, převod promptů, složky pro Disk
└── src/                      # Astro aplikace (vytvoří Claude Code)
```

## Jak se generují skills

Pro každou složku `content/skills/<slug>/` build vytvoří:

1. **Stránku** `/skills/<slug>` — popis, režimy, blok promptu s tlačítkem Kopírovat (z `prompt.md`), tlačítka ke stažení, tlačítko **Systémový prompt (Google Docs)** z `meta.yaml → google_doc`, seznam **Znalosti ke stažení (Google Disk)** z `meta.yaml → znalosti` přes `content/znalosti/znalosti.yaml`, autoři a metodika, a pokud existovali, odkazy na původní GPT/Gem s upozorněním, že končí.
2. **ZIP pro Claude a Gemini** `public/download/skills/<slug>.zip` — uvnitř složka `<slug>/` se `SKILL.md` a `references/`. Znalostní soubory se do ZIPu nebalí (leží na Disku); skill bez nich funguje, protože základní pravidla má v `SKILL.md` a `references/`. (Claude vyžaduje složku v kořeni ZIPu.)
3. **ZIP pro Microsoft Copilot** `public/download/skills/<slug>-copilot.zip` — `SKILL.md` přímo v kořeni ZIPu (tak to vyžaduje Microsoft).

Pro každou sadu z `sady.yaml` build vytvoří:

4. **Plugin** `plugins/aidetem-<sada>/` ve formátu Claude (`.claude-plugin/plugin.json` + `skills/`) a jeho ZIP. Stejný archiv přijme Copilot Cowork a lze ho podat do adresáře pluginů ChatGPT.
5. **Marketplace** `.claude-plugin/marketplace.json` v kořeni repozitáře — díky němu si uživatelé Claude přidají celé repo jako zdroj pluginů (`aidetemcz/chatveskole`).

Názvy pluginů nesmí začínat `claude-` ani `anthropic-` → používáme prefix `aidetem-`.

## Google Docs

Rozhodnutí 7. 11. 2026: **systémové prompty a znalosti nabízíme učitelům v Google Docs a na Google Disku.** Běžný učitel GitHub nepotřebuje a nemá ho vidět — z webu kopíruje prompt, stahuje ZIP, nebo otevírá Google Doc.

- **Jedna složka na skill** ve sdílené složce AI dětem („kdokoli s odkazem může zobrazit“), seskupené podle sad:
  ```
  Skills – systémové prompty a data/
    00 Jak složky používat
    01 Formativní hodnocení/
      Vzdělávací cíle/
        Vzdělávací cíle – systémový prompt   (Google Doc)
        Data/                                  (podklady z references/ + kopie znalostních souborů)
  ```
- **Systémový prompt** obsahuje: popis, autory a metodiku, návod (skill / projekt / notebook / krátký prompt), seznam souborů v Datech s odkazy na znalosti, tělo `SKILL.md` mezi značkami ZAČÁTEK a KONEC (odkazy `references/x.md` přepsané na názvy souborů v Datech) a na konci krátkou verzi z `prompt.md`.
- Složky vytváří skript `python3 scripts/build-google-drive.py` jako Word soubory do `google-drive/` (není v gitu); na Disku se při nahrání převedou na Google Docs. Postup je v `google-drive/Návod pro nahrání na Disk.docx`. Každý skill je jen v jedné složce (první sada, ve které je), aby měl jeden odkaz.
- Znalostní soubory se do složek Data kopírují až na Disku (ručně nebo konektorem Google Drive), aby šlo o přesnou kopii originálu.
- Odkazy jsou v `meta.yaml → google_doc` (dokument) a `google_slozka` (složka skillu). Staré dokumenty asistentů zůstávají v `puvodni_asistenti.systemovy_prompt` jako archiv.
- **Udržování shody:** při změně skillu se upraví `SKILL.md` i Google Doc. Nejjednodušší je požádat Clauda s připojeným Google Diskem: *„Aktualizuj Google Doc skillu X podle content/skills/X/SKILL.md“* (nebo opačně, když tým upravil dokument). Později lze převod automatizovat (Google Drive API + GitHub Action).
- **Znalosti:** `content/znalosti/znalosti.yaml` mapuje název souboru (např. `klicove-kompetence.md`) na odkaz na Disku. Soubory na Disku musí být sdílené ke čtení.

## Obrázky ze starého webu

Exportní skript (`--images`) stáhne obrázky z `wp-content/uploads` do `archiv/uploads/`. Build je publikuje na adrese `/archiv/uploads/…` (texty na ně tak odkazují, např. tabulka J. Lodge na stránce Tvorba pravidel) a přesměrování `/wp-content/uploads/*` → `/archiv/uploads/*` zachová i staré odkazy z metodik a PDF. Nepoužité obrázky (screenshoty starých promptů) se publikovat nemusí.

## Doména a přechod

1. Web se postaví a nasadí na náhledovou adresu Vercelu.
2. Kontrola obsahu, přesměrování a odkazů.
3. Přepnutí DNS chatveskole.cz u Váš hosting na Vercel.
4. Starý WordPress zůstane chvíli dostupný na subdoméně (např. `wp.chatveskole.cz`) jen pro kontrolu, pak se vypne. Export obsahu je v `archiv/`.
5. Pokud AI dětem ještě vlastní gptveskole.cz, přesměrovat na chatveskole.cz.
