---
title: Vibe Coding — materiály do výuky
menu: Vibe Coding
poradi: 4
popis: Metodika AI dětem Tvorba jednoduchých aplikací pomocí Vibe Codingu, školení Vibe Coding pro školy a osm hotových zadání pro vyučující — interaktivní časová osa, graf z dat, myšlenková mapa, simulace logické úlohy a další.
sablona: materialy-pruvodce   # vlastní šablona src/pages/vibe-coding/materialy-do-vyuky.astro
aktualizovano: 2026-11-21
stav: koncept
zdroje:
  - https://kurikulum.aidetem.cz/knowledgebase/vibecoding-01-tvorba-jednoduchych-aplikaci/
  - https://vzdelavame.aidetem.cz/akce/sborovna/vibecoding-pro-skoly/
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

# Vibe Coding ve výuce

Metodika pro žáky, školení pro celou sborovnu a osm zadání, která si můžete rovnou vyzkoušet v chatovací aplikaci.

## Metodika AI dětem

<!-- komponenta: karta s obrázkem -->

![Obálka metodiky Tvorba jednoduchých aplikací pomocí Vibe Codingu](/img/metodika-vibecoding-01.jpg)

### Tvorba jednoduchých aplikací pomocí Vibe Codingu

Žáci si bez psaní kódu navrhnou a postaví vlastní aplikaci, jednoduchou hru nebo web. Nejdřív si ujasní, pro koho aplikace bude, co má umět a jak má vypadat. Pak napíšou zadání pro AI, výsledek testují a postupně vylepšují. Hotové aplikace zveřejní a na „tržišti aplikací“ si je navzájem vyzkouší a dají si zpětnou vazbu.

- **Pro koho:** 8. a 9. ročník ZŠ a SŠ, informatika
- **Délka:** 90–160 minut

Metodika je součástí Kurikula umělé inteligence pro ZŠ a SŠ, které vytváříme ve spolupráci s Národním pedagogickým institutem.

[Otevřít metodiku](https://kurikulum.aidetem.cz/knowledgebase/vibecoding-01-tvorba-jednoduchych-aplikaci/)

## Osm zadání pro vyučující

Dříve jsme v [databázi promptů](/funkce/prompty/graf-regiony) radili, jak nechat chatbota napsat kód například pro graf a jak ho zobrazit. Dnes chatbot graf rovnou postaví. Zadání vložte do Gemini Canvas nebo Claude a upravte podle sebe.

### Interaktivní časová osa (dějepis, zeměpis)

```text
Vytvoř interaktivní časovou osu prezidentů České republiky od roku 1993 do dneška.
Každé funkční období ukaž jako barevný pruh. Po kliknutí na pruh se zobrazí jméno,
roky ve funkci a tři nejdůležitější události. Přidej tlačítko, které přepne osu
na období Československa (1918–1992). Uveď jen data, kterými si jsi jistý; nejistá označ.
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

Se žáky pak můžete řešení zakreslit jako sekvenční diagram nebo algoritmus.

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

## Školení pro sborovny

### Vibe Coding pro školy

Přijedeme za vámi do školy a za tři hodiny celé sborovně ukážeme, jak s AI tvořit jednoduché aplikace a jak Vibe Coding smysluplně zařadit do výuky. Nejde o to naučit se programovat, ale o tvořivost, spolupráci a práci s chybou.

- **Úvod:** co je Vibe Coding a čím se liší od klasické výuky informatiky.
- **Praktická část:** sami si vyzkoušíte tvorbu jednoduchých digitálních výstupů s pomocí AI. Důraz je na postup, testování a vylepšování, ne na technickou dokonalost.
- **Metodická část:** jak Vibe Coding zařadit podle věku a digitálních dovedností žáků. Přínosy, limity a rizika AI, bezpečnost, autorská práva a odpovědnost.

Odnesete si konkrétní příklady výukových scénářů, nápady na projekty s AI a jistotu při tvůrčí práci s digitálními nástroji.

**Pro koho:** pedagogové a vedení škol, nejvýš 26 účastníků<br>
**Kde a kdy:** prezenčně ve vaší sborovně, termín po domluvě<br>
**Cena:** 23 600 Kč s DPH. Školení je s certifikátem, lze ho hradit ze šablon.

[Objednat školení](https://vzdelavame.aidetem.cz/akce/sborovna/vibecoding-pro-skoly/)
