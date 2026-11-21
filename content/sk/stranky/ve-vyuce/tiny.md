---
title: AI aplikácia Tiny
menu: Chatboty vo vyučovaní
poradi: 1
popis: Tiny je česká aplikácia s chatbotmi, ktoré žiakov vedú otázkami namiesto hotových odpovedí. Vyučujúci vidí konverzácie, údaje zostávajú v EÚ. Pre školy zadarmo.
sablona: tiny-pruvodce   # vlastní šablona src/pages/ve-vyuce/tiny.astro
aktualizovano: 2026-11-21
tlacitko: { text: Metodické materiály, href: /ve-vyuce/metodiky }
stav: ke-kontrole   # slovenský preklad; ověřit ceny/tarify a věkové podmínky s týmem Tiny (web Tiny si v několika bodech protiřečí)
zdroje:
  - https://tiny.school
  - https://www.tiny.school/popis-sluzby/
  - https://www.tiny.school/podminky-uziti/
odkazy:
  - { text: Prompty pre žiakov, href: /funkce/prompty/zaci }
---

# AI aplikácia Tiny

Tiny [tajny] je AI aplikácia s jedenástimi vzdelávacími chatbotmi do vyučovania. Hovoríme im Tinyboti a pripravili ich didaktici AI dětem. Vám stačí zadať tému, napríklad „opakovanie prítomného času“. Každý žiak potom vedie vlastný rozhovor, v ktorom mu Tinybot nehovorí hotové odpovede, ale otázkami ho vedie ďalej. Tiny je pre vyučujúcich aj žiakov zadarmo.

Tiny je česká aplikácia. Názvy Tinybotov uvádzame tak, ako sa volajú v aplikácii, a metodiky k nim sú v češtine.

<!-- komponenta: tlačítko -->

[Vyskúšať Tiny](https://tiny.school)

## Ako Tiny funguje

1. **Pripravíte lekciu.** Na **teacher.tiny.school** vyberiete Tinybota a zadáte tému.
2. **Žiaci sa pripoja kódom.** Otvoria **student.tiny.school** a zadajú kód lekcie.
3. **Každý žiak vedie vlastný rozhovor.** Tinybot nedáva hotové odpovede, ale kladie otázky, ktoré žiaka vedú k vlastnému premýšľaniu.
4. **Máte prehľad.** Konverzácie vidíte priebežne počas hodiny. Tiny vás upozorní na problematické situácie a na konci hodiny dostanete zhrnutie.

## Jedenásť chatbotov podľa úrovní myslenia

Tinyboti sú postavení podľa Bloomovej taxonómie. Každý sa zameriava na jednu úroveň myslenia, od zapamätania cez porozumenie a aplikáciu po analýzu, hodnotenie a tvorbu. Vyberte toho, ktorý zodpovedá cieľu vašej hodiny.

![Rastlina, ktorej vetvy zodpovedajú úrovniam myslenia. Zapamätanie: Testovací chatbot, Opakovací parťák. Porozumenie: Společné objevování, Zvědavý mimoň, Historická postava, V hlavní roli. Aplikácia: Co kdyby. Analýza a hodnotenie: Chybující chatbot, Argumentační partner. Tvorba: Parťák pro brainstorming, Chatbot pro plánování.](/img/tinyboti-diagram.svg)

| Kognitívny proces | Tinybot | Čo robí | Metodika |
|---|---|---|---|
| Zapamätanie | Testovací chatbot | Overuje vedomosti žiaka rôznymi typmi testov. | [Metodika (v češtine)](https://www.tiny.school/testovaci-chatbot/) |
| | Opakovací parťák | Pýta sa a vysvetľuje, ak žiak nerozumie. | [Metodika (v češtine)](https://www.tiny.school/opakovaci-partak/) |
| Porozumenie | Společné objevování | Pomáha žiakovi učiť sa samostatne, na hodine aj doma. | [Metodika (v češtine)](https://www.tiny.school/spolecne-objevovani/) |
| | Zvědavý mimoň | Robí, že učivu nerozumie, a chce, aby mu ho žiak vysvetlil. | [Metodika (v češtine)](https://www.tiny.school/zvedavy-mimon/) |
| | Historická postava / Expert | Hrá historickú postavu alebo experta a približuje súvislosti. | [Metodika (v češtine)](https://www.tiny.school/historicka-postava-expert/) |
| | V hlavní roli… | Vžije sa do zadanej roly a odpovedá z jej pohľadu. | [Metodika (v češtine)](https://www.tiny.school/v-hlavni-roli/) |
| Aplikácia | Co kdyby… | Rozvíja hypotetický scenár a pomáha o ňom premýšľať. | [Metodika (v češtine)](https://www.tiny.school/co-kdyby/) |
| Analýza a hodnotenie | Argumentační partner | V diskusii zastáva opačný názor a upozorňuje na argumentačné fauly. | [Metodika (v češtine)](https://www.tiny.school/argumentacni-partner/) |
| | Chybující chatbot | Zámerne robí chyby a vedie žiaka k tomu, aby si informácie overoval. | [Metodika (v češtine)](https://www.tiny.school/chybujici-chatbot/) |
| Tvorba | Parťák pro brainstorming | Pomáha vymýšľať nápady a riešenia. | [Metodika (v češtine)](https://www.tiny.school/partak-pro-brainstorming/) |
| | Tinybot pro plánování | Pomáha rozvrhnúť prácu do konkrétnych krokov. | [Metodika (v češtine)](https://www.tiny.school/chatbot-pro-planovani/) |

<!-- komponenta: tlačítko -->

[Návody na Tiny (v češtine)](https://www.tiny.school/navody/)

## Čo ďalšie Tiny ponúka

Okrem Tinybotov nájdete v Tiny modelové lekcie a AI asistentov pre vyučujúcich, napríklad na formatívne hodnotenie.

## Bezpečnosť a pre koho je Tiny

Tiny je pre školy zadarmo. Žiaci sa prihlasujú školským účtom Office 365 alebo Google, prípadne školským e-mailom.

Údaje zostávajú na serveroch v Európskej únii a pri prenose sú šifrované. Skôr ako konverzácia odíde jazykovému modelu, Tiny ju anonymizuje. Osobné údaje žiakov ani ich konverzácie neslúžia na trénovanie modelov AI.

Tiny spracúva len osobné údaje nevyhnutné na prevádzku aplikácie. Žiakom neposiela obchodné oznámenia a údaje nepredáva tretím stranám. Po ukončení spolupráce sa údaje do 30 dní vymažú.

Tiny je určené žiakom od 11 rokov. Žiaci vo veku 11 a 12 rokov potrebujú súhlas zákonného zástupcu. Zabezpečí ho vyučujúci a vzor nájdete v [podmienkach Tiny](https://www.tiny.school/podminky-uziti/) (v češtine). Pre deti mladšie ako 11 rokov Tiny nie je.

Máte otázku? Napíšte nám na [tiny@aidetem.cz](mailto:tiny@aidetem.cz).
