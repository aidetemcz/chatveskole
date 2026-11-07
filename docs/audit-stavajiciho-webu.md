# Audit webu chatveskole.cz (stav 7. 11. 2026)

Obsah byl stažen přes WordPress REST API (`/wp-json/wp/v2/…`). Kompletní seznam všech URL s rozhodnutím, co s nimi, je v [`migrace/inventura.csv`](../migrace/inventura.csv), přesměrování pro Vercel v [`migrace/redirects.json`](../migrace/redirects.json).

## V číslech

| Typ obsahu | Počet | Co s tím |
|---|---|---|
| Stránky (page) | 28 | 21 nových stránek podle nového menu, zbytek sloučit nebo přesměrovat |
| Záznamy databáze promptů (`/databaze-promptu/…`) | 119 | 96 promptů zachovat v databázi promptů (Funkce → Prompty), 22 asistentů převést na skills |
| — z toho AI asistenti (GPT/Gem) | 22 | převést na 18 skills (spolu s nejlepšími prompty); odkazy na GPTs přestanou fungovat 11. 12. 2026 |
| — z toho prompty z roku 2025 (pro pedagogy) | 32 | zachovat v databázi promptů; zároveň základ skills |
| — z toho žákovské prompty (10 způsobů s NPI) | 8 | zachovat jako prompty |
| — z toho staré prompty z roku 2024 | 56 | zachovat v databázi jako „Starší prompty (2024)“; vizualizace navíc přepsané do Vibe codingu |
| Kategorie (`/dp/…`) | 27 (3 prázdné) | přesměrovat na sady skills |
| Příspěvky (posts) | 0 | — |

Technologie: WordPress + Elementor 4.3.6 + Yoast SEO, plugin „Manual“ pro databázi promptů (typ obsahu `manual_kb`).

## Co je na současném webu špatně

**Zastaralé informace (nejvážnější)**
- Celá sekce AI asistenti stojí na GPTs, Gems a agentech. GPTs končí 11. 12. 2026, Gems postupně od 17. 11. 2026 (školy nejdříve 1. 6. 2027).
- Stránka *Kolik stojí chatboti* ukazuje u všech tarifů „0 Kč“ — ceny se z Elementor widgetu nevykreslují. Pro návštěvníka to vypadá, že je vše zdarma.
- Stránky si protiřečí: *Co jsou AI asistenti* říká, že Gems jde vytvářet zdarma, *Jak využívat AI asistenty* že jen v placené verzi.
- *Dostupné nástroje*: Claude „AI asistenty nenabízí“, Gemini „není nutné 18 let“, Copilot „Agenti zdarma“ — vše neplatí.
- Staré prompty (2024) odkazují na ChatGPT 3.5, galerie screenshotů z pěti aplikací (`/images/prompts/…`) a postupy typu „zkopírujte kód do Poznámkového bloku“.
- Pokyn psát v systémovém promptu „mladý jedinec“ místo „žák“ (obcházka pravidel GPT Store) — už nedává smysl.

**Rozbité nebo chybné věci**
- `jak-to-funguje` obsahuje testovací text („laadkhd lkhadljldhasldh“) a odkazuje na starou doménu gptveskole.cz. Na gptveskole.cz odkazují i stránky *Kontakt* a *Zahraniční platby*.
- Patička odkazuje na neexistující `/jak-ucit-a-hodnotit-s-ai/` (404).
- Odkaz „Databáze promptů“ vede v menu na `/prompty-pro-pedagogy/`, v patičce na `/prompty/` — dvě různé databáze.
- `pruvodce-chatgpt-pro-ucitele` je duplikát homepage.
- U asistenta *Kultura a komunikace školy (plán změny)* je odkaz na Gem neplatný (`http://Google Gem pro navržení…`).
- U promptu *Slovníček pojmů* je v sekci „Co je cílem promptu“ text z promptu *Individualizace výukových cílů*.
- U promptu *Nápadníček — geografie* je vložen návod z promptu *Slovíčka — nálady*.
- Překlepy v nadpisech a tlačítkách: „Sytémový prompt“, „AI asisitenti“, „MS Copillot“, „Tvorba systémové promptu“, „Nevíte, co jsou AI asistentech?“.
- Slugy kategorií obsahují znak šipky (`%e2%86%92`).

**Duplicity**
- *Formulace výukového cíle* existuje 2× (prompt i asistent), *Slovníček pojmů* 2×, *Hádej chemické prvky* 2×, komunikace s rodiči 2× (2024 a 2025), tvorba pravidel 3×.
- Stejné prompty jsou ve 2–3 kategoriích zároveň, takže databáze působí větší, než je.

## Co zachovat (to nejcennější)

1. **Sada pro formativní hodnocení** (5 asistentů + 6 promptů) postavená na metodice Vysvědčení jinak — nejucelenější a nejpoužívanější obsah. Má vlastní metodiku na kurikulum.aidetem.cz.
2. **10 způsobů využití GenAI ve výuce** vytvořených s NPI, včetně 8 žákovských promptů. Jediný obsah pro žáky, opřený o AI Assessment Scale.
3. **Asistenti pro vedení škol a AI akcelerátor** (řízení změny ADKAR, procesní analytik, pravidla, mise a vize) — navázané na metodiku AI akcelerátoru.
4. Prompty pro pedagogy z roku 2025 — jednotná struktura (role, úkol, vstupy, výstup, „k čemu“, „jak použít“), dobrý základ pro skills.
5. Praktické stránky *Registrace*, *Věkové limity*, *Zahraniční platby pro neplátce DPH* — po aktualizaci.
6. Odkazy na doporučení NPI (ZŠ a SŠ) a pracovní skupiny prg.ai a UK (VŠ), kniha *AI ve škole prakticky*, newsletter (Ecomail).

## Rozhodnutí o obsahu

- **Databáze promptů zůstává** (rozhodnutí 7. 11. 2026) a přesouvá se na stránku *Funkce → Prompty*: 32 promptů pro pedagogy, 8 žákovských promptů a 56 starších promptů z roku 2024. Původní znění se zachovává (převod `scripts/prevod-promptu.mjs`).
- **Databáze AI asistentů se ruší** — asistenti se převádějí na **18 skills v 5 sadách** (viz `content/sady.yaml`), do kterých se sloučilo i to nejlepší z promptů. U promptu, který má podobu skillu, je odkaz na skill a naopak.
- **Žákovské prompty zůstávají prompty** — skills jsou v Gemini a Claude jen pro 18+, v ChatGPT jen ve firemních a školních tarifech. U každého promptu bude odkaz na odpovídajícího chatbota v Tiny.
- **Vizualizace a „generování kódu“** (SVG, STL, Mermaid, Matplotlib, PlantUML, LaTeX) zůstávají v databázi mezi staršími prompty a navíc jsou přepsané jako aktivity v sekci *Vibe Coding → Materiály do výuky*.
- Staré URL promptů se přesměrují na jejich nové místo v databázi, URL asistentů na skill.
- Všech 176 starých URL dostane trvalé přesměrování (301), aby nepřišly o odkazy z metodik, PDF a bit.ly (viz inventura odkazů z 5. 10. 2026: na chatveskole.cz vede 36 odkazů z 24 stránek, další z kurikulum.aidetem.cz a 14 PDF).

## Mapa staré → nové menu

| Staré menu | Nové umístění |
|---|---|
| Začínáme (6 stránek) | Začínáme — stejné stránky, aktualizované |
| Prompty: Co je to prompt, Jak vytvářet prompt | Funkce → Prompty |
| Prompty: Databáze promptů | Funkce → Prompty (databáze promptů) |
| AI asistenti: Co jsou, Jak využívat | Funkce → Změny ve funkcích 2026 + Skills |
| AI asistenti: Jak začít s tvorbou, Systémový prompt, Testování a publikace | Funkce → Skills (jak napsat vlastní skill) |
| AI asistenti: Jaká data patří do asistenta | Funkce → Projekty (+ Skills) |
| AI asistenti: Databáze AI asistentů | Funkce → Skills (katalog) |
| Výuka s chatboty: Způsoby využití GenAI | Funkce → Prompty → Prompty pro žáky |
| Výuka s chatboty: Formativní hodnocení | Sada skills Formativní hodnocení |
| Výuka s chatboty: Materiály do výuky | Chatboti ve výuce → Metodické materiály |
| Výuka s chatboty: Strategie zavedení AI | Chatboti ve výuce → Tvorba pravidel pro využívání AI |
| Výuka s chatboty: Doporučení ZŠ a SŠ, VŠ | Chatboti ve výuce → Doporučení |
| O webu: Kdo za tím stojí, Kontakt, Pošlete nám prompt | O webu → Kdo za tím stojí, Kontakt (s formulářem) |
| — (nové) | Funkce → Pluginy, Projekty, Konektory; celé Vibe Coding; Chatboti ve výuce → Aplikace Tiny |
