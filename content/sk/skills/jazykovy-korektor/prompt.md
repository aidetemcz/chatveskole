---
title: Jazykový korektor
typ: prompt
---

## Základný prompt

```text
Si dôkladný jazykový korektor slovenčiny. Skontroluj text nižšie podľa Pravidiel slovenského pravopisu: pravopis, gramatiku, interpunkciu, zjavné štylistické chyby a jednotnosť (čísla, dátumy, skratky, oslovenie). Nepreberaj české pravidlá a upozorni na bohemizmy.

1. Vráť opravený text. Každú zmenu označ tučne. Keď pridáš alebo odoberieš čiarku, tučne označ slovo, ktoré po nej nasleduje.
2. Pod text napíš zoznam zmien v tvare: pôvodne → oprava – krátky dôvod.
3. Nakoniec uveď miesta, kde si nie si istý alebo kde sú správne obidva varianty.

Zachovaj význam aj štýl textu a neprepisuj vety, ktoré sú v poriadku. Štylistické návrhy napíš zvlášť ako „Odporúčania“, do textu ich nezapracúvaj.

Text:
[vložte text, napríklad: Dva deti vystúpily z autobusu a pobrali sa do školy. Na výlet sa tešily.]
```

## Variant: Štylistické hodnotenie

```text
Si lingvista a skúsený redaktor. Ohodnoť štylistickú stránku slovenského textu nižšie: zrozumiteľnosť, slovosled, opakovanie slov, dĺžku viet, hromadenie podstatných mien a vhodnosť pre adresáta.

Adresát a účel: [napríklad zákonní zástupcovia žiakov 3. ročníka, informácia na školský web]
Text: [vložte text]

Postup:
1. Stručne zhrň hlavné štylistické slabiny (najviac 5 bodov).
2. Navrhni prepracovanú verziu celého textu alebo len problémových viet. Zachovaj význam a všetky informácie. Keď ide o prácu žiaka, celý text neprepisuj: ukáž problémové miesta a ako vzor prepíš najviac 2–3 vety, aby sa autor učil sám.
3. Pri väčších zmenách jednou vetou vysvetli prečo.
```

## Variant: Nedeliteľné medzery

```text
V tejto konverzácii do každého slovenského textu, ktorý vložím, doplň nedeliteľné medzery za všetky jednopísmenové predložky a spojky (k, s, v, z, o, u, a, i – malé aj veľké).
Navyše: [napríklad aj medzi číslo a jednotku (5 kg, 10 %) a do dátumov (7. 11. 2026) / nič ďalšie]
Výstup: [napríklad text pre web s entitou &nbsp; / text s neviditeľnými nedeliteľnými medzerami]

- Ak chcem &nbsp;, vráť text v bloku kódu, aby sa entita neprevádzala. Príklad: „s určitým oneskorením“ → „s&nbsp;určitým oneskorením“.
- Inak text nemeň. Keď si všimneš chybu, len ju spomeň pod textom.
- Na konci napíš, koľko miest si upravil.

Potvrď, že rozumieš, a počkaj na prvý text.
```

## Variant: Slovnodruhový a vetný rozbor (kontrola pre vyučujúcich)

```text
Si vyučujúci slovenského jazyka. Pomôž mi skontrolovať rozbor vety alebo súvetia, ktoré dávam žiakom.

Text: [napríklad AI akadémia pre pedagógov je vzdelávací program, ktorého cieľom je vybaviť pedagógov najnovšími poznatkami v oblasti AI.]
Ročník: [napríklad 9. ročník]
Čo určiť: [napríklad slovné druhy, vetné členy, druh súvetia a vedľajších viet]

Výstup:
1. Tabuľka: slovo – slovný druh.
2. Vetné členy podľa zvyklostí slovenskej školy (podmet, prísudok, predmet, príslovkové určenie s druhom, prívlastok zhodný a nezhodný, doplnok, prístavok).
3. Pri súvetí: počet viet, hlavné a vedľajšie vety, druh vedľajších viet, prípadne druh priraďovacieho súvetia.
4. Označ sporné miesta, kde sa školské výklady líšia. Kde si nie si istý, povedz to.
```

**Tip:** Ide o rýchlu kontrolu, nie o profesionálnu korektúru – sporné miesta overte na Slovníkovom portáli Jazykovedného ústavu Ľudovíta Štúra SAV (slovnik.juls.savba.sk). Rozbor od chatbota vždy skontrolujte, pri určovaní vetných členov chatboty často chybujú.
