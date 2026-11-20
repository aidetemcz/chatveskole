---
title: Prompty
menu: Funkce
poradi: 2
popis: Co je prompt, jak ho napsat, aby chatbot odpověděl dobře, a kdy místo promptu použít dovednost. Na konci odkaz na katalog ověřených promptů.
sablona: prompty-pruvodce   # vlastní šablona src/pages/funkce/prompty/index.astro (návrh z Claude Design, 20. 11. 2026)
tlacitko: { text: Přejít na Katalog promptů, href: /prompty }
aktualizovano: 2026-11-20
stav: koncept
odkazy:
  - { text: Dovednosti (skills), href: /funkce/skills }
---

Prompt je zadání, které chatbotu napíšete: otázka, pokyn, popis úkolu. Čím jasněji a konkrétněji napíšete, co chcete, tím lépe chatbot pochopí, co od něj čekáte.

## Chatbot jako miliony expertů

Máte k dispozici odborníky z jakéhokoli oboru, od zahradníka po fyzika. Aby vám ale pomohli, potřebují kontext. Stačí změnit jedno slovo a dostanete úplně jinou odpověď. Zkuste oba prompty a porovnejte.

> Jsi sečtělý akademik. Vymysli mi program na odpoledne.

> Jsi rozpustilá holčička. Vymysli mi program na odpoledne.

## Sedm technik, jak dát chatbotu kontext

Začněte holým zadáním a klikáním přidávejte techniky, nebo si nechte prompt poskládat postupně. Každá barva v promptu odpovídá jedné technice.

<!-- komponenta: skládačka promptu (data/skladacka-promptu.yaml) -->

Prompt nemusí obsahovat všech sedm technik. Vyberte ty, které pro váš úkol dávají smysl.

## Tři tipy navíc

- **Nechte se doptávat.** Přidejte na konec: „Než začneš, zeptej se mě na všechno, co potřebuješ vědět.“
- **Pokračujte v konverzaci.** První odpověď je návrh. Řekněte, co upravit: „Zkrať to na polovinu“, „Přidej otázky k diskuzi“.
- **Přiložte podklady.** Pracovní list, ŠVP, fotku tabule. Nikdy ale ne jména žáků ani jiné osobní údaje, místo nich iniciály.

## Prompt, nebo dovednost?

Začněte promptem. Když ho používáte často, uložte si ho jako dovednost.

| | Prompt | Dovednost |
|---|---|---|
| Co to je | Text, který vložíte do chatu | Instrukce zabalené do funkce, kterou vyvoláte přes lomítko nebo zavináč |
| Kde funguje | Všude, i v bezplatných verzích a pro žáky | V placených i některých bezplatných verzích, většinou jen pro dospělé |
| Kdy se hodí | Jednorázový úkol, výuka se žáky, vyzkoušení | Úkol, který opakujete: hodnocení, přípravy, zprávy rodičům |

## Nechcete začínat od nuly?

V katalogu najdete ověřené prompty pro vyučující, vedení škol i žáky. Zkopírujte prompt a doplňte údaje v hranatých závorkách.
