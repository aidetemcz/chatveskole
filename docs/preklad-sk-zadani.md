# Zadání pro překlad obsahu do slovenštiny

Slovenská verze webu Chatboti ve škole běží na `/sk/` a staví se ze stejných šablon jako česká (`JAZYK=sk`, viz `src/lib/jazyk.ts`, `scripts/build-sk.mjs`). Obsah je v `content/sk/` (zatím kopie českého), data v `data/sk/` (chybí-li soubor, použije se `data/`).

## Pravidla
- Slovník pojmů: `docs/slovnik-sk.md` (závazný). Název webu „Chatboty v škole“, organizace „AI dětem, z. s.“ (nepřekládá se), skill = „zručnosť (skill)“, vyučující = „vyučujúci/pedagóg“ (ne „učiteľ“), „chatovacie aplikácie“, „zákonní zástupcovia“ (ne „rodičia“).
- Spisovná slovenština, věcně, krátké odstavce, vykání („vy“). Nepřekládat doslova, kde to ve slovenštině zní nepřirozeně.
- Neměnit: názvy souborů, slugy, frontmatter klíče, značky `<!-- komponenta: … -->` (zůstávají česky, šablony je hledají), cesty odkazů.
- Interní odkazy zůstávají stejné (`/zaciname/...`); build k nim přidá `/sk`.
- Kotvy: když se na nadpis odkazuje kotvou (`#...`), doplň k slovenskému nadpisu explicitní `{#puvodni-id}` s českým id, aby odkazy fungovaly.
- Frontmatter: přeložit `title`, `menu_titulek`, `popis` a další texty; `stav: ke-kontrole` u každé stránky (kontrola slovenským korektorem); `aktualizovano` na dnešní datum.
- Fakta o Česku (MŠMT, RVP, české zákony, Kč, česká DPH, ČŠI, NPI) nepřekládat mechanicky. Slovenský ekvivalent uveď jen s doloženým zdrojem (doplň do `zdroje`). Když zdroj nenajdeš, text formuluj obecně, nebo nech informaci jako českou s poznámkou („v Česku…“), a uveď to v závěrečné zprávě. Nic si nevymýšlej.
- Odkazy na materiály, které existují jen česky (např. metodiky na kurikulum.aidetem.cz), ponech a doplň „(v češtine)“.
- Šablony (`src/pages/**/*.astro`, `src/lib/komponenty.ts`) hledají oddíly podle českých nadpisů regulárními výrazy (např. `najdi(/registrovat/i)`). Po překladu nadpisů uprav regulární výrazy ve šablonách tvé části tak, aby přijaly češtinu i slovenštinu (např. `/registrovat|registrova/i`). Český výstup se nesmí změnit.
- Texty rozhraní v šablonách (`t('…')`) nepřekládej — slovník `src/i18n/sk.json` dělá někdo jiný; neupravuj ho.

## Ověření
- `ln -s /home/user/chatveskole/node_modules node_modules` (pokud chybí), pak `npm run build` a `npm run check` (0 problémů).
- Pro každou svou stránku porovnej `dist/<cesta>/index.html` a `dist/sk/<cesta>/index.html`: stejný počet oddílů, karet a nadpisů (žádný oddíl nesmí ve slovenské verzi zmizet kvůli nepasujícímu regulárnímu výrazu). Zkontroluj, že v `dist/sk/<cesta>` nezůstal český text z obsahu.
- Český výstup (`dist/` mimo `dist/sk`) se nesmí změnit.
