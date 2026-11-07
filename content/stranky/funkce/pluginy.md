---
title: Pluginy
menu: Funkce
poradi: 4
popis: Co jsou pluginy v ChatGPT, Claude a Copilotu, čím se liší od skills a jak nainstalovat sady skills od AI dětem.
aktualizovano: 2026-11-07
stav: koncept
zdroje:
  - https://help.openai.com/en/articles/20001256-plugins-in-chatgpt
  - https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq
  - https://support.claude.com/en/articles/13837440-use-plugins-in-claude
  - https://claude.com/docs/plugins/overview
  - https://mc.merill.net/message/MC1484008
---

# Pluginy

Plugin je **balíček**, který do chatbota nainstalujete jedním krokem. Může obsahovat několik [skills](/funkce/skills), napojení na další aplikace ([konektory](/funkce/konektory)) a další nástroje. Zatímco skill naučí chatbota jeden úkol, plugin mu přidá celou sadu dovedností pro určitou oblast — třeba vše, co potřebujete k formativnímu hodnocení.

## Pluginy v jednotlivých nástrojích

### ChatGPT

- Pluginy jsou v ChatGPT od července 2026 a nahrazují vlastní GPTs. Adresář pluginů vidí všechny tarify, co si můžete nainstalovat, záleží na tarifu a regionu.
- Plugin zavoláte zavináčem, například `@Formativní hodnocení`.
- **Máte vlastní GPT?** V *My GPTs* zvolte **Migrate to plugin**. Pokyny se změní na skill a soubory na podklady. Nepřenese se výběr modelu, vlastní akce ani sdílení. Nový plugin je soukromý a původní GPT zůstane jen pro čtení. GPTs přestanou fungovat 11. 12. 2026.
- **Sdílení:** plugin sdílíte jen uvnitř pracovního prostoru (tarify Business, Enterprise, Edu). Do veřejného adresáře se dostane až po schválení OpenAI.

### Claude

- Pluginy mají placené tarify (Pro, Max, Ultra, Team, Enterprise).
- Instalace: **Customize → Plugins → Add**. Plugin nahrajete jako soubor, nebo přidáte celý „marketplace“ — repozitář na GitHubu, ze kterého pak instalujete jednotlivé pluginy.
- Od září 2026 má Claude veřejný adresář pluginů.
- V týmových tarifech může správce plugin zpřístupnit celé organizaci.

### Microsoft Copilot

- Do konce listopadu 2026 nahradí v menu tlačítko **Agenti** tlačítko **Pluginy**. Pluginy balí agenty, skills a konektory.
- Copilot Cowork umí nainstalovat i balíčky připravené pro Claude.
- Plné využití vyžaduje licenci Microsoft 365 Copilot.

### Gemini

Gemini pluginy nemá. Nejblíž jsou **Připojené aplikace** (Gmail, Disk, Kalendář, YouTube a aplikace třetích stran) a [skills](/funkce/skills).

## Sady skills od AI dětem

Naše skills jsou rozdělené do pěti sad. Každou sadu připravujeme i jako plugin.

<!-- komponenta: karty sad z content/sady.yaml, u každé: seznam skills, tlačítka Stáhnout plugin (ZIP), Přidat do Claude (marketplace), odkaz na ChatGPT adresář, až bude schválený -->

### Jak nainstalovat

- **Claude (placené tarify):** v **Customize → Plugins → Add marketplace** zadejte `aidetemcz/chatveskole`. Zobrazí se všechny naše sady a vyberete si, které chcete. Výhoda: když skills aktualizujeme, aktualizují se i vám.
- **Claude, Copilot Cowork:** stáhněte ZIP pluginu a nahrajte ho.
- **ChatGPT:** plugin AI dětem podáváme ke schválení do veřejného adresáře. Do té doby použijte jednotlivé skills (Business, Enterprise, Edu), [projekt](/funkce/projekty) se systémovým promptem, nebo prompt.
- **Gemini:** pluginy nemá — nainstalujte jednotlivé skills ze sady.

## Plugin, skill, nebo prompt?

| Chci… | Použijte |
|---|---|
| vyzkoušet, jestli mi to pomůže | prompt |
| jeden úkol, který dělám často | skill |
| celou oblast práce (hodnocení, vedení školy) a mít ji vždy aktuální | plugin |
| aby to fungovalo i v bezplatné verzi nebo pro žáky | prompt |
