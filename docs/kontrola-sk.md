# Slovenská verze: co zkontrolovat před zveřejněním

Náhled: https://chatveskole.cz/sk/ (noindex, česká verze na něj neodkazuje). Zveřejnění: `SK_ZVEREJNENO = true` v `src/lib/zverejneni.mjs` (zapne přepínač CZ/SK, hreflang, sitemap a indexování).

Všechny stránky mají `stav: ke-kontrole`. Slovník pojmů: `docs/slovnik-sk.md`.

## Odborná kontrola
- **Zahraničné platby** (`content/sk/stranky/zaciname/zahranicni-platby.md`): podle § 7a a § 7 zákona č. 222/2004 Z. z. o DPH. Daňový poradce: služby mimo EU, školy jako zdaniteľné osoby.
- **Ochrana súkromia**: právník nebo korektor (správce je český spolek, dozorový úřad ÚOOÚ ČR).
- **Vekové limity**: věk digitálního souhlasu 16 let (§ 15 zákona č. 18/2018 Z. z., ověřeno jen přes výsledky vyhledávání), účet Google od 16 let.
- **Usmernenie k AI na ZŠ a SŠ** (`ve-vyuce/doporuceni-zs-ss.md`): odkazy na dokumenty MŠVVaM SR; chybí shrnutí obsahu (PDF nešlo otevřít).

## Fakta k ověření
- Ceny ChatGPT, Claude a Perplexity v eurech (zatím USD s poznámkou „overujeme“), `data/sk/ceny.yaml`.
- Názvy v menu slovenských rozhraní chatbotů (Gemini „Viac… → Prispôsobiť → Zručnosti“, „Pripojené aplikácie“, ChatGPT, Perplexity).
- Linky pomoci: Linka detskej istoty 116 111, Linka dôvery Nezábudka (0800 800 566, nebo 0800 500 566?), 112, 155, 158.
- Instituce a pozice: centrum poradenstva a prevencie, koordinátor prevencie, školský podporný tím, ŠVVP/IVVP, orgán sociálnoprávnej ochrany detí a sociálnej kurately, adaptačné vzdelávanie, triedne aktívum, EduPage.
- Stupnice J–Č–T–Ú (metodika Vysvědčení JINAK): ponechat, nebo slovensky E–Č–T–Ú?
- Názvy prvků v zručnosti Hádaj chemický prvok (lanthanoidy, aktinoidy).
- Jazykový korektor: pravidla slovenského pravopisu (procenta „5 %“, pomlčky v rozsazích).

## Zůstává česky
- Metodiky AI kurikula, metodiky a názvy chatbotů Tiny, kniha AI ve škole prakticky, školení (pro české školy), Vysvědčení JINAK — označené „(v češtine)“.
- Podklady zručností: RVP, klíčové kompetence, průřezová témata, Klasifikace SVP MŠMT, česká vzdělávací soustava. Zručnosti vzdelávacie ciele, úprava materiálu, kritériá hodnotenia, strategické dokumenty, AI gramotnosť v ŠVP, didaktický radca, slovné hodnotenie a hodnoty/misia/vízia by časem potřebovaly slovenské ŠVP.
- Velké vlastní podklady ještě nepřeložené: `procesni-analytik/references/mapovani-a-optimalizace-procesu.md`.

## Chybí
- Slovenské Google Docs se systémovými prompty a složky na Google Disku (QR kódy a odkazy na stránkách zručností vedou na české). ZIPy zručností se stahují přímo z webu.
- Pluginy (sady zručností) jsou zatím z české verze.
