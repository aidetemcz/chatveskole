# Design: grafika AI dětem

**Rozhodnutí Evy 7. 11. 2026:**
- **Vzhled a rozvržení** podle šablony **Positivus** (https://astro.build/themes/details/positivus/, kód `manulthanura/Positivus`, MIT). Převzaté je jen rozvržení, ne kód (Tailwind): zvýrazněné nadpisy (barevný podklad za textem), velké úvody s ilustrací, oddíly jako velké zaoblené karty střídající barvy, tlačítka, kroužek se šipkou.
- **Barvy, písmo a rámečky** zůstávají AI dětem. Logo a ikony z aplikace `aidetemcz/podpurna-opatreni`.
- **Web je vždy světlý.** Žádné tmavé plochy ani tmavý režim.

Vzor datových komponent (časová osa, matice, karty nástrojů): artefakt **Funkce chatbotů 2027** — [docs/design/vzor-funkce-chatbotu-2027.html](design/vzor-funkce-chatbotu-2027.html). Jeho barvy pro tmavý režim a odvozené odstíny se nepoužívají.

## Barvy

Plochy, rámečky a grafika jen v pěti barvách:

| Barva | Hodnota | Token |
|---|---|---|
| Jahodová zmrzka | `#dc5b5b` | `--jahoda` (`--accent`) |
| Nekonečné nebe | `#b3cdd6` | `--nebe` (`--sky`) |
| Nekonečné nebe po úsvitu | `#e3f1f6` | `--nebe-svetle` (`--sky-light`) |
| Nekonečné nebe před setměním | `#7da4b2` | `--nebe-tmave` (`--sky-deep`) |
| Bílá | `#ffffff` | `--bila` |

Text je tmavý (`--ink #1c2530`, vedlejší `--muted #5f6c79`), rámečky a oddělovače jemně šedé (`--line #e8edf0`, `--line-soft #f1f4f6`).

Kontrast (WCAG AA): bílý text na jahodové má 3,7 : 1, proto jen velký tučný (tlačítka 19 px, 700). Jahodový text na bílé nepoužívat — odkazy v textu jsou tmavé s jahodovým podtržením. Tmavý text je čitelný na všech pěti barvách. Implementace: `src/styles/global.css`.

## Písmo

- **Nadpisy:** Space Grotesk 500/600/700, `letter-spacing: -0.01em`, `text-wrap: balance`.
- **Text:** Inter 400/500/600, 15 px, `line-height: 1.55`.
- Načítat z Google Fonts s `display=swap`, nebo self-hostovat (lepší pro GDPR — doporučeno).

## Tvary a rozvržení

- Zaoblení: `--radius: 16px`, `--radius-lg: 22px` (karty, panely), `--pill: 999px` (štítky, přepínače).
- Obsah: max. šířka 1180 px, okraje 20 px (mobil 16 px), mezery mezi sekcemi 56 px (mobil 44 px).
- Text článků: max. 70 znaků na řádek.
- Stín jen u rozbalovacího menu. Jinak hloubku dělají rámečky `1px solid var(--line)` a podbarvení. Velké karty a oddíly mají zaoblení `--radius-xl: 36px`.

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
