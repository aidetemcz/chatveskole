---
title: Konektory
menu: Funkcie
poradi: 6
popis: Ako prepojiť chatbota s Diskom Google, e-mailom, kalendárom alebo Microsoft 365, na čo je to v škole dobré a na čo si dať pozor pre ochranu dát.
aktualizovano: 2026-11-21
stav: ke-kontrole
zdroje:
  - data/funkce-chatbotu.yaml
---

# Konektory

Konektor prepojí chatbota s inou aplikáciou — Diskom Google, Gmailom, kalendárom, Microsoft 365, Notionom a ďalšími. Chatbot potom môže s vaším súhlasom hľadať vo vašich dokumentoch, čítať e-maily alebo zakladať udalosti v kalendári.

## Ako fungujú konektory

<!-- komponenta: infografika konektoru (src/components/data/InfografikaKonektor.astro) -->

## Na čo je to v škole dobré

V škole vám konektor ušetrí hľadanie a prepisovanie. Chatbota môžete požiadať, aby na vašom Disku našiel ŠkVP pre 2. stupeň a navrhol, kam zaradiť tému umelej inteligencie, alebo aby zo zápisnice z porady uloženej na Disku urobil úlohy pre jednotlivých kolegov. Z kalendára vám pripraví zoznam porád na budúci mesiac aj s návrhom programu tej prvej. Zvládne aj prejsť e-maily od zákonných zástupcov z tohto týždňa a pripraviť prehľad, na čo máte odpovedať. To však len so školským účtom a osobné údaje z e-mailov potom nikam ďalej nevkladajte.

## Kde konektory nájdete

| Nástroj | Ako sa volajú | Čo je zadarmo |
|---|---|---|
| ChatGPT | Aplikácie (v pluginoch) | Disk Google od tarifu Plus; vlastné konektory len Business, Enterprise, Edu |
| Gemini | Pripojené aplikácie | Gmail, Disk, Kalendár, Mapy, YouTube aj aplikácie tretích strán vo všetkých tarifoch |
| Copilot | Copilot konektory | vyše 100 hotových; k dátam školy len s licenciou |
| Claude | Konektory | Gmail, Kalendár, Disk aj Microsoft 365 vo všetkých tarifoch; vo Free jeden vlastný konektor |

## Na čo si dať pozor

Konektor dáva chatbotu prístup ku všetkému, čo vidíte vy. V e-maile a na Disku vyučujúceho bývajú osobné údaje žiakov a ich zákonných zástupcov.

- **Pripájajte len pracovný účet a len tam, kde to škola povoľuje.** Opýtajte sa správcu IT alebo zodpovednej osoby pre ochranu osobných údajov.
- **Uprednostňujte školské verzie nástrojov** (Google Workspace for Education, Microsoft 365), kde sa dáta nepoužívajú na tréning.
- **Zadávajte úzke úlohy.** „Nájdi dokument ŠkVP“ je lepšie ako „prejdi celý môj Disk“.
- **Kontrolujte, skôr ako chatbot niečo odošle alebo zmení.** Chatboty sa pred odoslaním e-mailu alebo vytvorením udalosti pýtajú — čítajte, čo potvrdzujete.
- **Konektor môžete kedykoľvek odpojiť** v nastaveniach chatbota.

## Pre pokročilých: MCP

Konektory väčšinou stoja na otvorenom štandarde MCP (Model Context Protocol). Vďaka nemu môže škola alebo vývojár prepojiť chatbota aj s vlastným systémom, napríklad so školským informačným systémom. To je však už práca pre správcu IT — viac v sekcii [Vibe Coding pre pokročilých](/vibe-coding/pro-pokrocile).

<!-- komponenta: infografika MCP (src/components/data/InfografikaMcp.astro) -->

[Späť na Zmeny vo funkciách 2026](/funkce/zmeny-2026)
