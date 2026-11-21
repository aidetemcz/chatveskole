---
title: Konektory
menu: Funkce
poradi: 6
popis: Jak napojit chatbota na Google Disk, e-mail, kalendář nebo Microsoft 365, k čemu je to ve škole dobré a na co si dát pozor kvůli ochraně dat.
aktualizovano: 2026-11-21
stav: koncept
zdroje:
  - data/funkce-chatbotu.yaml
---

# Konektory

Konektor napojí chatbota na jinou aplikaci — Google Disk, Gmail, kalendář, Microsoft 365, Notion a další. Chatbot pak může s vaším svolením hledat ve vašich dokumentech, číst e-maily nebo zakládat události v kalendáři.

## Jak fungují konektory

<!-- komponenta: infografika konektoru (src/components/data/InfografikaKonektor.astro) -->

## K čemu je to ve škole dobré

Ve škole vám konektor ušetří hledání a přepisování. Chatbota můžete požádat, ať na vašem Disku najde ŠVP pro 2. stupeň a navrhne, kam zařadit téma umělé inteligence, nebo ať ze zápisu z porady uloženého na Disku udělá úkoly pro jednotlivé kolegy. Z kalendáře vám připraví seznam porad na příští měsíc i s návrhem programu té první. Zvládne také projít e-maily od rodičů z tohoto týdne a připravit přehled, na co máte odpovědět. To ale jen se školním účtem a osobní údaje z e-mailů pak nikam dál nevkládejte.

## Kde konektory najdete

| Nástroj | Jak se jmenují | Co je zdarma |
|---|---|---|
| ChatGPT | Aplikace (v pluginech) | Google Disk od tarifu Plus; vlastní konektory jen Business, Enterprise, Edu |
| Gemini | Připojené aplikace | Gmail, Disk, Kalendář, Mapy, YouTube i aplikace třetích stran ve všech tarifech |
| Copilot | Copilot konektory | přes 100 hotových; k datům školy jen s licencí |
| Claude | Konektory | Gmail, Kalendář, Disk i Microsoft 365 ve všech tarifech; ve Free jeden vlastní konektor |

## Na co si dát pozor

Konektor dává chatbotu přístup ke všemu, co vidíte vy. V e-mailu a na Disku vyučujícího bývají osobní údaje žáků a rodičů.

- **Připojujte jen pracovní účet a jen tam, kde to škola povoluje.** Zeptejte se správce IT nebo pověřence pro ochranu osobních údajů.
- **Dávejte přednost školním verzím nástrojů** (Google Workspace for Education, Microsoft 365), kde se data nepoužívají k tréninku.
- **Zadávejte úzké úkoly.** „Najdi dokument ŠVP“ je lepší než „projdi celý můj Disk“.
- **Kontrolujte, než chatbot něco odešle nebo změní.** Chatboti se před odesláním e-mailu nebo vytvořením události ptají — čtěte, co potvrzujete.
- **Konektor můžete kdykoli odpojit** v nastavení chatbota.

## Pro pokročilé: MCP

Konektory většinou stojí na otevřeném standardu MCP (Model Context Protocol). Díky němu může škola nebo vývojář napojit chatbota i na vlastní systém, například školní informační systém. To už je ale práce pro správce IT — víc v sekci [Vibe Coding pro pokročilé](/vibe-coding/pro-pokrocile).

<!-- komponenta: infografika MCP (src/components/data/InfografikaMcp.astro) -->

[Zpět na Změny ve funkcích 2026](/funkce/zmeny-2026)
