# Struktura mapy stávajícího procesu

Mapa odpovídá hlavičce a části „Stávající proces“ na kartě procesu z metodiky AI akcelerátoru (https://aidetem.cz/ai-akcelerator-karta-procesu/). Další části karty (návrh nového procesu, technologie, co se mění) se vyplňují až v dalších fázích a nejsou úkolem tohoto skillu.

## 1. Hlavička procesu

Vyplň přesně těchto sedm polí. Když informaci nejde z přepisu určit, napiš „neuvedeno“ nebo „nejasné – doplnit otázkou níže“.

| Pole | Obsah |
|---|---|
| Název procesu | krátký popisný název odvozený z přepisu |
| Zapojení aktéři | výčet rolí, které se procesu účastní |
| Vlastník procesu | role odpovědná za proces jako celek, nebo „neuvedeno – doporučeno doplnit“ |
| Používané nástroje a software | systémy, dokumenty a nástroje použité v procesu |
| Co procesu předchází | předchozí proces nebo stav, pokud je z přepisu patrný |
| Co proces spouští | konkrétní spouštěcí událost |
| Čím proces končí | stav nebo událost, kterou proces končí, a hlavní výstup |

## 2. Kroky procesu jako karty

Místo tabulky vytvoř řadu krátkých karet v pořadí, v jakém proces skutečně probíhá. Každá karta odpovídá jednomu lístečku na nástěnce.

Krok:

```
P01 | [Aktér]: [činnost – sloveso + předmět]
```

Rozhodovací bod (samostatná karta):

```
D01 ❓ [Otázka]
   → ANO: pokračuje P0x
   → NE: [popis, nebo „Další postup z přepisu není znám.“]
```

Štítky (přidej ke kartě, jen když se hodí):
- ⏳ čekání
- 🔁 ruční přepis / dvojí práce
- 📎 předávka (jinému aktérovi nebo systému)
- ⚠️ pozorování z praxe (bolestivé místo)
- ❓ nejasné – ověřit

Pravidla:
- Karta je krátká, vejde se na lísteček. Delší kontext (přesné znění výjimky) patří do doplňkových sekcí.
- Úroveň jistoty (DOLOŽENO / PRAVDĚPODOBNÉ / NEJASNÉ) uveď u karty, kde to není zřejmé.
- Když kroky probíhají souběžně nebo se aktéři překrývají, poznamenej to u karty slovy („souběžně s P04“).
- Doložený čas nebo četnost zapiš ke kartě („trvá asi 20 minut – uvedeno v přepisu“). Odhady nedoplňuj.

## Doplňkové sekce (pod kartami)

Nejsou součástí lístečků, ale doplňují detail, který se na ně nevejde, a pomáhají mapu ověřit s týmem.

### 3. Předávky

| Od koho | Komu | Co se předává | Jakým způsobem |
|---|---|---|---|

### 4. Pozorování z praxe

Věcný výčet toho, co je z přepisu patrné: ruční přepis, dvojí evidence, čekání, více nepropojených systémů, nejasná odpovědnost, závislost na jednom člověku. **Bez doporučení a bez návrhu řešení.**

### 5. Nejasnosti a doplňující otázky

Ke každé nejasnosti konkrétní otázka na aktéra procesu. Nejdřív ty, jejichž odpověď by mohla změnit mapu nebo pořadí kroků (kdo přebírá práci po odeslání, co se stane při zamítnutí, kdo je skutečný vlastník). Patří sem i návrh, s kým dalším proces ověřit, když přepis zachycuje jen jeden pohled.

Příklad:
- **Není jasné:** Kdo kontroluje žádost po jejím odeslání.
- **Doplňující otázka:** „Kdo žádost převezme poté, co ji odešlete?“
