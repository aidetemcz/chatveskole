---
title: Vibe coding — materiály do výuky
menu: Vibe Coding
poradi: 4
popis: Metodiky AI dětem k vibe codingu a osm hotových zadání pro učitele — interaktivní časová osa, graf z dat, myšlenková mapa, simulace logické úlohy a další.
aktualizovano: 2026-11-07
stav: koncept
souvisejici_prompty:   # původní prompty z kategorií Vizualizace a Různé (2024) zůstávají v databázi promptů
  - https://chatveskole.cz/databaze-promptu/tabulky/
  - https://chatveskole.cz/databaze-promptu/sekvencni-diagram/
  - https://chatveskole.cz/databaze-promptu/myslenkove-mapy-dreviny/
  - https://chatveskole.cz/databaze-promptu/kolacovy-graf-vitaminy/
  - https://chatveskole.cz/databaze-promptu/graf-regiony/
  - https://chatveskole.cz/databaze-promptu/derivace-latex/
  - https://chatveskole.cz/databaze-promptu/casove-osy/
  - https://chatveskole.cz/databaze-promptu/srdce-ve-formatu-svg/
  - https://chatveskole.cz/databaze-promptu/kostka-format-stl/
  - https://chatveskole.cz/databaze-promptu/3d-model-kvetu/
---

# Vibe coding ve výuce

## Metodiky AI dětem

- **[Vibecoding 01 — Tvorba jednoduchých aplikací](https://kurikulum.aidetem.cz/knowledgebase/vibecoding-01-tvorba-jednoduchych-aplikaci/)** — žáci 8.–9. třídy a SŠ si postaví vlastní aplikaci. 90–160 minut.
- **[Data 02 — Interpretace dat pomocí chatbotů](https://kurikulum.aidetem.cz/knowledgebase/data-02-vizualizace-dat-casova-rada/)** — práce s daty a jejich vizualizací.
- **[Vytváření AI asistentů — školní hackaton](https://kurikulum.aidetem.cz/knowledgebase/vytvareni-ai-asistentu-skolni-hackaton/)** — žáci navrhují a testují vlastního asistenta. 4 × 45 minut.
- **[MňauCoder](https://mnaucoder.cz)** — pro mladší: vlastní model strojového učení a AI pomocník ve Scratchi.

Školení **[Vibecoding pro školy](https://vzdelavame.aidetem.cz/akce/sborovna/vibecoding-pro-skoly/)** přivezeme do vaší sborovny (3 hodiny, lze hradit ze šablon).

## Osm zadání pro učitele

Dřív jsme v [databázi promptů](/funkce/prompty#vizualizace) radili, jak nechat chatbota napsat kód pro graf a vložit ho do jiné aplikace. Dnes chatbot graf rovnou postaví a vy s ním můžete klikat. Zadání vložte do Gemini Canvas nebo Claude a upravte podle sebe.

### Interaktivní časová osa (dějepis, zeměpis)

```text
Vytvoř interaktivní časovou osu prezidentů České republiky od roku 1993 do dneška.
Každé funkční období ukaž jako barevný pruh. Po kliknutí na pruh se zobrazí jméno,
roky ve funkci a tři nejdůležitější události. Přidej tlačítko, které přepne osu
na období Československa (1918–1992). Data uveď jen ta, která si jsi jistý; nejisté označ.
```

### Graf z dat (zeměpis, občanská výchova)

```text
Vytvoř interaktivní sloupcový graf počtu obyvatel krajů České republiky.
Data ti vložím jako tabulku z Českého statistického úřadu. Kraje seřaď od největšího.
Přidej přepínač „počet obyvatel / hustota zalidnění“ a po najetí myší ukaž přesné číslo.
[sem vložte tabulku z ČSÚ]
```

Tip: data vždy dodejte z ověřeného zdroje. Když je chatbot „doplní sám“, často si je vymyslí.

### Myšlenková mapa (přírodopis)

```text
Vytvoř interaktivní myšlenkovou mapu dřevin střední Evropy pro 6. třídu.
Uprostřed „Dřeviny“, větve: jehličnaté stromy, listnaté stromy, keře.
Ke každé větvi 4–6 příkladů. Po kliknutí na druh se zobrazí krátký popis
a podle čeho ho poznám v přírodě. Větve jdou sbalit a rozbalit.
```

### Koláčový graf (biologie, výchova ke zdraví)

```text
Vytvoř koláčový graf, který porovná obsah vitamínů ve 100 g borůvek, jahod a jablek.
Ovoce se přepíná tlačítky. Pod grafem jedna věta, k čemu tělo daný vitamín potřebuje.
Uveď zdroj dat; pokud si hodnotami nejsi jistý, napiš to.
```

### Přehled vzorců (matematika, fyzika)

```text
Vytvoř přehlednou stránku „Derivace základních funkcí“ pro maturanty.
Dvě tabulky: derivace základních funkcí (f(x), f′(x), podmínky) a pravidla derivování
(součet, součin, podíl, složená funkce). Vzorce zapiš matematickou sazbou.
Přidej tlačítko „Procvičit“, které ukáže náhodnou funkci a po kliknutí její derivaci.
```

Výstup pečlivě zkontrolujte — chatboti v matematice stále chybují.

### Simulace logické úlohy (informatika, matematika)

```text
Vytvoř hru „Vlk, koza a zelí“: převozník musí přepravit vlka, kozu a zelí přes řeku,
do člunu se vejde jen jedna věc. Koza nesmí zůstat sama se zelím, vlk ne s kozou.
Postavy přetahuji myší nebo prstem. Při prohře ukaž, co se stalo, a nabídni nový pokus.
Počítej tahy a po výhře ukaž, jestli šlo o nejkratší řešení.
```

S žáky pak můžete řešení zakreslit jako sekvenční diagram nebo algoritmus.

### Vlastní ikona (výtvarná výchova, informatika)

```text
Nakresli jako vektorový obrázek (SVG) jednoduchou ikonu červeného srdce
v plochém stylu. Pak přidej tlačítka pro změnu barvy a velikosti
a tlačítko „Stáhnout SVG“.
```

### 3D model pro tiskárnu (informatika, technika)

```text
Vytvoř v OpenSCADu parametrický model krabičky s víčkem. Parametry: šířka, délka,
výška a tloušťka stěny v milimetrech. Vysvětli, jak model otevřu v OpenSCADu
(je zdarma) a exportuji do STL pro 3D tisk.
```

U 3D modelů začněte jednoduchým tvarem a vylepšujte ho postupně — přesné popisy složitých tvarů zatím selhávají.

[Pro pokročilé →](/vibe-coding/pro-pokrocile)
