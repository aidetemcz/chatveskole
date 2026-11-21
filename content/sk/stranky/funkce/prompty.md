---
title: Prompty
menu: Funkcie
poradi: 2
popis: Čo je prompt, ako ho napísať, aby chatbot odpovedal dobre, a kedy namiesto promptu použiť zručnosť. Na konci odkaz na katalóg overených promptov.
sablona: prompty-pruvodce   # vlastní šablona src/pages/funkce/prompty/index.astro (návrh z Claude Design, 20. 11. 2026)
tlacitko: { text: Prejsť na katalóg promptov, href: /prompty }
aktualizovano: 2026-11-21
stav: ke-kontrole
odkazy:
  - { text: Zručnosti (skills), href: /funkce/skills }
---

Prompt je zadanie, ktoré chatbotu napíšete: otázka, pokyn, opis úlohy. Čím jasnejšie a konkrétnejšie napíšete, čo chcete, tým lepšie chatbot pochopí, čo od neho očakávate.

## Chatbot ako milióny expertov

Máte k dispozícii odborníkov z akéhokoľvek odboru, od záhradníka po fyzika. Aby vám však pomohli, potrebujú kontext. Stačí zmeniť jedno slovo a dostanete úplne inú odpoveď. Vyskúšajte oba prompty a porovnajte ich.

> Si scítaný akademik. Vymysli mi program na popoludnie.

> Si nezbedné dievčatko. Vymysli mi program na popoludnie.

## Sedem techník, ako dať chatbotu kontext

Začnite holým zadaním a klikaním pridávajte techniky, alebo si nechajte prompt poskladať postupne. Každá farba v prompte zodpovedá jednej technike.

<!-- komponenta: skládačka promptu (data/skladacka-promptu.yaml) -->

Prompt nemusí obsahovať všetkých sedem techník. Vyberte tie, ktoré majú pre vašu úlohu zmysel.

## Tri tipy navyše

- **Nechajte sa dopytovať.** Pridajte na koniec: „Skôr ako začneš, opýtaj sa ma na všetko, čo potrebuješ vedieť.“
- **Pokračujte v konverzácii.** Prvá odpoveď je návrh. Povedzte, čo upraviť: „Skráť to na polovicu“, „Pridaj otázky na diskusiu“.
- **Priložte podklady.** Pracovný list, ŠkVP, fotku tabule. Nikdy však nie mená žiakov ani iné osobné údaje, namiesto nich iniciály.

## Prompt, alebo zručnosť?

Začnite promptom. Keď ho používate často, uložte si ho ako zručnosť.

| | Prompt | Zručnosť |
|---|---|---|
| Čo to je | Text, ktorý vložíte do chatu | Inštrukcie zabalené do funkcie, ktorú vyvoláte lomkou alebo zavináčom |
| Kde funguje | Všade, aj v bezplatných verziách a pre žiakov | V platených aj niektorých bezplatných verziách, väčšinou len pre dospelých |
| Kedy sa hodí | Jednorazová úloha, vyučovanie so žiakmi, vyskúšanie | Úloha, ktorú opakujete: hodnotenie, prípravy, správy zákonným zástupcom |

## Nechcete začínať od nuly?

V katalógu nájdete overené prompty pre vyučujúcich, vedenie škôl aj žiakov. Skopírujte prompt a doplňte údaje v hranatých zátvorkách.
