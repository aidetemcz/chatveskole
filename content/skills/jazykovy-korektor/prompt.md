---
title: Jazykový korektor
typ: prompt
---

## Základní prompt

```text
Jsi pečlivý jazykový korektor češtiny. Zkontroluj text níže: pravopis, gramatiku, interpunkci, zjevné stylistické chyby a jednotnost (čísla, data, zkratky, oslovení).

1. Vrať opravený text. Každou změnu označ tučně. Když přidáš nebo odebereš čárku, tučně označ slovo, které po ní následuje.
2. Pod text napiš seznam změn ve tvaru: původně → oprava — krátký důvod.
3. Nakonec uveď místa, kde si nejsi jistý nebo kde jsou správné obě varianty.

Zachovej význam i styl textu a nepřepisuj věty, které jsou v pořádku. Stylistické návrhy napiš zvlášť jako „Doporučení“, do textu je nezapracovávej.

Text:
[vložte text, například: Dva děti vystoupyly z autobusu a vydali se ke škole. Do školi se těšili.]
```

## Varianta: Stylistické hodnocení

```text
Jsi lingvista a zkušený redaktor. Ohodnoť stylistickou stránku textu níže: srozumitelnost, slovosled, opakování slov, délku vět, hromadění podstatných jmen a vhodnost pro adresáta.

Adresát a účel: [například rodiče žáků 3. třídy, informace na školní web]
Text: [vložte text]

Postup:
1. Krátce shrň hlavní stylistické slabiny (nejvýš 5 bodů).
2. Navrhni přepracovanou verzi. Zachovej význam a všechny informace.
3. U větších změn jednou větou vysvětli proč.
```

## Varianta: Nedělitelné mezery

```text
V této konverzaci do každého textu, který vložím, doplň nedělitelné mezery za všechny jednopísmenné předložky a spojky (k, s, v, z, o, u, a, i — malé i velké).
Navíc: [například také mezi číslo a jednotku (5 kg, 10 %) a do dat (7. 11. 2026) / nic dalšího]
Výstup: [například text pro web s entitou &nbsp; / text s neviditelnými nedělitelnými mezerami]

- Pokud chci &nbsp;, vrať text v bloku kódu, aby se entita nepřevedla. Příklad: „s určitým zpožděním“ → „s&nbsp;určitým zpožděním“.
- Jinak text neměň. Když si všimneš chyby, jen ji zmiň pod textem.
- Na konci napiš, kolik míst jsi upravil.

Potvrď, že rozumíš, a počkej na první text.
```

## Varianta: Slovní a větný rozbor (kontrola pro učitele)

```text
Jsi učitel češtiny. Pomoz mi zkontrolovat rozbor věty nebo souvětí, které dávám žákům.

Text: [například AI akademie pro učitele je vzdělávací program, jehož cílem je vybavit učitele nejnovějšími poznatky v oblasti AI.]
Ročník: [například 9. třída]
Co určit: [například slovní druhy, větné členy, druh souvětí a vedlejších vět]

Výstup:
1. Tabulka: slovo — slovní druh.
2. Větné členy podle zvyklostí české školy (podmět, přísudek, předmět, příslovečné určení s druhem, přívlastek shodný a neshodný, doplněk).
3. U souvětí: počet vět, věty hlavní a vedlejší, druh vedlejších vět, případně poměr mezi větami hlavními.
4. Označ sporná místa, kde se školní výklady liší. Kde si nejsi jistý, řekni to.
```

**Tip:** Jde o rychlou kontrolu, ne o profesionální korekturu — sporná místa ověřte v Internetové jazykové příručce (prirucka.ujc.cas.cz). Rozbor od chatbota vždy zkontrolujte, v určování větných členů chatboti často chybují.
