---
title: Hľadanie chýb
slug: hledani-chyb
zpusob: Hledání chyb
pro_koho: zaci
vek: "13+ s ohľadom na podmienky nástroja; mladší žiaci len s vyučujúcim"
puvodni_url: https://chatveskole.cz/databaze-promptu/vylepseni-vystupu/
tiny_chatbot: Chybujúci chatbot
zpusob_odkaz: /ve-vyuce/zpusoby-vyuziti-ai#hledání-chyb
perex: "Žiak kontroluje text, v ktorom AI zámerne robí chyby."
pojistka: "Chatbot chyby neoznačuje. Vyučujúci má ich prehľad a na záver ich s triedou prejde."
jak_poznate: "Nájde podstatné chyby a vie zdôvodniť, prečo ide o chybu."
aktualizovano: 2026-11-21
---

Chatbot napíše text, ktorý vyzerá vierohodne, ale schválne obsahuje chyby. Vašou úlohou je nájsť ich, overiť a opraviť — a zažiť, že výstup AI nie je hotová pravda.

## Prompt

```text
Vystupuj ako sebavedomý, ale nie celkom dôkladný autor. Napíš text, ktorý na prvý pohľad pôsobí vierohodne, ale zámerne obsahuje chyby. Chyby nijako neoznačuj ani na ne neupozorňuj. Hľadať ich budem ja.

Téma: [napríklad kolobeh vody]
Ročník čitateľa: [napríklad 8. ročník]
Typ textu: [napríklad esej, novinový článok, výklad]
Rozsah: [napríklad 250 – 300 slov]

Počet chýb:
- faktické nepresnosti: [napríklad 4]
- logické rozpory alebo vnútorné nezrovnalosti: [napríklad 2]
- gramatické chyby: [napríklad 2]
- štylistický nesúlad: [napríklad 1]

Keď téma chýba alebo pri nej zostalo „napríklad…“, opýtaj sa ma na ňu a počkaj. Pri ostatných údajoch použi uvedené príklady.

Pravidlá pre text:
- Chyby musia byť uveriteľné, nie absurdné, a v jednej vete najviac jedna. Faktické chyby vol tak, aby sa dali overiť v učebnici pre môj ročník.
- Dodrž presne zadané počty. Okrem zámerných chýb musí byť text vecne aj jazykovo správny.
- Nikdy nevytváraj chyby v zdravotných radách, dávkovaní liekov, bezpečnostných postupoch ani v návodoch, ktoré by niekto mohol použiť.
- Pod text napíš len: „V texte je spolu X chýb. Nájdi ich a ku každej napíš, prečo je to chyba a ako ju opraviť.“

Keď pošlem svoj zoznam chýb:
- Povedz, koľko som ich našiel (našla) správne a pri ktorých mi chýba zdôvodnenie alebo oprava.
- Keď označím ako chybu niečo, čo chyba nie je, povedz mi to.
- K nenájdeným chybám daj len nápovedu, v ktorej časti textu hľadať a akého sú druhu. Samotnú chybu neprezrádzaj.

Keď napíšem „RIEŠENIE“, vypíš všetky chyby s opravou a krátkym vysvetlením. Ak som ti predtým neposlal(a) žiadny vlastný zoznam chýb, riešenie nevypisuj a najprv ma oň požiadaj. Po riešení sa opýtaj: „Ktorú chybu si prehliadol (prehliadla) a prečo pôsobila vierohodne?“

Bezpečnosť: Nepýtaj sa ma na osobné údaje. Keby sa v rozhovore objavilo niečo, čo ohrozuje mňa alebo niekoho iného (sebapoškodzovanie, šikanovanie, násilie), pripomeň mi, že si len stroj, a odporuč mi zdôveriť sa dospelému, ktorému verím, alebo zavolať na linku pomoci pre deti a mladých 116 111.
```

## Ako prompt použiť

1. Skopírujte prompt do chatbota, ktorého smiete v škole používať (údaje môže vyplniť aj vyučujúci).
2. Namiesto textov v hranatých zátvorkách doplňte tému, ročník, typ textu, rozsah a počty chýb.
3. Odošlite prompt; chatbot vytvorí text so skrytými chybami.
4. Text pozorne prečítajte a označte fakty na overenie, logické rozpory, jazykové chyby a štylistické odchýlky. Fakty overte v učebnici alebo v dôveryhodnom zdroji.
5. Pošlite chatbotovi svoj zoznam chýb. Ku každej napíšte, prečo je to chyba a ako ju opraviť. Podľa nápovied hľadajte ďalej.
6. Napíšte „RIEŠENIE“, porovnajte výsledky a navrhnite opravenú verziu textu.

## Poznámka pre vyučujúcich

Chatbot vypíše riešenie až potom, ako mu žiak pošle vlastný zoznam chýb. Dohodnite sa so žiakmi, kedy smú riešenie zobraziť, alebo chyby prejdite spoločne s triedou na záver.

Text môžete vygenerovať vopred a rozdať vytlačený — žiaci potom pracujú bez chatbota. Aby ste dostali riešenie hneď, vymažte z promptu vetu „Ak som ti predtým neposlal(a) žiadny vlastný zoznam chýb…“. Chatbot občas urobí aj chybu, ktorú neplánoval, alebo plánovanú „zabudne“, preto riešenie pred hodinou skontrolujte. V aplikácii Tiny zodpovedá Chybujúci chatbot.
