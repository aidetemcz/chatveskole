---
title: Zručnosti (skills)
menu: Funkcie
poradi: 3
popis: Čo sú zručnosti (skills), ako ich nainštalovať do Claude, Gemini, Copilotu a ChatGPT a ako napísať vlastnú. Náhrada za GPTs a Gems.
sablona: dovednosti-pruvodce   # vlastní šablona src/pages/funkce/skills.astro (návrh z Claude Design, 20. 11. 2026)
tlacitko: { text: Katalóg zručností, href: /skills }
aktualizovano: 2026-11-21
stav: ke-kontrole   # názvy položek v rozhraní Gemini (Viac… → Prispôsobiť → Zručnosti) neověřeny ve slovenském rozhraní
zdroje:
  - https://agentskills.io/specification
  - https://support.claude.com/en/articles/12512180-use-skills-in-claude
  - https://support.google.com/gemini/answer/17094296
  - https://support.google.com/gemini/answer/18560919
  - https://workspaceupdates.googleblog.com/2026/11/share-skills-add-files-from-Drive-Notebook-Photos-to-skills-Gemini-app.html
  - https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-skill-sharing-on-or-off
  - https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize
  - https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills
  - https://help.openai.com/en/articles/20001066-skills-in-chatgpt
odkazy:
  - { text: Sady zručností (pluginy), href: /funkce/pluginy }
---

# Zručnosti (skills)

Zručnosť je priečinok s **inštrukciami a podkladmi pre úlohu, ktorú robíte často**. Vytvoríte ju raz a potom ju v chate vyvoláte zavináčom alebo lomkou.

Zručnosti nahrádzajú GPTs a Gems. Rovnakú zručnosť nahráte do Claude, Gemini, ChatGPT aj Copilotu, nie každý tarif ich však má. Kde ich nemáte, použite zručnosť ako prompt.

<!-- komponenta: video -->
[Sprievodca inštaláciou a využitím zručnosti (video v češtine)](https://www.loom.com/share/14a4cf1510e6458a82058811435b7d59)

## Z čoho sa zručnosť skladá

Zručnosť si môžete predstaviť ako priečinok, ktorý obsahuje inštrukcie a voliteľne súbory, z ktorých čerpá. Môžete si ju vytvoriť sami alebo požiadať chatbota, aby ju vytvoril za vás.

- **Názov a opis** — Podľa opisu chatbot spozná, kedy zručnosť použiť.
- **Postup** — Na čo sa opýtať, ako pracovať, ako má vyzerať výstup.
- **Podklady** — Môžu to byť texty, tabuľky aj obrázky.

## Zručnosti z tohto webu

Všetkých našich doterajších AI asistentov sme previedli na zručnosti a pridali k nim to najlepšie z databázy promptov. Pôvodné prompty zostávajú v [katalógu promptov](/prompty). Pri každej zručnosti nájdete štyri cesty, ako ju použiť:

- **Skopírovať ako prompt** — Prompt vložíte do akéhokoľvek chatbota a funguje aj v bezplatnej verzii.
- **Stiahnuť zručnosť** — Stiahnete si ZIP pre Claude, Gemini alebo ChatGPT a nahráte ho do chatbota. Pre Copilot si z inštrukcií vytvoríte agenta.
- **Inštrukcie** — Inštrukcie zručnosti otvoríte v Google Docs. Vložíte ich do agenta v Copilote alebo do projektu v ChatGPT, prípadne si ich upravíte podľa seba.
- **Podklady na Disku** — Na Disku Google nájdete podklady, z ktorých zručnosť čerpá, napríklad prehľad kľúčových kompetencií. Keď ich nahráte k projektu alebo zručnosti, dostanete presnejšie výstupy.

## Ako zručnosť nainštalovať

### ChatGPT

1. Stiahnite ZIP zručnosti pre ChatGPT (nerozbaľujte ho).
2. Otvorte **Plugins → Skills → Create → Upload from your computer** a vyberte ZIP.
3. Zručnosť vyvoláte v chate zavináčom, napríklad `@slovni-hodnoceni`.

Zručnosti majú platené tarify od Plus.

Vo verzii zadarmo a v tarife Go zručnosti nie sú. Vložte inštrukcie zručnosti do pokynov [projektu](/funkce/projekty), alebo použite verziu promptu. Tá sa hodí aj pre žiakov.

### Gemini

1. Stiahnite ZIP zručnosti pre Gemini.
2. V aplikácii Gemini otvorte **Viac… → Prispôsobiť → Zručnosti** (v anglickom rozhraní **Skills**) a nahrajte ZIP, priečinok alebo samotný súbor `SKILL.md` (do 100 MB).
3. Zručnosť vyvoláte zavináčom v akomkoľvek chate, napríklad `@slovni-hodnoceni`.

Zručnosti fungujú na osobných účtoch od 18 rokov so zapnutou históriou aktivity. Predplatné nepotrebujete.

Na školských účtoch (Google Workspace for Education) dostupnosť riadi správca. Overte si to u neho.

### Claude

1. Stiahnite ZIP zručnosti pre Claude (nerozbaľujte ho).
2. Otvorte **Customize → Skills**, kliknite na **+**, zvoľte **Upload a skill** a vyberte ZIP.
3. Zručnosť vyvoláte v chate lomkou, napríklad `/slovni-hodnoceni`. Claude ju vie použiť aj sám, keď napíšete napríklad „Napíš slovné hodnotenie pre žiaka 3. ročníka“.

Funguje vo všetkých tarifoch vrátane bezplatného, len musí byť zapnuté spúšťanie kódu.

Claude je pre používateľov od 18 rokov.

### Microsoft Copilot

1. Otvorte inštrukcie zručnosti v Google Docs.
2. V Copilot Chate vytvorte agenta a do jeho pokynov inštrukcie vložte. S platenou licenciou Microsoft 365 Copilot môžete namiesto toho nahrať ZIP zručnosti.
3. Agenta vyvoláte v chate zavináčom, napríklad `@Slovné hodnotenie`, alebo ho otvoríte v zozname agentov.

Agenta vytvoríte aj v bezplatnom Copilot Chate so školským alebo pracovným účtom.

Samotné zručnosti má len platená licencia Microsoft 365 Copilot: v Copilot Cowork cez **Customize → Skills → Add → Upload skill** (súbor `.md` do 1 MB alebo ZIP do 10 MB), v Agent Builderi najviac 8 zručností na agenta.

## Ako napísať vlastnú zručnosť

Zručnosť nemusíte písať od nuly. Nechajte ju vytvoriť chatbota a výsledok potom upravte.

- **Z promptu** — Vezmite prompt, ktorý sa vám osvedčil, a napíšte „Urob z tohto promptu zručnosť (skill) vo formáte SKILL.md“.
- **Z opisu** — Opíšte chatbotovi, čo má zručnosť robiť, a požiadajte ho, aby ju vytvoril. ChatGPT aj Claude na to majú vstavaného pomocníka (Skill Creator).
- **Z konverzácie** — Keď sa vám nejaká konverzácia podarí, požiadajte chatbota, aby z nej vytvoril zručnosť.

## Ako zručnosť zdieľať

Zručnosti zatiaľ nejde zdieľať verejným odkazom tak ako GPTs. Najjednoduchšie je zverejniť zručnosť ako súbor na stiahnutie, presne tak to robíme na tomto webe.

- **Claude** — ZIP pošlite kolegom. V tímových tarifoch môžete zručnosť zdieľať v rámci organizácie.
- **Gemini** — Zručnosť zdieľate z webovej verzie Gemini na stránke Zručnosti, konkrétnym ľuďom na čítanie alebo úpravy. Zdieľanie postupne dostávajú školské aj osobné účty. V škole ho môže správca vypnúť a zdieľanie mimo školy sa riadi nastavením Disku Google.
- **Copilot** — Zručnosť zdieľate len v rámci svojej organizácie.
- **ChatGPT** — Zručnosť zdieľate v rámci pracovného priestoru (Business, Enterprise, Edu).

## Máte vlastnú zručnosť?

Podeľte sa o ňu s ostatnými vyučujúcimi. Napíšte nám, alebo sa pozrite, čo už je v katalógu.
