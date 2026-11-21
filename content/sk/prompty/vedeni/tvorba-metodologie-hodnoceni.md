---
title: "Tvorba metodológie hodnotenia"
slug: "tvorba-metodologie-hodnoceni"
skupina: vedeni
kategorie: ["Tvorba strategických dokumentů"]
kategorie_slug: ["tvorba-strategickych-dokumentu"]
skill: "strategicke-dokumenty"
puvodni_url: "https://chatveskole.cz/databaze-promptu/tvorba-metodologie-hodnoceni/"
puvodni_uprava: "2025-07-30T15:42:51"
stav: upraveno
---
## Prompt

```text
Vystupuj ako skúsený školský stratég zameraný na formatívne hodnotenie. Navrhni metodológiu hodnotenia žiakov pre našu školu.

Škola: [napríklad ZŠ s 1. aj 2. stupňom, 400 žiakov]
Ako dnes hodnotíme: [napríklad známky, na 1. stupni slovné hodnotenie v polroku, časť vyučujúcich pracuje s kritériami a sebahodnotením]
Čo chceme zmeniť: [napríklad zjednotiť prácu s kritériami, neznámkovať priebežné práce, zaviesť portfólio]
Čo funguje a kde sú problémy: [napríklad zákonní zástupcovia chcú známky, vyučujúci nemajú čas na spätnú väzbu]
Pravidlá hodnotenia v školskom poriadku: [vložte súčasné znenie, alebo riadok vymažte]
Na ktoré ročníky alebo predmety sa zamerať: [napríklad 6. – 7. ročník, slovenský jazyk a matematika]
Zdroje: [napríklad čas na spoločné plánovanie, vzdelávanie pedagógov]
Na ako dlho metodológia platí: [napríklad 3 roky]

Pravidlá:
1. Hodnotenie slúži hlavne učeniu. Prevažuje formatívne hodnotenie (ciele a kritériá vopred, spätná väzba, sebahodnotenie a vzájomné hodnotenie), sumatívne tam, kde je potrebná súhrnná informácia. Sumatívne hodnotenie zaraď až potom, ako žiaci pracovali so spätnou väzbou.
2. Ciele a kritériá formuluj podľa Novej taxonómie vzdelávacích cieľov (Marzano a Kendall), nie podľa Bloomovej taxonómie. Kritériá opisujú kvalitu výkonu, nie osobnosť žiaka.
3. Na sebahodnotenie a priebežné hodnotenie použi štvorúrovňovú škálu J–Č–T–Ú z metodiky Vysvědčení JINAK (J ešte neosvojené, Č čiastočne, T takmer, Ú úplne osvojené), ak nenapíšem inak.
4. Opíš, ako sa informácie o pokroku dostanú k žiakom a zákonným zástupcom (priebežne, na konzultáciách, na vysvedčení) a ako sa prevádzajú na známku alebo slovné hodnotenie, ak škola oboje kombinuje.
5. Pravidlá hodnotenia sú súčasťou školského poriadku. Upozorni, čo je potrebné do neho premietnuť. Postup jeho schvaľovania a legislatívne podrobnosti uvádzaj len všeobecne a odporuč ich overiť v platných predpisoch.
6. O hodnotení žiaka vždy rozhoduje vyučujúci, nie AI. AI môže vyučujúcim pomôcť s prípravou kritérií alebo návrhom spätnej väzby, údaje žiakov do nej nepatria. Ak škola zvažuje AI priamo na hodnotenie výsledkov učenia, upozorni, že podľa európskeho nariadenia o AI ide o vysokorizikové použitie.
7. Zavádzaj po krokoch: overenie v niekoľkých triedach, spoločné vyhodnotenie, rozšírenie. Menej zmien naraz. Každé opatrenie má nositeľa (funkciu, nie meno), termín a výstup. Východiskový stav, ktorý som nezadal(a), nevymýšľaj, napíš [doplniť].

Výstup: jeden dokument na 2 – 4 strany s nadpismi, krátkymi odsekmi a tabuľkami:
1) súčasný stav: krátka SWOT v tabuľke 2 × 2,
2) účel a vízia hodnotenia,
3) zásady (spravodlivosť, zrozumiteľnosť, motivácia, individuálny pokrok),
4) formy hodnotenia: kedy a na čo formatívne, sumatívne, sebahodnotenie a vzájomné hodnotenie,
5) kritériá a škála: ako ich vyučujúci tvoria a zjednocujú a 1 – 2 príklady kritérií s úrovňami J–Č–T–Ú,
6) nástroje (dôkazy o učení, portfólio, testy, projekty, pozorovanie): kto ich používa a ako často,
7) roly a zodpovednosti vedenia, vyučujúcich, žiakov a zákonných zástupcov,
8) rozvoj pedagógov (spoločné posudzovanie prác žiakov, vzájomné náčuvy, zdieľanie kritérií),
9) indikátory: tabuľka Indikátor – Východiskový stav – Cieľový stav – Ako a kedy meriame,
10) harmonogram zavádzania po polrokoch,
11) riziká a ako im predídeme,
12) predpoklady, s ktorými si pracoval(a).

Keď chýba typ školy alebo súčasná prax, najprv sa ma opýtaj (najviac 5 otázok naraz). Na konci ponúkni: 1) návrh textu do školského poriadku na právnu kontrolu, 2) vysvetlenie pre zákonných zástupcov, 3) kritériá pre jeden predmet a ročník.
```

## Čo je cieľom promptu

Prompt vám pomôže zostaviť metodológiu hodnotenia, ktorá slúži hlavne učeniu žiakov. Stavia na formatívnom hodnotení: ciele a kritériá podľa Novej taxonómie, spätná väzba a sebahodnotenie na škále J–Č–T–Ú z metodiky [Vysvědčení JINAK](https://vysvedcenijinak.ped.muni.cz/) (PdF MU, v češtine). Opíše aj to, ako sa informácie o pokroku dostanú k zákonným zástupcom a ako sa prevádzajú na známky alebo slovné hodnotenie.

Metodológia počíta so zavádzaním po krokoch a upozorní, čo je potrebné premietnuť do školského poriadku. O hodnotení žiaka vždy rozhoduje vyučujúci, nie AI.

## Ako prompt použiť

Skopírujte prompt do chatbota a doplňte, ako dnes hodnotíte a čo chcete zmeniť. Ak vložíte súčasné pravidlá hodnotenia zo školského poriadku, chatbot na ne nadviaže. Návrh textu do školského poriadku dajte pred schválením skontrolovať.

Kritériá pre konkrétny predmet pripravíte s promptom [Tvorba kritérií hodnotenia](/funkce/prompty/tvorba-kriterii-hodnoceni) alebo so zručnosťami [Kritériá hodnotenia](/skills/kriteria-hodnoceni) a [Gradácia kritérií hodnotenia (J–Č–T–Ú)](/skills/gradace-kriterii-hodnoceni). Ako s formatívnym prístupom pracovať v triede a ako ho zavádzať v škole, opisuje článok [Formativní přístup v praxi](https://aidetem.cz/formativni-pristup-v-praxi/) na webe AI dětem (v češtine).

**Používate tento prompt často?** Rovnakú úlohu zvládne zručnosť [Strategické dokumenty](/skills/strategicke-dokumenty), ktorú si môžete nainštalovať do svojho chatbota.
