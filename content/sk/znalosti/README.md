# Znalostní soubory

Podklady, ze kterých čerpají skills (dříve „Znalosti“ u GPTs a Gems). **Zůstávají na Google Disku** (rozhodnutí 7. 11. 2026) — učitelé si je stahují odtud, web na ně odkazuje u každého skillu.

Seznam s odkazy je v [`znalosti.yaml`](znalosti.yaml). Skill uvádí, které soubory používá, v `meta.yaml → znalosti`.

Skills fungují i bez znalostních souborů: základní pravidla mají ve `SKILL.md` a v `references/`. Znalostní soubor jen zpřesní výstup (například přesná znění klíčových kompetencí).

## Pravidla pro soubory na Disku

- sdílení „kdokoli s odkazem může zobrazit“,
- jednoduchý formát (Google Doc, `.txt`, `.md`), bez složitého formátování,
- žádné osobní údaje, jen materiály, které smíme šířit,
- jeden soubor = jedno téma.

## Přidání nového souboru

1. Nahrajte soubor do sdílené složky AI dětem a nastavte sdílení.
2. Přidejte řádek do `znalosti.yaml` (název, odkaz, `verejne: true`).
3. U skillů, které ho mají používat, ho doplňte do `meta.yaml → znalosti`.
