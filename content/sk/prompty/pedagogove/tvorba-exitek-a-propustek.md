---
title: "Tvorba výstupných a sebahodnotiacich lístkov"
slug: "tvorba-exitek-a-propustek"
skupina: pedagogove
kategorie: ["Podpora formativního přístupu"]
kategorie_slug: ["podpora-formativniho-pristupu"]
puvodni_url: "https://chatveskole.cz/databaze-promptu/pracovni-list-pro-reflexi-uciva/"
stav: upraveno
---
## Prompt

```text
Vystupuj ako skúsený pedagóg so zameraním na formatívne hodnotenie. Priprav mi lístok na koniec hodiny. Výstupný lístok zisťuje porozumenie učivu: žiak vyrieši úlohu, vysvetlí pojem alebo zhrnie hlavnú myšlienku. Sebahodnotiaci lístok je sebahodnotenie: žiak zapíše, ako sa mu darilo, čo bolo ťažké a čo si odnáša. Oboje slúži na naplánovanie ďalšej hodiny a neznámkuje sa.

Predmet a ročník: [napríklad matematika, 5. ročník ZŠ]
Cieľ hodiny: [napríklad Žiak porovná zlomky s rovnakým menovateľom.]
Kritériá hodnotenia: [vložte, alebo riadok vymažte]
Čo chcem zistiť: [porozumenie (výstupný lístok) / sebahodnotenie (sebahodnotiaci lístok) / oboje]
Forma: [papier / online formulár / ústne pri dverách]
Čas: [napríklad 3 minúty]
Variant: [kód z ponuky, alebo riadok vymažte a vyber sám]
Typické ťažkosti žiakov: [nepovinné, alebo riadok vymažte]

Ponuka variantov
Výstupné lístky: A1 jedna kľúčová úloha alebo „vysvetli vlastnými slovami“ · A2 výber z možností a – d s odôvodnením, každá chybná možnosť zodpovedá jednej typickej chybe · A3 tri odstupňované úlohy (základ – použitie – nová situácia) · A4 nájdi a oprav chybu v ukážkovom riešení · A5 vysvetli spolužiakovi, ktorý chýbal · A6 3-2-1 (tri veci, ktoré som sa dozvedel/a, dva príklady použitia, jedna otázka) · A7 pred a po (rovnaká otázka na začiatku aj na konci hodiny) · A8 obrázková pre nečitateľov (nakresli, zakrúžkuj, spoj).
Sebahodnotiace lístky: B1 nedokončené vety („Dnes som sa naučil/a…“, „Ešte mi nie je jasné…“) · B2 sebahodnotenie ku kritériám na škále J–Č–T–Ú · B3 semafor pre 1. stupeň (zelená rozumiem, oranžová čiastočne, červená ešte nerozumiem) · B4 ako som sa učil/a (čo mi pomohlo, kde som sa zasekol/zasekla, čo skúsim nabudúce) · B5 odkaz pre vyučujúcich („Aby som to zvládol/zvládla lepšie, potreboval/a by som…“).
Kombinácia: C1 cieľ pre žiaka („Dnes sa učím…“), jedna úloha, sebahodnotenie J–Č–T–Ú a miesto na komentár žiaka aj vyučujúceho.
Škála J–Č–T–Ú pre žiakov: J Ešte mi to nejde a stále sa učím. Č Trochu mi to ide, ale robím chyby. T Skoro to už zvládnem sám/sama, len s drobnou pomocou. Ú Úplne to viem sám/sama.

Postup:
1. Ak som variant nevybral/a, zvoľ ten, ktorý sa k cieľu a času hodí najviac, a jednou vetou napíš prečo.
2. LÍSTOK PRE ŽIAKOV (v tykaní): pokyn v jednej vete, najviac tri otázky, miesto na odpoveď, dole drobne „Toto sa neznámkuje. Pomôže mi to pripraviť ďalšiu hodinu.“ Pri papieri navrhni, koľko lístkov sa zmestí na A4. Pri formulári uveď typ poľa pri každej otázke. Pri ústnej verzii napíš otázku a ako si odpovede rýchlo poznačiť.
3. PRE VYUČUJÚCICH (netlačiť): čo lístok overuje, správna odpoveď alebo znaky dobrej odpovede, typické chyby a čo prezrádzajú, ako lístky roztriediť na tri kôpky (zvládli / čiastočne / ešte nie) a ako s každou skupinou začať ďalšiu hodinu. Pri sebahodnotiacom lístku namiesto správnej odpovede napíš, čoho si pri čítaní všímať (opakujúce sa ťažkosti, žiaci, ktorí sa hodnotia inak, ako ukazuje ich práca).
4. Ponúkni dva ďalšie vhodné varianty a pomoc s vyhodnotením: keď vložím prepísané odpovede (len s iniciálami alebo číslami), roztriedíš ich a pomenuješ opakujúce sa chyby.

Pravidlá:
- Overuj jeden, najviac dva kľúčové ciele hodiny. Vyplnenie do 3 minút, sebahodnotiaci lístok asi 90 sekúnd.
- Otázka musí ukázať, ako žiak premýšľa. Žiadne „Rozumel/a si?“ ani otázky na áno/nie.
- Možnosti výberu nesmú byť vtipné ani zjavne nezmyselné.
- Krátke vety, jazyk primeraný veku, tvary s „/a“. Formulácie nezatvárajú cestu („Ešte mi nie je jasné…“, nie „Nerozumiem…“).
- Žiadne body, percentá ani smajlíky ako náhrada známky.
- Ak si nie si istý správnou odpoveďou, povedz mi to.
Ak chýba predmet, ročník alebo cieľ, najprv sa ma opýtaj.
```

## Čo je cieľom promptu

Prompt vám pripraví lístok na koniec hodiny. Výstupný lístok (exit ticket) zisťuje, ako žiaci porozumeli učivu, sebahodnotiaci lístok je ich sebahodnotenie. Môžete si vybrať zo 14 variantov, alebo nechať chatbota vybrať ten, ktorý sa k cieľu hodiny hodí najviac.

Dostanete lístok pre žiakov pripravený na tlač, do online formulára alebo na položenie otázky pri dverách, a k nemu poznámky pre seba: správne odpovede, typické chyby a ako lístky rýchlo roztriediť do troch skupín. Z odpovedí naplánujete ďalšiu hodinu. Nič z toho sa neznámkuje.

## Ako prompt použiť

Skopírujte prompt do chatbota a doplňte predmet, ročník a cieľ hodiny. Pri riadkoch s možnosťami nechajte len tú, ktorú chcete. Ak viete, ktorý variant chcete, napíšte jeho kód (napríklad A2 alebo B1), inak riadok vymažte a chatbot vyberie sám.

Po hodine môžete do rovnakej konverzácie vložiť prepísané odpovede žiakov a chatbot ich roztriedi a pomenuje, čo sa opakuje. Odpovede vkladajte len s iniciálami alebo číslami, nikdy s menami.
