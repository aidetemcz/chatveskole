# Design: grafika AI dětem

Grafika (7. 11. 2026, rozhodnutí Evy): převzatá z aplikace **Asistent pro individualizaci výuky** — repozitář `aidetemcz/podpurna-opatreni`, větev `claude/prevod-katalogu-4c5gcn` (`app/globals.css`, logo `public/logo.png`, ikony). Odtud jsou logo, favicon, styl tlačítek (pilulky, písmo Inter 600), karet (rámeček, při najetí jahodový okraj a jemný stín), aktivní položky menu (`--accent-soft` + rámeček `--accent`) a barvy `--muted #6b7885`, `--sky-deep #7da4b2`, `--accent-hover #c94e4e`. Kvůli kontrastu WCAG AA: `--sky-deep` jen na dekorace, text v nebeské barvě má `--sky-text #456e7d`; tlačítka mají pozadí `--accent-strong` (bílý text na `#dc5b5b` má jen 3,7 : 1). Implementace: `src/styles/global.css`.

Vzor: artefakt **Funkce chatbotů 2027** — [docs/design/vzor-funkce-chatbotu-2027.html](design/vzor-funkce-chatbotu-2027.html) (online: https://claude.ai/artifact/9ZyWLayjYG18oe6knwfvsi). Celý web má vypadat jako tento artefakt: čistý, vzdušný, světlý, s jahodovou a nebeskou barvou AI dětem.

## Barvy (design tokeny)

Definovat jako CSS proměnné na `:root`, pro tmavý režim přepsat v `@media (prefers-color-scheme: dark)` a na `:root[data-theme="dark"]`.

| Token | Světlý | Tmavý | Použití |
|---|---|---|---|
| `--bg` | `#ffffff` | `#141b22` | pozadí stránky |
| `--panel` | `#ffffff` | `#1a232c` | karty, tabulky |
| `--ink` | `#1c2530` | `#e9eff3` | text |
| `--muted` | `#5f6c79` | `#9eabb7` | vedlejší text, popisky |
| `--accent` | `#dc5b5b` | `#e57373` | **Jahodová zmrzka** — hlavní akcent, tlačítka, „končí“ |
| `--accent-strong` | `#c24848` | `#f09393` | odkazy a akcentový text na světlém podkladu |
| `--accent-soft` | `#fbeeee` | `#3a2427` | podbarvení varování a změn k horšímu |
| `--on-accent` | `#ffffff` | `#1c1113` | text na akcentu |
| `--sky` | `#b3cdd6` | `#44626e` | **Nekonečné nebe** — linky, rámečky |
| `--sky-deep` | `#5f8c9b` | `#93bccb` | nadtitulky (eyebrow), štítky „nové“, ikony |
| `--sky-light` | `#e3f1f6` | `#1e2f38` | podbarvené panely, změny k lepšímu |
| `--line` | `#e8edf0` | `#2a3742` | oddělovače |
| `--line-soft` | `#f1f4f6` | `#212c36` | jemné oddělovače uvnitř tabulek |

Kontrast textu musí splnit WCAG AA (4,5 : 1). `--accent` (#dc5b5b) na bílé nesplňuje pro běžný text — na text používej `--accent-strong`.

## Písmo

- **Nadpisy:** Space Grotesk 500/600/700, `letter-spacing: -0.01em`, `text-wrap: balance`.
- **Text:** Inter 400/500/600, 15 px, `line-height: 1.55`.
- Načítat z Google Fonts s `display=swap`, nebo self-hostovat (lepší pro GDPR — doporučeno).

## Tvary a rozvržení

- Zaoblení: `--radius: 16px`, `--radius-lg: 22px` (karty, panely), `--pill: 999px` (štítky, přepínače).
- Obsah: max. šířka 1180 px, okraje 20 px (mobil 16 px), mezery mezi sekcemi 56 px (mobil 44 px).
- Text článků: max. 70 znaků na řádek.
- Stíny jen jemně: karty při najetí myší a rozbalovací menu (jako v aplikaci podpurna-opatreni). Jinak hloubku dělají rámečky `1px solid var(--line)` a podbarvení.

## Komponenty z artefaktu

| Komponenta | Třída ve vzoru | Kde se použije |
|---|---|---|
| Hlavička s logem (kulaté logo 44 px, název, podtitul) | `.brand` | hlavička webu |
| Nadtitulek (uppercase, 0.74rem, `--sky-deep`) | `.eyebrow` | nad H1 na všech stránkách (název sekce menu) |
| H1 se zvýrazněným slovem (`<em>` v `--accent-strong`) | `h1 em` | homepage, hlavní stránky sekcí |
| Panel tří tezí na `--sky-light` | `.shifts` | homepage, Změny 2026, souhrny |
| Časová osa s „dnes“ | `.tl`, `.today` | Změny 2026 |
| Matice funkcí s kuličkami (plná / půlka / prázdná) | `.matrix`, `.ball` | Změny 2026, Dostupné nástroje |
| Štítky „končí“ (accent) a „nové“ (sky) | `.badge.end`, `.badge.new` | všude, kde se něco mění |
| Karty se skupinami Končí / Přibývá / Na co myslet | `.tcard`, `.grp` | nástroje, sady skills |
| Zdroje ve 4 sloupcích | `.sources` | patička stránek s fakty |
| Patička s podpisem AI dětem | `footer` | celý web |

## Nové komponenty (navrhnout ve stejném stylu)

- **Karta skillu:** název, krátký popis, štítky (pro koho, sada), tlačítka *Zkopírovat prompt* (accent) a *Stáhnout skill* (obrys sky).
- **Blok promptu:** šedý panel s textem promptu, tlačítko *Kopírovat* vpravo nahoře, po kliknutí „Zkopírováno“.
- **Záložky podle nástroje** (Claude / Gemini / Copilot / ChatGPT) — na mobilu jako segmentový přepínač z artefaktu (`.seg`).
- **Rozbalovací menu** v hlavičce, na mobilu celoobrazovkové.
- **Upozornění** (info na `--sky-light`, varování na `--accent-soft`).

## Logo a obrázky

- Logo AI dětem (čtvercová ikona): `https://chatveskole.cz/wp-content/uploads/elementor/thumbs/AI-detem-square_icon_200-1-qu3xtor66iknlnvfabvw0ykhhmjc2qtp6pfgbzk3zw.png` — stáhnout exportním skriptem do `public/`.
- OG obrázek: `https://chatveskole.cz/wp-content/uploads/2024/09/chatveskole_main-visual_opengraph-obecny.png` (1200 × 630).
- Náhledy metodik a obálka knihy — viz `archiv/` po exportu.

## Přístupnost a mobil

- Vše funguje od šířky 360 px bez vodorovného posouvání.
- Ovládání klávesnicí, viditelný `:focus-visible` (2px `--accent`).
- Kuličky v matici mají `aria-label` (jako ve vzoru), barva nikdy nenese význam sama.
- Respektovat `prefers-reduced-motion`.
