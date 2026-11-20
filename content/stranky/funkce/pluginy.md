---
title: Sady dovedností (pluginy)
menu: Funkce
poradi: 4
popis: Co jsou pluginy v ChatGPT, Claude a Copilotu, čím se liší od dovedností a jak nainstalovat sady dovedností od AI dětem.
sablona: pluginy-pruvodce   # vlastní šablona src/pages/funkce/pluginy.astro (návrh z Claude Design, 20. 11. 2026)
aktualizovano: 2026-11-20
stav: koncept
zdroje:
  - https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq
  - https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - https://claude.com/docs/plugins/overview
  - https://mc.merill.net/message/MC1484008
odkazy:
  - { text: Katalog dovedností, href: /skills }
  - { text: Konektory, href: /funkce/konektory }
---

# Sady dovedností (pluginy)

Sada dovedností (plugin) je **balíček**, který do chatbota nainstalujete jedním krokem. Může obsahovat několik [dovedností](/funkce/skills), napojení na další aplikace ([konektory](/funkce/konektory)) a další nástroje. Zatímco dovednost naučí chatbota jeden úkol, plugin mu přidá celou sadu dovedností pro určitou oblast — třeba vše, co potřebujete k formativnímu hodnocení.

## Prompt, dovednost, nebo sada dovedností?

Všechny tři cesty vedou ke stejnému cíli. Liší se tím, kolik práce vám ušetří a kde fungují.

- **Prompt** — Použijte ho, když chcete něco **vyzkoušet**, nebo když to má fungovat i v bezplatné verzi a pro žáky.
- **Dovednost** — Použijte ji na **jeden úkol, který děláte často**, třeba slovní hodnocení nebo pracovní listy.
- **Sada dovedností (plugin)** — Použijte ji, když chcete mít **celou oblast práce** (hodnocení, vedení školy) pohromadě a vždy aktuální.

## Pluginy v jednotlivých nástrojích

### ChatGPT

- Pluginy jsou v ChatGPT od července 2026 a nahrazují vlastní GPTs.
- Adresář pluginů vidí všechny tarify. Co si můžete nainstalovat, záleží na tarifu a regionu.
- Plugin sdílíte jen uvnitř pracovního prostoru (tarify Business, Enterprise, Edu). Do veřejného adresáře se dostane až po schválení OpenAI.

**Jak plugin zavoláte:** napište v chatu zavináč a název pluginu, například `@Formativní hodnocení`.

### Claude

- Pluginy mají placené tarify (Pro, Max, Ultra, Team, Enterprise).
- Od září 2026 má Claude veřejný adresář pluginů.
- V týmových tarifech může správce plugin zpřístupnit celé organizaci.

**Kde je najdete:** v **Customize → Plugins → Add**. Plugin nahrajete jako soubor, nebo přidáte celý „marketplace“, tedy sadu, ze které pak instalujete jednotlivé pluginy.

### Microsoft Copilot

- Do konce listopadu 2026 nahradí v menu tlačítko **Agenti** tlačítko **Pluginy**.
- Pluginy balí agenty, dovednosti a konektory.
- Copilot Cowork umí nainstalovat i balíčky připravené pro Claude.

**Co potřebujete:** plné využití vyžaduje placenou licenci Microsoft 365 Copilot.

### Gemini

- Gemini pluginy nemá.
- Nejblíž jsou **Připojené aplikace**: Gmail, Disk, Kalendář, YouTube a aplikace třetích stran.

**Co použít místo pluginu:** nainstalujte jednotlivé [dovednosti](/funkce/skills).

## Máte vlastní GPT?

**GPTs přestanou fungovat 11. 12. 2026.**

V ChatGPT ho převedete na plugin jedním tlačítkem: v *My GPTs* zvolte **Migrate to plugin**. Nový plugin je soukromý a původní GPT zůstane jen pro čtení.

### Přenese se

- pokyny (změní se na dovednost)
- soubory (změní se na podklady)

### Nepřenese se

- výběr modelu
- vlastní akce
- sdílení

## Sady dovedností od AI dětem

Naše dovednosti jsou rozdělené do pěti sad. Každou sadu si můžete nainstalovat jako plugin, nebo z ní vybrat jednotlivé dovednosti.

## Jak nainstalovat sadu

Postup se liší podle aplikace a tarifu.

- **Claude (placené tarify):** v **Customize → Plugins → Add marketplace** zadejte `aidetemcz/chatveskole`. Zobrazí se všechny naše sady a vyberete si, které chcete. Když dovednosti aktualizujeme, aktualizují se i vám.
- **Claude, Copilot Cowork (nahrání souboru):** stáhněte ZIP pluginu u sady výše a nahrajte ho.
- **ChatGPT (čeká na schválení):** plugin AI dětem podáváme ke schválení do veřejného adresáře. Do té doby použijte jednotlivé dovednosti (placené tarify od Plus), [projekt](/funkce/projekty) s instrukcemi dovednosti, nebo prompt.
- **Gemini (pluginy nemá):** nainstalujte jednotlivé dovednosti ze sady.

## Stačí vám jedna dovednost?

V katalogu si každou dovednost stáhnete zvlášť, nebo ji zkopírujete jako prompt.
