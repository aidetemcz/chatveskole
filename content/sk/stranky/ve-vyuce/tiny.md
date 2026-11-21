---
title: AI aplikácia Tiny
menu: Chatboty vo vyučovaní
poradi: 1
popis: Tiny je aplikácia s chatbotmi, ktoré žiakov vedú otázkami namiesto hotových odpovedí. Vyučujúci vidí konverzácie, údaje zostávajú v EÚ. Pre školy zadarmo.
sablona: tiny-pruvodce   # vlastní šablona src/pages/ve-vyuce/tiny.astro
aktualizovano: 2026-11-21
tlacitko: { text: Metodické materiály, href: /ve-vyuce/metodiky }
stav: ke-kontrole   # slovenský preklad; ověřit ceny/tarify a věkové podmínky s týmem Tiny (web Tiny si v několika bodech protiřečí)
zdroje:
  - https://www.tiny.school/sk/
  - https://www.tiny.school/sk/tinyboti/
  - https://www.tiny.school/sk/podmienky-pouzivania-aplikacie-tiny/
odkazy:
  - { text: Prompty pre žiakov, href: /funkce/prompty/zaci }
---

# AI aplikácia Tiny

Tiny [tajny] je AI aplikácia s jedenástimi vzdelávacími chatbotmi do vyučovania. Hovoríme im Tinyboti a pripravili ich didaktici AI dětem. Vám stačí zadať tému, napríklad „opakovanie prítomného času“. Každý žiak potom vedie vlastný rozhovor, v ktorom mu Tinybot nehovorí hotové odpovede, ale otázkami ho vedie ďalej. Tiny je pre vyučujúcich aj žiakov zadarmo.

<!-- komponenta: tlačítko -->

[Vyskúšať Tiny](https://www.tiny.school/sk/)

## Ako Tiny funguje

1. **Pripravíte lekciu.** Na **teacher.tiny.school** vyberiete Tinybota a zadáte tému.
2. **Žiaci sa pripoja kódom.** Otvoria **student.tiny.school** a zadajú kód lekcie.
3. **Každý žiak vedie vlastný rozhovor.** Tinybot nedáva hotové odpovede, ale kladie otázky, ktoré žiaka vedú k vlastnému premýšľaniu.
4. **Máte prehľad.** Konverzácie vidíte priebežne počas hodiny. Tiny vás upozorní na problematické situácie a na konci hodiny dostanete zhrnutie.

## Jedenásť chatbotov podľa úrovní myslenia

Tinyboti sú postavení podľa Bloomovej taxonómie. Každý sa zameriava na jednu úroveň myslenia, od zapamätania cez porozumenie a aplikáciu po analýzu, hodnotenie a tvorbu. Vyberte toho, ktorý zodpovedá cieľu vašej hodiny.

![Rastlina, ktorej vetvy zodpovedajú úrovniam myslenia. Zapamätanie: Testovací chatbot, Opakovací parťák. Porozumenie: Spoločné objavovanie, Zvedavý mimoň, Historická postava, V hlavnej úlohe. Aplikácia: Čo keby. Analýza a hodnotenie: Chybujúci chatbot, Argumentačný partner. Tvorba: Parťák na brainstorming, Chatbot na plánovanie.](/img/tinyboti-diagram-sk.svg)

| Kognitívny proces | Tinybot | Čo robí | Metodika |
|---|---|---|---|
| Zapamätanie | Testovací chatbot | Overuje vedomosti žiaka rôznymi typmi testov. | [Metodika](https://www.tiny.school/sk/testovaci-chatbot/) |
| | Opakovací parťák | Pýta sa a vysvetľuje, ak žiak nerozumie. | [Metodika](https://www.tiny.school/sk/opakovaci-partak/) |
| Porozumenie | Spoločné objavovanie | Pomáha žiakovi učiť sa samostatne, na hodine aj doma. | [Metodika](https://www.tiny.school/sk/spolocne-objavovanie/) |
| | Zvedavý mimoň | Robí, že učivu nerozumie, a chce, aby mu ho žiak vysvetlil. | [Metodika](https://www.tiny.school/sk/zvedavy-mimon/) |
| | Historická postava / Expert | Hrá historickú postavu alebo experta a približuje súvislosti. | [Metodika](https://www.tiny.school/sk/historicka-postava-expert/) |
| | V hlavnej úlohe… | Vžije sa do zadanej roly a odpovedá z jej pohľadu. | [Metodika](https://www.tiny.school/sk/v-hlavnej-ulohe/) |
| Aplikácia | Čo keby… | Rozvíja hypotetický scenár a pomáha o ňom premýšľať. | [Metodika](https://www.tiny.school/sk/co-keby/) |
| Analýza a hodnotenie | Argumentačný partner | V diskusii zastáva opačný názor a upozorňuje na argumentačné fauly. | [Metodika](https://www.tiny.school/sk/argumentacny-partner/) |
| | Chybujúci chatbot | Zámerne robí chyby a vedie žiaka k tomu, aby si informácie overoval. | [Metodika](https://www.tiny.school/sk/chybujuci-chatbot/) |
| Tvorba | Parťák na brainstorming | Pomáha vymýšľať nápady a riešenia. | [Metodika](https://www.tiny.school/sk/partak-na-brainstorming/) |
| | Chatbot na plánovanie | Pomáha rozvrhnúť prácu do konkrétnych krokov. | [Metodika](https://www.tiny.school/sk/chatbot-na-planovanie/) |

<!-- komponenta: tlačítko -->

[Videonávody na Tiny](https://www.tiny.school/sk/video-navody/)

## Čo ďalšie Tiny ponúka

Okrem Tinybotov nájdete v Tiny modelové lekcie a AI asistentov pre vyučujúcich, napríklad na formatívne hodnotenie.

## Bezpečnosť a pre koho je Tiny

Tiny je pre školy zadarmo. Žiaci sa prihlasujú školským účtom Office 365 alebo Google, prípadne školským e-mailom.

Údaje zostávajú na serveroch v Európskej únii a pri prenose sú šifrované. Skôr ako konverzácia odíde jazykovému modelu, Tiny ju anonymizuje. Osobné údaje žiakov ani ich konverzácie neslúžia na trénovanie modelov AI.

Tiny spracúva len osobné údaje nevyhnutné na prevádzku aplikácie. Žiakom neposiela obchodné oznámenia a údaje nepredáva tretím stranám. Po ukončení spolupráce sa údaje do 30 dní vymažú.

Tiny je určené žiakom od 11 rokov. Žiaci vo veku 11 a 12 rokov potrebujú súhlas zákonného zástupcu. Zabezpečí ho vyučujúci a vzor nájdete v [podmienkach Tiny](https://www.tiny.school/sk/podmienky-pouzivania-aplikacie-tiny/). Pre deti mladšie ako 11 rokov Tiny nie je.

Máte otázku? Napíšte nám na [tiny@aidetem.cz](mailto:tiny@aidetem.cz).
