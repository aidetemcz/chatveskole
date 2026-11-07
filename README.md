# Chatboti ve škole — chatveskole.cz

Nový web Chatboti ve škole od AI dětem. Obsah je v souborech Markdown a YAML, web se z nich sestaví automaticky (Astro + Vercel). Žádný WordPress, žádná databáze.

## Kde co najdu

| Chci… | Soubor / složka |
|---|---|
| upravit text stránky | `content/stranky/<sekce>/<stránka>.md` |
| změnit menu | `content/navigace.yaml` |
| upravit nebo přidat skill | `content/skills/<název>/` — pravidla v `docs/specifikace-skills.md` |
| změnit sady skills (pluginy) | `content/sady.yaml` |
| upravit žákovský prompt | `content/prompty/zaci/<název>.md` |
| aktualizovat ceny chatbotů | `data/ceny.yaml` |
| aktualizovat přehled funkcí a termínů | `data/funkce-chatbotu.yaml` |
| zjistit, kam vede stará adresa | `migrace/inventura.csv` |
| vědět, co ještě není rozhodnuté | `docs/otevrene-otazky.md` |

## Dokumentace

- `docs/audit-stavajiciho-webu.md` — co bylo na starém webu a co se s tím stalo
- `docs/architektura.md` — jak je web postavený a proč bez databáze
- `docs/design.md` — barvy, písmo a komponenty AI dětem
- `docs/specifikace-skills.md` — jak vypadá skill (SKILL.md, prompt.md, meta.yaml)
- `docs/predani-claude-code.md` — postup stavby webu po fázích, včetně promptů pro Claude Code
- `docs/podklady/` — rešerše a zdroje faktů
- `CLAUDE.md` — pravidla pro Claude Code

## Jak upravit text bez programování

1. Otevřete soubor na GitHubu.
2. Klikněte na tužku (*Edit*), upravte text.
3. Dole klikněte na *Commit changes*.
4. Za minutu je změna na webu (Vercel ho sestaví znovu).

## Jak dělat hromadné změny

Otevřete Claude Code v této složce a napište, co potřebujete, například:

> Gemini změnil věkové limity. Najdi všechna místa na webu, kde je uvádíme, uprav je podle https://support.google.com/gemini/answer/13278668 a aktualizuj datum.

## Skripty

- `node scripts/export-wordpress.mjs --images` — stáhne obsah a obrázky starého WordPressu do `archiv/`
- `python3 scripts/build-inventura.py` — vygeneruje `migrace/inventura.csv`, `migrace/redirects.json` a `migrace/mapa-promptu.json`
- `node scripts/prevod-promptu.mjs` — z exportu vytvoří databázi promptů v `content/prompty/` (původní znění); existující soubory nepřepisuje, `--prepsat` by smazal ruční opravy
- `python3 scripts/build-google-drive.py` — vytvoří složky pro Google Disk: ke každému skillu systémový prompt a data (`google-drive/`)
- `npm run balicky` — z sad vytvoří pluginy `plugins/aidetem-*` a marketplace `.claude-plugin/marketplace.json` (obojí commitnout) a ZIPy ke stažení v `public/download/` (skills pro Claude/Gemini i Copilot, pluginy). Spouští se i automaticky při `npm run build`.
