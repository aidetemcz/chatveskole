---
title: Sady zručností (pluginy)
menu: Funkcie
poradi: 4
popis: Čo sú pluginy v ChatGPT, Claude a Copilote, čím sa líšia od zručností a ako nainštalovať sady zručností od AI dětem.
sablona: pluginy-pruvodce   # vlastní šablona src/pages/funkce/pluginy.astro (návrh z Claude Design, 20. 11. 2026)
aktualizovano: 2026-11-21
stav: ke-kontrole   # názvy položek v rozhraní (Gemini: Pripojené aplikácie, ChatGPT: Pridať → Nahrať archív pluginu) neověřeny ve slovenském rozhraní
zdroje:
  - https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq
  - https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - https://claude.com/docs/plugins/overview
  - https://mc.merill.net/message/MC1484008
odkazy:
  - { text: Katalóg zručností, href: /skills }
  - { text: Konektory, href: /funkce/konektory }
---

# Sady zručností (pluginy)

Sada zručností (plugin) je **balík**, ktorý do chatbota nainštalujete jedným krokom. Môže obsahovať niekoľko [zručností](/funkce/skills), prepojenie s ďalšími aplikáciami ([konektory](/funkce/konektory)) a ďalšie nástroje. Kým zručnosť naučí chatbota jednu úlohu, plugin mu pridá celú sadu zručností pre určitú oblasť — napríklad všetko, čo potrebujete na formatívne hodnotenie.

<!-- komponenta: video -->
[Sprievodca inštaláciou a využitím sady zručností (video v češtine)](https://www.loom.com/share/a31b377de7704e17a9e1e4b63534add3)

## Prompt, zručnosť, alebo sada zručností?

Všetky tri cesty vedú k rovnakému cieľu. Líšia sa tým, koľko práce vám ušetria a kde fungujú.

- **Prompt** — Použite ho, keď chcete niečo **vyskúšať**, alebo keď to má fungovať aj v bezplatnej verzii a pre žiakov.
- **Zručnosť** — Použite ju na **jednu úlohu, ktorú robíte často**, napríklad slovné hodnotenie alebo pracovné listy.
- **Sada zručností (plugin)** — Použite ju, keď chcete mať **celú oblasť práce** (hodnotenie, vedenie školy) pohromade a vždy aktuálnu.

## Pluginy v jednotlivých nástrojoch

### ChatGPT

- Pluginy sú v ChatGPT od júla 2026 a nahrádzajú vlastné GPTs.
- Adresár pluginov vidia všetky tarify. Čo si môžete nainštalovať, závisí od tarifu a regiónu.
- Plugin zdieľate len v rámci pracovného priestoru (tarify Business, Enterprise, Edu). Do verejného adresára sa dostane až po schválení OpenAI.

**Ako plugin vyvoláte:** napíšte v chate zavináč a názov pluginu, napríklad `@Formativní hodnocení` (naše sady majú zatiaľ české názvy).

### Claude

- Pluginy majú platené tarify (Pro, Max, Ultra, Team, Enterprise).
- Od septembra 2026 má Claude verejný adresár pluginov.
- V tímových tarifoch môže správca plugin sprístupniť celej organizácii.

**Kde ich nájdete:** v **Customize → Plugins → Add**. Plugin nahráte ako súbor, alebo pridáte celý „marketplace“, teda sadu, z ktorej potom inštalujete jednotlivé pluginy.

### Microsoft Copilot

- Od konca novembra 2026 nájdete v menu namiesto tlačidla **Agenti** tlačidlo **Pluginy**.
- Pluginy balia agentov, zručnosti a konektory.
- Copilot Cowork vie nainštalovať aj balíky pripravené pre Claude.

**Čo potrebujete:** plné využitie vyžaduje platenú licenciu Microsoft 365 Copilot.

### Gemini

- Gemini pluginy nemá.
- Najbližšie sú **Pripojené aplikácie**: Gmail, Disk, Kalendár, YouTube a aplikácie tretích strán.

**Čo použiť namiesto pluginu:** nainštalujte jednotlivé [zručnosti](/funkce/skills).

## Sady zručností od AI dětem

Naše zručnosti sú rozdelené do piatich sád. Každú sadu si môžete nainštalovať ako plugin, alebo z nej vybrať jednotlivé zručnosti.

V chate sadu vyvoláte zavináčom a jej názvom, napríklad `@Formativní hodnocení`. V Claude vyvoláte zručnosti zo sady lomkou. Sadu môžete vyvolať aj vnútri [projektu](/funkce/projekty) a spojiť tak podklady projektu so zručnosťami zo sady.

## Ako nainštalovať sadu

Postup sa líši podľa aplikácie a tarifu.

- **Claude (platené tarify):** v **Customize → Plugins → Add marketplace** zadajte `aidetemcz/chatveskole`. Zobrazia sa všetky naše sady a vyberiete si, ktoré chcete. Keď zručnosti aktualizujeme, aktualizujú sa aj vám. Sady sme podali aj do adresára pluginov v Claude, po schválení ich nájdete priamo tam.
- **ChatGPT (tarify Business, Enterprise, Edu):** stiahnite ZIP pri sade vyššie (nerozbaľujte ho), otvorte **Plugins → Pridať → Nahrať archív pluginu** a potom plugin nainštalujte. Zdieľať ho môžete s kolegami v pracovnom priestore školy. Do verejného adresára ChatGPT sme sady podali na schválenie.
- **Claude, Copilot Cowork (nahranie súboru):** stiahnite ZIP pri sade vyššie a nahrajte ho.
- **ChatGPT zadarmo a Go (len z adresára):** nainštalujte plugin z adresára pluginov v ChatGPT, vlastný ZIP však nahrať nejde. Naše sady tam nájdete po schválení. Dovtedy vložte inštrukcie zručnosti do [projektu](/funkce/projekty), alebo použite prompt.
- **Gemini (pluginy nemá):** nainštalujte jednotlivé zručnosti zo sady.

## Stačí vám jedna zručnosť?

V katalógu si každú zručnosť stiahnete zvlášť, alebo ju skopírujete ako prompt.
