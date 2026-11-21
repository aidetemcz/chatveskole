---
title: Sady dovedností (pluginy)
menu: Funkce
poradi: 4
popis: Co jsou pluginy v ChatGPT, Claude a Copilotu, čím se liší od dovedností a jak nainstalovat sady dovedností od AI dětem.
sablona: pluginy-pruvodce   # vlastní šablona src/pages/funkce/pluginy.astro (návrh z Claude Design, 20. 11. 2026)
aktualizovano: 2026-11-21
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

<!-- komponenta: video -->
[Průvodce instalací a využitím sady dovedností](https://www.loom.com/share/a31b377de7704e17a9e1e4b63534add3)

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

**Jak plugin vyvoláte:** napište v chatu zavináč a název pluginu, například `@Formativní hodnocení`.

### Claude

- Pluginy mají placené tarify (Pro, Max, Ultra, Team, Enterprise).
- Od září 2026 má Claude veřejný adresář pluginů.
- V týmových tarifech může správce plugin zpřístupnit celé organizaci.

**Kde je najdete:** v **Customize → Plugins → Add**. Plugin nahrajete jako soubor, nebo přidáte celý „marketplace“, tedy sadu, ze které pak instalujete jednotlivé pluginy.

### Microsoft Copilot

- Od konce listopadu 2026 najdete v menu místo tlačítka **Agenti** tlačítko **Pluginy**.
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

V chatu sadu vyvoláte zavináčem a jejím názvem, například `@Formativní hodnocení`. V Claude vyvoláte dovednosti ze sady lomítkem. Sadu můžete vyvolat i uvnitř [projektu](/funkce/projekty) a spojit tak podklady projektu s dovednostmi ze sady.

## Jak nainstalovat sadu

Postup se liší podle aplikace a tarifu.

- **Claude (placené tarify):** v **Customize → Plugins → Add marketplace** zadejte `aidetemcz/chatveskole`. Zobrazí se všechny naše sady a vyberete si, které chcete. Když dovednosti aktualizujeme, aktualizují se i vám. Sady jsme podali také do adresáře pluginů v Claude, po schválení je najdete přímo tam.
- **ChatGPT (tarify Business, Enterprise, Edu):** stáhněte ZIP u sady výše (nerozbalujte ho), otevřete **Plugins → Přidat → Nahrát archiv pluginu** a pak plugin nainstalujte. Sdílet ho můžete s kolegy v pracovním prostoru školy. Do veřejného adresáře ChatGPT jsme sady podali ke schválení.
- **Claude, Copilot Cowork (nahrání souboru):** stáhněte ZIP u sady výše a nahrajte ho.
- **ChatGPT zdarma a Go (jen z adresáře):** nainstalujte plugin z adresáře pluginů v ChatGPT, vlastní ZIP ale nahrát nejde. Naše sady tam najdete po schválení. Do té doby vložte instrukce dovednosti do [projektu](/funkce/projekty), nebo použijte prompt.
- **Gemini (pluginy nemá):** nainstalujte jednotlivé dovednosti ze sady.

## Stačí vám jedna dovednost?

V katalogu si každou dovednost stáhnete zvlášť, nebo ji zkopírujete jako prompt.
