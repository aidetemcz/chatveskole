# Design: grafika AI dětem

Vzor: artefakt **Funkce chatbotů 2027** — [docs/design/vzor-funkce-chatbotu-2027.html](design/vzor-funkce-chatbotu-2027.html) (online: https://claude.ai/artifact/9ZyWLayjYG18oe6knwfvsi). Celý web má vypadat jako tento artefakt: čistý, vzdušný, světlý, s jahodovou a nebeskou barvou AI dětem.

**Schválený návrh stránek (8. 11. 2026):** plátno v Claude Design *Chatboti ve škole – návrh webu* (https://claude.ai/artifact/14EHees2B9uckrw3d9QE4w) — hlavní stránka, katalog skills, detail skillu, katalog promptů, detail promptu, obsahová stránka. Při stavbě se drž tohoto návrhu; pravidla z něj jsou shrnutá níže v části „Pravidla ze schváleného návrhu“.

## Barvy (design tokeny)

Definovat jako CSS proměnné na `:root` (`src/styles/global.css`). **Web je jen ve světlém režimu** (rozhodnutí 8. 11. 2026) — tmavý režim nepřidávat, ani podle nastavení systému.

| Token | Hodnota | Použití |
|---|---|---|
| `--bg` | `#ffffff` | pozadí stránky |
| `--panel` | `#ffffff` | karty, tabulky |
| `--ink` | `#1c2530` | text |
| `--muted` | `#5f6c79` | vedlejší text, popisky |
| `--accent` | `#dc5b5b` | **Jahodová zmrzka** — hlavní akcent, tlačítka, „končí“ |
| `--accent-strong` | `#dc5b5b` | tlačítka, odkazy a akcentový text (od 8. 11. 2026 stejná jako `--accent`) |
| `--accent-soft` | `#fbeeee` | podbarvení varování a změn k horšímu |
| `--accent-ink` | `#dc5b5b` | text na `--accent-soft` (od 8. 11. 2026 stejná jako `--accent`) |
| `--on-accent` | `#ffffff` | text na akcentu |
| `--sky` | `#b3cdd6` | **Nekonečné nebe** — linky, rámečky |
| `--sky-deep` | `#5f8c9b` | ikony, dekorace (na text jen velký, kontrast 3,6 : 1) |
| `--sky-ink` | `#3f6b7a` | text v nebeské barvě (malé nadpisy, štítky) — splňuje 4,5 : 1 i na `--sky-light` |
| `--sky-light` | `#e3f1f6` | podbarvené panely, změny k lepšímu |
| `--line` | `#e8edf0` | oddělovače |
| `--line-soft` | `#f1f4f6` | jemné oddělovače uvnitř tabulek |

**Červená je na celém webu jen jedna: #DC5B5B** (barva AI dětem, Evino rozhodnutí 8. 11. 2026). Tokeny `--accent-strong` a `--accent-ink` zůstávají kvůli kódu, ale mají stejnou hodnotu. Pozor: červený text na bílé i bílý text na červené má kontrast 3,9 : 1, WCAG AA chce pro běžný text 4,5 : 1 (velký text 3 : 1 splňuje). Když bude potřeba AA splnit, stačí tmavší odstín jen pro drobný text (odkazy, štítky), např. #C24848.

## Písmo

- **Nadpisy:** Space Grotesk 500/600/700, `letter-spacing: -0.01em`, `text-wrap: balance`.
- **Text:** Inter 400/500/600, 15 px, `line-height: 1.55`.
- Self-hostované (balíčky `@fontsource/*`), žádné načítání z Google Fonts. Kód promptů: JetBrains Mono.

## Tvary a rozvržení

- Zaoblení: `--radius: 16px`, `--radius-lg: 22px` (karty, panely), `--pill: 999px` (štítky, přepínače).
- Obsah: max. šířka 1180 px, okraje 20 px (mobil 16 px), mezery mezi sekcemi 56 px (mobil 44 px).
- Text článků: max. 70 znaků na řádek.
- Žádné stíny, hloubku dělají rámečky `1px solid var(--line)` a podbarvení.

## Komponenty z artefaktu

| Komponenta | Třída ve vzoru | Kde se použije |
|---|---|---|
| Hlavička s logem (kulaté logo 44 px, název, podtitul) | `.brand` | hlavička webu |
| Nadtitulek (uppercase, 0.74rem) | `.eyebrow` | jen výjimečně uvnitř sekcí, ne nad H1 (viz pravidla níže) |
| H1 se zvýrazněným slovem (`<em>` v `--accent-strong`) | `h1 em` | homepage, hlavní stránky sekcí |
| Panel tří tezí na `--sky-light` | `.shifts` | homepage, Změny 2026, souhrny |
| Časová osa s „dnes“ | `.tl`, `.today` | Změny 2026 |
| Matice funkcí s kuličkami (plná / půlka / prázdná) | `.matrix`, `.ball` | Změny 2026, Dostupné nástroje |
| Štítky „končí“ (accent) a „nové“ (sky) | `.badge.end`, `.badge.new` | všude, kde se něco mění |
| Karty se skupinami Končí / Přibývá / Na co myslet | `.tcard`, `.grp` | nástroje, sady skills |
| Zdroje ve 4 sloupcích | `.sources` | patička stránek s fakty |
| Patička s podpisem AI dětem | `footer` | celý web |

## Pravidla ze schváleného návrhu (8. 11. 2026)

- **Hlavička stránky** je jen nadpis (H1), popis a případně tlačítka pod ním. Žádné boxy, štítky ani nadtitulky vedle nebo nad nadpisem; kontext dává drobečková navigace.
- **Pruhy přes celou šířku:** sekce hlavní stránky i skupiny v katalozích mají podklad přes celou šířku okna (bez rámečku a zaoblení) a střídají se `--sky-light` a `--bg`. Obsah uvnitř je omezený na 1180 px.
- **Karty:** bílé (`--panel`), zaoblení 18–22 px, rámeček `--sky` na modrém pruhu a `--line` na bílém. Nadpis karty 1,3 rem.
- **Tlačítka:** písmo jako odstavec (Inter, běžný řez, ne tučně, 15 px). Hlavní akce = plné tlačítko `--accent-strong` s bílým textem (na stránce nejvýš jedno nebo dvě). Vedlejší akce v kartě: tlačítko s obrysem `--sky` („Detail“) a vedle obyčejný odkaz s ikonou bez pilulky („Kopírovat“, „Stáhnout“). **Na červeném podkladu:** hlavní = bílá výplň a červený text, vedlejší = červená výplň, bílý obrys a bílý text.
- **Prostor (8. 11. 2026):** vzdušně — pruhy 84 px nahoře i dole (mobil 60 px), karty s vnitřním odsazením 26–32 px, mezery v mřížkách 20–22 px, mezi textem a tlačítky aspoň 14 px; v textu článků větší odstupy odstavců a nadpisů.
- **Menu v hlavičce:** hlavička je bílá a přes celou šířku okna — logo vlevo, menu, tlačítko a hledání zarovnané vpravo; podmenu se na počítači ukáže při najetí myší (kliknutí a klávesnice fungují také).
- **Katalog skills a katalog promptů** vypadají stejně: nadpis + popis, přepínač ze dvou pilulek *Řadit dle účelu* / *Řadit dle toho, komu slouží* (nic nefiltruje, jen seskupuje), skupiny s nadpisem a počtem, karty ve dvou sloupcích. Na kartě není kategorie ani „pro koho“ — to říká skupina.
- **Detail skillu:** hlavní akce *Stáhnout skill*, vedlejší *Použít jako prompt*; pod hlavičkou pruh s údaji (sada, pro koho, metodika, autoři, Google Docs, Disk); pořadí sekcí: Co skill umí → Nainstalovat jako skill (záložky podle chatbota) → Použít jako prompt (záložky variant) → Původní asistent.
- **Blok promptu:** šedý panel (`--line-soft`), písmo JetBrains Mono, tlačítko *Kopírovat* vpravo nahoře, po kliknutí „Zkopírováno“.
- **Obsahová stránka:** vlevo menu sekce (na mobilu nad obsahem), vpravo text max. 70 znaků na řádek; tabulky v posuvném boxu; info na `--sky-light`, varování na `--accent-soft`.
- **Hlavní stránka (pořadí pruhů, úprava 8. 11. 2026):** Hero na `--accent` (#DC5B5B, barva AI dětem — Evino rozhodnutí; bílý běžný text na ní má kontrast jen 3,9 : 1) s odsazením 150 px nahoře i dole, bílý text (i celý nadpis „Chatboti ve škole“), vpravo lehce pootočené kolečko 189 px (`--sky-light`, červený text stejným písmem jako odstavec v hero — Inter 1,15 rem, tři řádky „Změny ve / funkcích chatbotů / v roce 2026“, bez šipky) zarovnané dole s tlačítky, s odkazem na `/funkce/zmeny-2026` → Skills (bílá) → Katalog promptů (modrá) → Chatboti ve výuce s bannerem Tiny, metodikami, doporučeními a boxem Tvorba školních pravidel (bílá) → Pluginy a Vibe coding (modrá) → Metodické materiály (bílá) → Kniha a Novinky v poměru 2 : 1 (modrá).

## Logo a obrázky

- Logo AI dětem (čtvercová ikona): `https://chatveskole.cz/wp-content/uploads/elementor/thumbs/AI-detem-square_icon_200-1-qu3xtor66iknlnvfabvw0ykhhmjc2qtp6pfgbzk3zw.png` — stáhnout exportním skriptem do `public/`.
- OG obrázek: `https://chatveskole.cz/wp-content/uploads/2024/09/chatveskole_main-visual_opengraph-obecny.png` (1200 × 630).
- Náhledy metodik a obálka knihy — viz `archiv/` po exportu.

## Přístupnost a mobil

- Vše funguje od šířky 360 px bez vodorovného posouvání.
- Ovládání klávesnicí, viditelný `:focus-visible` (2px `--accent`).
- Kuličky v matici mají `aria-label` (jako ve vzoru), barva nikdy nenese význam sama.
- Respektovat `prefers-reduced-motion`.
