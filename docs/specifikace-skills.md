# Specifikace: jak vypadá skill na chatveskole.cz

Tento soubor je závazný pro každého, kdo píše nebo upravuje skill v `content/skills/` (člověk, Claude, Claude Code).

## Princip

Jeden zdroj, tři podoby:

1. **Skill** (`SKILL.md` + `references/`) — balíček pro Claude, Gemini, Copilot a ChatGPT (uvnitř pluginu). Formát Agent Skills.
2. **Prompt** (`prompt.md`) — zkrácená verze ke zkopírování do jakéhokoli chatbota, i zdarma a i pro učitele, kteří skills ještě neznají.
3. **Systémový prompt v Google Docs** — jeden dokument na skill ve sdílené složce AI dětem, se stejným obsahem jako `SKILL.md`; učitelé si ho otevřou nebo stáhnou (pro projekty v ChatGPT, Copilot agenty, vlastní úpravy). Znalostní soubory zůstávají na Google Disku. Viz `docs/architektura.md`, sekce „Google Docs“.

Web ukazuje u každého skillu vždy obě cesty vedle sebe: „Zkopírovat jako prompt“ a „Stáhnout skill“. Tím učitele postupně zvykáme na skills, ale nikoho neodřízneme.

## Struktura složky

```
content/skills/<slug>/
├── SKILL.md          # povinné
├── prompt.md         # povinné
├── meta.yaml         # povinné (metadata pro web)
└── references/       # volitelné, podrobnosti, ze kterých skill čerpá
    └── <tema>.md
```

`<slug>` = malá písmena bez diakritiky, slova oddělená pomlčkou, max. 64 znaků, shodné s `name` v SKILL.md.

## SKILL.md

```markdown
---
name: vzdelavaci-cile
description: Pomáhá učitelům ZŠ a SŠ formulovat kompetenčně orientované vzdělávací cíle pro formativní hodnocení podle RVP. Použij, když učitel chce formulovat, upravit nebo zkontrolovat výukový cíl, cíl lekce nebo cíl pro žáka se SVP.
---

# Vzdělávací cíle

(1–3 věty: k čemu skill je a pro koho.)

## Postup
## Na co se zeptat
## Výstup
## Zásady
## Příklady            (volitelné, krátce)
## Zdroje a autorství
```

Pravidla:
- Frontmatter obsahuje jen `name` a `description`. Nic dalšího (metadata patří do `meta.yaml`).
- `description` česky, ve 3. osobě, max. 1024 znaků (cíl: 200–400). Musí říct CO skill dělá a KDY ho použít (typické formulace učitele). Bez úhlových závorek < >.
- Tělo česky, věcně, max. cca 300 řádků. Podrobnosti (škály, příklady, rámce, dlouhé seznamy) patří do `references/` a tělo na ně odkazuje relativní cestou, např. „Podrobná pravidla jsou v `references/jctu-skala.md`.“
- Skill může mít víc **režimů** (např. vytvořit / zkontrolovat / převést). Na začátku `## Postup` je krátký rozcestník: podle čeho skill pozná, který režim uživatel chce, a když to není jasné, jednou větou se zeptá.
- Ptej se jen na chybějící údaje, maximálně na 3–5 najednou, v číslovaném seznamu. Pokud uživatel dodá podklady (soubor, text), nevyptávej se na to, co v nich je.
- Ochrana osobních údajů: nikdy nežádej jména žáků; pracuj s iniciálami nebo přezdívkou. Pokud uživatel jméno uvede, nepoužívej ho dál, než je nutné. Neukládej a nevyžaduj citlivé údaje (diagnózy jen v míře nutné pro úpravu materiálu, bez identifikace dítěte).
- Odpovědnost zůstává učiteli: výstup je návrh k úpravě. Skill to neopakuje v každé odpovědi, stačí jednou na začátku nebo ve výstupu nenápadnou poznámkou.
- Jazyk výstupů: spisovná čeština, srozumitelná, bez anglicismů, genderově citlivá tam, kde to dává smysl (žák/žákyně jen u oslovení, jinak přirozeně). Žádné obecné fráze typu „Skvělá otázka!“.
- Nepoužívej formulace vázané na konkrétní platformu („nahraj do GPT“, „v Gemu“). Skill musí fungovat v Claude, Gemini, Copilotu i ChatGPT.
- Původní slova jako „mladý jedinec“ (obcházka pravidel GPT Store) nahraď přirozeným „žák“.
- Pokud skill vychází z metodiky (Vysvědčení jinak, NPI, ADKAR…), uveď ji v `## Zdroje a autorství` včetně odkazu a autorů původního asistenta/promptu.

## prompt.md

Verze ke zkopírování. Musí fungovat sama o sobě, bez souborů a bez skills.

```markdown
---
title: Formulace vzdělávacího cíle
typ: prompt
---

## Základní prompt

​```text
Vystupuj jako … 
Předmět: [například informatika]
…
Nejdřív se mě zeptej na údaje, které chybí.
​```

## Varianta: Cíl pro žáka se SVP      (volitelné, max. 3 varianty)

​```text
…
​```

**Tip:** (1–2 věty, jak s výstupem pracovat dál, případně odkaz na navazující skill)
```

Pravidla:
- Každý prompt v bloku ```text … ``` (web z něj udělá tlačítko Kopírovat).
- Údaje k vyplnění v hranatých závorkách s příkladem: `[například 7. třída ZŠ]`.
- Délka jednoho promptu max. cca 2 500 znaků.
- Zachovej to nejlepší z původních promptů na chatveskole.cz, ale oprav překlepy a zastaralé zmínky (ChatGPT 3.5, „nahraď výsledky znaky ____ v dalším promptu“ apod.).

## meta.yaml

```yaml
title: Vzdělávací cíle
slug: vzdelavaci-cile
kratky_popis: Formuluje kompetenčně orientovaný cíl pro formativní hodnocení podle RVP.   # max 140 znaků
pro_koho: [ucitele]            # ucitele | vedeni | zaci-18plus
sady: [formativni-hodnoceni]   # viz content/sady.yaml
stitky: [formativní hodnocení, RVP, cíle]
rezimy:                        # jen pokud má skill víc režimů
  - Formulace cíle
  - Cíl pro žáka se SVP
puvodni_obsah:                 # z čeho skill vznikl (původní prompty zůstávají v databázi promptů; přesměrování řeší migrace/redirects.json)
  - url: https://chatveskole.cz/databaze-promptu/formulace-vyukoveho-cile/
    typ: prompt
  - url: https://chatveskole.cz/databaze-promptu/formulace-vyukoveho-cile-2/
    typ: asistent
puvodni_asistenti:             # odkazy, které přestanou fungovat (GPTs 11. 12. 2026, Gems postupně)
  gpt: https://chatgpt.com/g/...                       # řetězec, nebo seznam, když skill slučuje víc asistentů
  gem: https://gemini.google.com/gem/...
  systemovy_prompt: https://docs.google.com/document/d/...
google_doc: https://docs.google.com/document/d/...   # NOVÝ dokument se systémovým promptem skillu pro učitele (doplní se po nahrání na Disk)
google_slozka: https://drive.google.com/drive/folders/...   # složka skillu na Disku: systémový prompt + Data
autori: [Eva Nečasová (AI dětem)]
metodika:
  - nazev: Vysvědčení jinak (PdF MU)
    url: https://vysvedcenijinak.ped.muni.cz/
znalosti: [klicove-kompetence.md]   # klíče z content/znalosti/znalosti.yaml — web je nabídne ke stažení z Google Disku
vek: dospělí (skills jsou v Gemini a Claude 18+)
stav: koncept                  # koncept | ke-kontrole | hotovo
aktualizovano: 2026-11-07
```

## references/

- Markdown, jeden soubor = jedno téma (škála, typy cvičení, rámec ADKAR…).
- Krátké a věcné. Dlouhé oficiální dokumenty (RVP, průřezová témata) nekopíruj celé — leží na Google Disku, jsou v `content/znalosti/znalosti.yaml` a skill na ně odkazuje přes `meta.yaml → znalosti`.

## Kontrolní seznam před označením „hotovo“

- [ ] `name` = název složky, `description` říká co a kdy
- [ ] skill otestován aspoň ve dvou nástrojích (Claude + Gemini nebo ChatGPT)
- [ ] prompt.md otestován v bezplatné verzi chatbota
- [ ] nikde se nežádá jméno žáka
- [ ] uvedeni autoři a metodika
- [ ] `puvodni_obsah` obsahuje všechny staré URL, které se do skillu sloučily
