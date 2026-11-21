---
title: Dovednosti (skills)
menu: Funkce
poradi: 3
popis: Co jsou dovednosti (skills), jak je nainstalovat do Claude, Gemini, Copilotu a ChatGPT a jak napsat vlastní. Náhrada za GPTs a Gems.
sablona: dovednosti-pruvodce   # vlastní šablona src/pages/funkce/skills.astro (návrh z Claude Design, 20. 11. 2026)
tlacitko: { text: Katalog dovedností, href: /skills }
aktualizovano: 2026-11-21
stav: koncept
zdroje:
  - https://agentskills.io/specification
  - https://support.claude.com/en/articles/12512180-use-skills-in-claude
  - https://support.google.com/gemini/answer/17094296
  - https://support.google.com/gemini/answer/18560919
  - https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize
  - https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills
  - https://help.openai.com/en/articles/20001066-skills-in-chatgpt
odkazy:
  - { text: Sady dovedností (pluginy), href: /funkce/pluginy }
---

# Dovednosti (skills)

Dovednost je složka s **instrukcemi a podklady pro úkol, který děláte často**. Vytvoříte ji jednou a pak ji v chatu vyvoláte zavináčem nebo lomítkem.

Dovednosti nahrazují GPTs a Gems. Stejnou dovednost nahrajete do Claude, Gemini, ChatGPT i Copilotu, ne každý tarif je ale má. Kde je nemáte, použijte dovednost jako prompt.

<!-- komponenta: video -->
[Průvodce instalací a využitím dovednosti](https://www.loom.com/share/14a4cf1510e6458a82058811435b7d59)

## Z čeho se dovednost skládá

Dovednost si můžete představit jako složku, která obsahuje instrukce a volitelně soubory, ze kterých čerpá. Můžete si ji vytvořit sami nebo požádat chatbota, ať ji vytvoří za vás.

- **Název a popis** — Podle popisu chatbot pozná, kdy dovednost použít.
- **Postup** — Na co se zeptat, jak pracovat, jak má vypadat výstup.
- **Podklady** — Mohou to být texty, tabulky i obrázky.

## Dovednosti z tohoto webu

Všechny naše dřívější AI asistenty jsme převedli na dovednosti a přidali k nim to nejlepší z databáze promptů. Původní prompty zůstávají v [katalogu promptů](/prompty). U každé dovednosti najdete čtyři cesty, jak ji použít:

- **Zkopírovat jako prompt** — Prompt vložíte do jakéhokoli chatbota a funguje i v bezplatné verzi.
- **Stáhnout dovednost** — Stáhnete si ZIP pro Claude, Gemini nebo ChatGPT a nahrajete ho do chatbota. Pro Copilot si z instrukcí vytvoříte agenta.
- **Instrukce** — Instrukce dovednosti otevřete v Google Docs. Vložíte je do agenta v Copilotu nebo do projektu v ChatGPT, případně si je upravíte podle sebe.
- **Znalosti na Disku** — Na Google Disku najdete podklady, ze kterých dovednost čerpá, například klíčové kompetence z RVP. Když je nahrajete k projektu nebo dovednosti, dostanete přesnější výstupy.

## Jak dovednost nainstalovat

### ChatGPT

1. Stáhněte ZIP dovednosti pro ChatGPT (nerozbalujte ho).
2. Otevřete **Plugins → Skills → Create → Upload from your computer** a vyberte ZIP.
3. Dovednost vyvoláte v chatu zavináčem, například `@slovni-hodnoceni`.

Dovednosti mají placené tarify od Plus.

Ve verzi zdarma a v tarifu Go dovednosti nejsou. Vložte instrukce dovednosti do pokynů [projektu](/funkce/projekty), nebo použijte verzi promptu. Ta se hodí i pro žáky.

### Gemini

1. Stáhněte ZIP dovednosti pro Gemini.
2. V aplikaci Gemini otevřete **Více… → Přizpůsobit → Dovednosti** a nahrajte ZIP, složku nebo samotný soubor `SKILL.md` (do 100 MB).
3. Dovednost vyvoláte zavináčem v jakémkoli chatu, například `@slovni-hodnoceni`.

Dovednosti fungují na osobních účtech od 18 let se zapnutou historií aktivity. Předplatné nepotřebujete.

Na školních účtech (Google Workspace for Education) dostupnost řídí správce. Ověřte to u něj.

### Claude

1. Stáhněte ZIP dovednosti pro Claude (nerozbalujte ho).
2. Otevřete **Customize → Skills**, klikněte na **+**, zvolte **Upload a skill** a vyberte ZIP.
3. Dovednost vyvoláte v chatu lomítkem, například `/slovni-hodnoceni`. Claude ji umí použít i sám, když napíšete třeba „Napiš slovní hodnocení pro žáka 3. třídy“.

Funguje ve všech tarifech včetně bezplatného, jen musí být zapnuté spouštění kódu.

Claude je pro uživatele od 18 let.

### Microsoft Copilot

1. Otevřete instrukce dovednosti v Google Docs.
2. V Copilot Chatu vytvořte agenta a do jeho pokynů instrukce vložte. S placenou licencí Microsoft 365 Copilot můžete místo toho nahrát ZIP dovednosti.
3. Agenta vyvoláte v chatu zavináčem, například `@Slovní hodnocení`, nebo ho otevřete v seznamu agentů.

Agenta vytvoříte i v bezplatném Copilot Chatu se školním nebo pracovním účtem.

Samotné dovednosti má jen placená licence Microsoft 365 Copilot: v Copilot Cowork přes **Customize → Skills → Add → Upload skill** (soubor `.md` do 1 MB nebo ZIP do 10 MB), v Agent Builderu nejvýš 8 dovedností na agenta.

## Máte vlastní Gem?

**Na osobních účtech Gems zmizí 17. 12. 2026.**

V Gemini se Gems převádějí na dovednosti samy. Stačí je zkontrolovat a zapnout.

### Osobní účty

- od 17. 11. 2026 se Gems samy převedou na dovednosti
- původní Gems zůstanou jen pro čtení
- 17. 12. 2026 zmizí

### Školy a firmy

- z Gems vzniknou neaktivní koncepty dovedností
- autor je musí zkontrolovat a zapnout
- ve školách nejdříve od 1. 6. 2027

## Jak napsat vlastní dovednost

Dovednost nemusíte psát od nuly. Nechte ji vytvořit chatbota a výsledek pak upravte podle čtyř kroků níže.

- **Z promptu** — Vezměte prompt, který se vám osvědčil, a napište „Udělej z tohoto promptu dovednost (skill) ve formátu SKILL.md“.
- **Z popisu** — Popište chatbotovi, co má dovednost dělat, a požádejte ho, ať ji vytvoří. ChatGPT i Claude k tomu mají vestavěného pomocníka (Skill Creator).
- **Z konverzace** — Když se vám nějaká konverzace povede, požádejte chatbota, ať z ní vytvoří dovednost.

### Popis rozhoduje

Chatbot čte nejdřív jen název a popis. Popis proto musí říct, co dovednost dělá a kdy ji použít.

> Pomáhá vyučujícím na ZŠ formulovat vzdělávací cíle podle RVP. Použij, když vyučující chce napsat nebo zkontrolovat cíl hodiny.

### Postup krok za krokem

Na co se zeptat (nikdy na jména žáků), v jakém pořadí postupovat, jak má vypadat výstup a jakým tónem komunikovat.

Pokud má rozhovor pevnou posloupnost, napište ji jako číslovaný seznam.

> Například: 1) Zeptej se na ročník a předmět. 2) Počkej na odpověď. 3) Navrhni tři varianty cíle.

### Podklady

Do složky `references` patří to, z čeho má dovednost čerpat: hodnoticí škály, ŠVP, modelové příklady, seznamy pojmů.

- **Nahrávejte jen to, co smíte** — žádné osobní údaje, žádné materiály, u kterých to zakazují autorská práva.
- **Volte jednoduché formáty** — text jako `.txt` nebo `.md` (Markdown), tabulky jako `.csv`. PDF nechte chatbota převést na Markdown.
- **Dlouhé dokumenty rozdělte** — nechte chatbota rozdělit je na menší soubory, třeba po kapitolách, a v postupu napište, kdy který použít.

### Testování

Vyzkoušejte dovednost na několika skutečných situacích a nechte ji otestovat i kolegy.

- Reaguje správně na zadání?
- Jsou odpovědi věcně správné a srozumitelné?
- Drží se postupu?
- Co udělá, když uživatel zadá něco mimo téma?

Jako podklad poslouží [pracovní list pro testování AI asistentů](https://kurikulum.aidetem.cz/metodiky/digikomp/Digitalni-kompetence-AI_skolni-hackaton_AI-asistenti_pracovni-list-01.pdf) z AI kurikula.

## Jak dovednost sdílet

Dovednosti zatím nejdou sdílet veřejným odkazem tak jako GPTs. Nejjednodušší je zveřejnit dovednost jako soubor ke stažení, přesně tak to děláme na tomto webu.

- **Claude** — ZIP pošlete kolegům. V týmových tarifech můžete dovednost sdílet uvnitř organizace.
- **Gemini** — V Google Workspace můžete dovednost sdílet odkazem, příjemce dostane kopii. Sdílení mimo školu musí povolit správce. Osobní účty sdílení teprve dostanou.
- **Copilot** — Dovednost sdílíte jen uvnitř své organizace.
- **ChatGPT** — Dovednost sdílíte uvnitř pracovního prostoru (Business, Enterprise, Edu).

## Máte vlastní dovednost?

Podělte se o ni s ostatními vyučujícími. Napište nám, nebo se podívejte, co už je v katalogu.
