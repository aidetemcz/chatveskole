---
title: Vibe Coding — materiály do vyučovania
menu: Vibe Coding
poradi: 4
popis: Metodika AI dětem na Vibe Coding so žiakmi, osem hotových zadaní, v ktorých chatbot rovno postaví aplikáciu, a školenie pre zborovne.
sablona: materialy-pruvodce   # vlastní šablona src/pages/vibe-coding/materialy-do-vyuky.astro
aktualizovano: 2026-11-21
stav: ke-kontrole   # slovenský preklad; školenie je len pre české školy (cena v Kč)
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

# Vibe Coding vo vyučovaní

Metodika pre žiakov, školenie pre celú zborovňu a osem zadaní, ktoré si môžete rovno vyskúšať v chatovacej aplikácii.

## Metodika AI dětem

<!-- komponenta: karta s obrázkem -->

![Obálka metodiky Tvorba jednoduchých aplikácií pomocou Vibe Codingu](/img/metodika-vibecoding-01.jpg)

### Tvorba jednoduchých aplikácií pomocou Vibe Codingu

Žiaci si bez písania kódu navrhnú a postavia vlastnú aplikáciu, jednoduchú hru alebo web. Najprv si ujasnia, pre koho bude aplikácia určená, čo má vedieť a ako má vyzerať. Potom napíšu zadanie pre AI, výsledok testujú a postupne vylepšujú. Hotové aplikácie zverejnia a na „trhovisku aplikácií“ si ich navzájom vyskúšajú a dajú si spätnú väzbu.

- **Pre koho:** 8. a 9. ročník ZŠ a SŠ, informatika
- **Dĺžka:** 90–160 minút

Metodika je súčasťou Kurikula umelej inteligencie pre ZŠ a SŠ, ktoré vytvárame v spolupráci s Národným pedagogickým inštitútom Českej republiky. Metodika je v češtine.

[Otvoriť metodiku (v češtine)](https://kurikulum.aidetem.cz/knowledgebase/vibecoding-01-tvorba-jednoduchych-aplikaci/)

## Osem zadaní pre vyučujúcich

Kedysi sme v [databáze promptov](https://chatveskole.cz/funkce/prompty/graf-regiony/) (v češtine) radili, ako napísať zadanie pre chatbota tak, aby vytvoril kód, ktorý vizualizuje napríklad graf. Dnes ho chatbot rovno postaví sám. Zadania vyskúšajte napríklad v Gemini Canvas alebo v Canva Code.

### Interaktívna časová os (dejepis, geografia)

```text
Vytvor interaktívnu časovú os prezidentov Slovenskej republiky od roku 1993 po dnešok.
Každé funkčné obdobie ukáž ako farebný pruh. Po kliknutí na pruh sa zobrazí meno,
roky vo funkcii a tri najdôležitejšie udalosti. Pridaj tlačidlo, ktoré prepne os
na obdobie Československa (1918 – 1992). Uveď len údaje, ktorými si si istý; neisté označ.
```

### Graf z údajov (geografia, občianska náuka)

```text
Vytvor interaktívny stĺpcový graf počtu obyvateľov krajov Slovenskej republiky.
Údaje ti vložím ako tabuľku zo Štatistického úradu SR. Kraje zoraď od najväčšieho.
Pridaj prepínač „počet obyvateľov / hustota zaľudnenia“ a po prejdení myšou ukáž presné číslo.
[sem vložte tabuľku zo Štatistického úradu SR]
```

Tip: údaje vždy dodajte z overeného zdroja. Keď ich chatbot „doplní sám“, často si ich vymyslí.

### Myšlienková mapa (biológia)

```text
Vytvor interaktívnu myšlienkovú mapu drevín strednej Európy pre 6. ročník.
V strede „Dreviny“, vetvy: ihličnaté stromy, listnaté stromy, kry.
Ku každej vetve 4 – 6 príkladov. Po kliknutí na druh sa zobrazí krátky opis
a podľa čoho ho spoznám v prírode. Vetvy sa dajú zbaliť a rozbaliť.
```

### Koláčový graf (biológia, výchova k zdraviu)

```text
Vytvor koláčový graf, ktorý porovná obsah vitamínov v 100 g čučoriedok, jahôd a jabĺk.
Ovocie sa prepína tlačidlami. Pod grafom jedna veta, na čo telo daný vitamín potrebuje.
Uveď zdroj údajov; ak si hodnotami nie si istý, napíš to.
```

### Prehľad vzorcov (matematika, fyzika)

```text
Vytvor prehľadnú stránku „Derivácie elementárnych funkcií“ pre maturantov.
Dve tabuľky: derivácie elementárnych funkcií (f(x), f′(x), podmienky) a pravidlá derivovania
(súčet, súčin, podiel, zložená funkcia). Vzorce zapíš matematickou sadzbou.
Pridaj tlačidlo „Precvičiť“, ktoré ukáže náhodnú funkciu a po kliknutí jej deriváciu.
```

Výstup starostlivo skontrolujte — chatboty v matematike stále robia chyby.

### Simulácia logickej úlohy (informatika, matematika)

```text
Vytvor hru „Vlk, koza a kapusta“: prievozník musí previezť vlka, kozu a kapustu cez rieku,
do člna sa zmestí len jedna vec. Koza nesmie zostať sama s kapustou, vlk nie s kozou.
Postavy presúvam myšou alebo prstom. Pri prehre ukáž, čo sa stalo, a ponúkni nový pokus.
Počítaj ťahy a po výhre ukáž, či išlo o najkratšie riešenie.
```

So žiakmi potom môžete riešenie zakresliť ako sekvenčný diagram alebo algoritmus.

### Vlastná ikona (výtvarná výchova, informatika)

```text
Nakresli ako vektorový obrázok (SVG) jednoduchú ikonu červeného srdca
v plochom štýle. Potom pridaj tlačidlá na zmenu farby a veľkosti
a tlačidlo „Stiahnuť SVG“.
```

### 3D model pre tlačiareň (informatika, technika)

```text
Vytvor v OpenSCADe parametrický model škatuľky s vekom. Parametre: šírka, dĺžka,
výška a hrúbka steny v milimetroch. Vysvetli, ako model otvorím v OpenSCADe
(je zadarmo) a exportujem do STL na 3D tlač.
```

Pri 3D modeloch začnite jednoduchým tvarom a vylepšujte ho postupne — presné opisy zložitých tvarov zatiaľ zlyhávajú.

[Pre pokročilých →](/vibe-coding/pro-pokrocile)

## Školenie pre zborovne

### Vibe Coding pre školy

Školenie ponúkame školám v Česku, v češtine. Prídeme za vami do školy a za tri hodiny celej zborovni ukážeme, ako s AI tvoriť jednoduché aplikácie a ako Vibe Coding zmysluplne zaradiť do vyučovania. Nejde o to naučiť sa programovať, ale o tvorivosť, spoluprácu a prácu s chybou.

- **Úvod:** čo je Vibe Coding a čím sa líši od klasického vyučovania informatiky.
- **Praktická časť:** sami si vyskúšate tvorbu jednoduchých digitálnych výstupov s pomocou AI. Dôraz je na postup, testovanie a vylepšovanie, nie na technickú dokonalosť.
- **Metodická časť:** ako Vibe Coding zaradiť podľa veku a digitálnych zručností žiakov. Prínosy, limity a riziká AI, bezpečnosť, autorské práva a zodpovednosť.

Odnesiete si konkrétne príklady scenárov do vyučovania, nápady na projekty s AI a istotu pri tvorivej práci s digitálnymi nástrojmi.

**Pre koho:** pedagógovia a vedenie škôl, najviac 26 účastníkov<br>
**Kde a kedy:** prezenčne vo vašej zborovni, termín po dohode<br>
**Cena:** 23 600 Kč s DPH (cena pre školy v Česku). Školenie je s certifikátom, české školy ho môžu hradiť zo šablón.

[Objednať školenie (v češtine)](https://vzdelavame.aidetem.cz/akce/sborovna/vibecoding-pro-skoly/)
