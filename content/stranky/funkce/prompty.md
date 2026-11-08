---
title: Prompty
menu: Funkce
poradi: 2
popis: Co je prompt, jak ho napsat, aby chatbot odpověděl dobře, a kdy místo promptu použít skill. Na konci odkaz na katalog ověřených promptů.
tlacitko: { text: Přejít na Katalog promptů, href: /prompty }
aktualizovano: 2026-11-08
stav: koncept
---

## Co je prompt

Prompt je zadání, které chatbotu napíšete: otázka, pokyn, popis úkolu. Může to být jedno slovo, nebo stránka textu s přiloženými soubory. Čím jasněji a konkrétněji napíšete, co chcete, tím lépe chatbot pochopí, co od něj čekáte.

## Jak napsat dobrý prompt

### Chatbot jako miliony expertů

Představte si, že máte k dispozici odborníky z jakéhokoli oboru — od zahradníka po fyzika, od didaktika po právníka. Aby vám ale mohli opravdu pomoct, potřebují kontext. Zkuste porovnat:

> Jsi sečtělý akademik. Vymysli mi program na odpoledne.

> Jsi rozpustilá holčička. Vymysli mi program na odpoledne.

### Sedm technik, jak dát chatbotu kontext

Ukážeme je na jednom příkladu, který postupně vylepšujeme.

**Výchozí prompt:**

> Napiš shrnutí českého národního obrození.

#### 1. Role

Řekněte chatbotu, v jaké roli má odpovídat.

> **Jsi expert na české dějiny a empatický učitel se smyslem pro humor.** Napiš shrnutí českého národního obrození.

#### 2. Cílová skupina a tón

Pro koho text je a jakým stylem má být napsaný.

> … Napiš **neformální** shrnutí českého národního obrození **pro žáky ve věku 14 let**.

#### 3. Formát

Esej, tabulka, osnova, rozhovor, kvíz, podklady pro prezentaci…

> … **ve formátu podkladů pro prezentaci o pěti snímcích**.

#### 4. Cíl

K čemu výstup poslouží. Chatbot pak sám vybere, co je podstatné.

> … **Cílem je, aby žáci pochopili, proč bylo národní obrození tak důležité pro českou kulturu a jazyk.**

#### 5. Délka

> … **Na každý snímek nejvýš tři krátké body.**

#### 6. Příklad

Máte-li konkrétní představu, ukažte ji.

> Vygeneruj text o každodenním životě, ve kterém slovesa v minulém čase nahradíš mezerou ___ a za ni do závorky napíšeš infinitiv. **Příklad: Otec ___ (vejít) do školy.**

#### 7. Omezení

Co ve výstupu být nemá.

> … **Nepoužívej letopočty, které se žáci nemusí učit nazpaměť, a vynech odborné termíny bez vysvětlení.**

**Výsledný prompt:**

> Jsi expert na české dějiny a empatický učitel se smyslem pro humor. Napiš neformální shrnutí českého národního obrození pro žáky ve věku 14 let ve formátu podkladů pro prezentaci o pěti snímcích. Cílem je, aby žáci pochopili, proč bylo národní obrození tak důležité pro českou kulturu a jazyk. Na každý snímek nejvýš tři krátké body. Nepoužívej letopočty, které se žáci nemusí učit nazpaměť, a vynech odborné termíny bez vysvětlení.

### Tři tipy navíc

- **Nechte se doptávat.** Přidejte na konec: „Než začneš, zeptej se mě na všechno, co potřebuješ vědět.“
- **Pokračujte v konverzaci.** První odpověď je návrh. Řekněte, co upravit: „Zkrať to na polovinu“, „Přidej otázky k diskuzi“, „Udělej verzi pro žáky bez správných odpovědí.“
- **Přiložte podklady.** Pracovní list, ŠVP, fotku tabule. Nikdy ale nevkládejte jména žáků ani jiné osobní údaje — místo nich používejte iniciály nebo přezdívky.

## Prompt, nebo skill?

| | Prompt | Skill |
|---|---|---|
| Co to je | Text, který vložíte do chatu | Uložený návod (soubor SKILL.md), který si chatbot sám použije, když ho potřebuje |
| Kde funguje | Všude, i v bezplatných verzích a pro žáky | V Claude, Gemini, Copilotu a ChatGPT (v pluginu); většinou jen pro dospělé |
| Kdy se hodí | Jednorázový úkol, výuka se žáky, vyzkoušení | Úkol, který opakujete — hodnocení, přípravy, zprávy rodičům |

Ke každému [skillu](/skills) na tomto webu najdete i verzi promptu. Začněte promptem, a když se vám osvědčí, nainstalujte si skill.

## Katalog promptů

V katalogu najdete ověřené prompty pro učitele, vedení škol i žáky. Zkopírujte prompt do jakéhokoli chatbota a doplňte údaje v hranatých závorkách.
