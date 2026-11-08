---
title: Skills (dovednosti)
menu: Funkce
poradi: 3
popis: Co jsou skills, jak je nainstalovat do Claude, Gemini, Copilotu a ChatGPT a jak napsat vlastní. Náhrada za GPTs a Gems.
tlacitko: { text: Přejít na Katalog skills, href: /skills }
aktualizovano: 2026-11-07
stav: koncept
zdroje:
  - https://agentskills.io/specification
  - https://support.claude.com/en/articles/12512180-use-skills-in-claude
  - https://support.google.com/gemini/answer/17094296
  - https://support.google.com/gemini/answer/18560919
  - https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize
  - https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills
  - https://help.openai.com/en/articles/20001066-skills-in-chatgpt
---

# Skills (dovednosti)

Skill je návod uložený v souboru, který si chatbot vytáhne ve chvíli, kdy ho potřebuje. Podobně jako recept v šuplíku: nemusíte ho pokaždé diktovat, chatbot ví, že ho má, a použije ho, když požádáte třeba o slovní hodnocení.

Skills nahrazují GPTs v ChatGPT a Gems v Gemini, které letos končí. Mají jednu velkou výhodu: **stejný skill funguje v Claude, Gemini, Copilotu i ChatGPT.** Nemusíte asistenta stavět čtyřikrát.

## Z čeho se skill skládá

Skill je složka. Povinný je v ní jediný soubor `SKILL.md`:

- **název** a **popis** — podle popisu chatbot pozná, kdy skill použít,
- **postup** — co se má zeptat, jak má pracovat, jak má vypadat výstup,
- volitelně **podklady** (složka `references`) — škály, příklady, metodiky.

Formát je otevřený standard [Agent Skills](https://agentskills.io), takže ho čtou všechny velké chatboty.

## Skills z tohoto webu

Všechny naše dřívější AI asistenty jsme převedli na skills a přidali k nim to nejlepší z databáze promptů. Původní prompty zůstávají v [katalogu promptů](/prompty). U každého skillu najdete:

- **Zkopírovat jako prompt** — funguje v jakémkoli chatbotu, i zdarma,
- **Stáhnout skill (ZIP)** — k nahrání do vašeho chatbota,
- **Systémový prompt v Google Docs** — pro Copilot agenty, projekty v ChatGPT nebo k vlastní úpravě,
- **Znalosti na Google Disku** — podklady, ze kterých skill čerpá (například klíčové kompetence z RVP). Nahrajte je k projektu nebo skillu, pokud chcete přesnější výstupy.

[Katalog skills →](/skills)


## Jak skill nainstalovat

<!-- komponenta: záložky podle nástroje -->

### Claude

1. Stáhněte ZIP skillu (nerozbalujte ho).
2. V Claude otevřete **Customize → Skills**, klikněte na **+** a zvolte **Upload a skill**.
3. Vyberte ZIP. Skill se objeví v seznamu a můžete ho zapnout nebo vypnout.
4. Pište normálně, například „Napiš slovní hodnocení pro žáka 3. třídy“. Claude skill použije sám.

Funguje ve všech tarifech včetně bezplatného, musí být zapnuté spouštění kódu. Claude je pro uživatele od 18 let.

### Gemini

1. V aplikaci Gemini otevřete správu skills a nahrajte ZIP, složku nebo samotný soubor `SKILL.md` (do 100 MB).
2. Skill zavoláte lomítkem, například `/slovni-hodnoceni`.

Skills mají osobní účty od 18 let se zapnutou historií aktivity, předplatné není potřeba. Na školních účtech (Google Workspace for Education) dostupnost řídí správce — ověřte u něj.

Co se stane s vašimi Gems: na osobních účtech se od 17. 11. 2026 samy převedou na skills (Gems pak zůstanou jen pro čtení a 17. 12. 2026 zmizí). Ve školách a firmách z nich vzniknou neaktivní koncepty skills, které musí autor zkontrolovat a zapnout — ve školách nejdříve 1. 6. 2027.

### Microsoft Copilot

- **Copilot Cowork:** **Customize → Skills → Add → Upload skill.** Nahrajete soubor `.md` (do 1 MB) nebo ZIP (do 10 MB). Vyžaduje placenou licenci Microsoft 365 Copilot.
- **Agent Builder:** skill (ZIP) přidáte do agenta, nejvýš 8 skills na agenta.
- **Bez licence:** v bezplatném Copilot Chatu vytvořte agenta a do jeho pokynů vložte systémový prompt z Google Docs.

### ChatGPT

- **Tarify Business, Enterprise a Edu:** **Plugins → Skills → Create → Upload from your computer.**
- **Ostatní tarify:** samostatné skills zatím nemají. Nainstalujte [plugin](/funkce/pluginy), do kterého jsou skills zabalené, nebo vložte systémový prompt do instrukcí [projektu](/funkce/projekty).
- **Zdarma a pro žáky:** použijte verzi promptu.

## Jak napsat vlastní skill

Nejjednodušší cesta: vezměte prompt, který se vám osvědčil, a požádejte chatbota „Udělej z tohoto promptu skill ve formátu SKILL.md“. Pak výsledek upravte podle zásad níže.

### 1. Popis rozhoduje

Chatbot čte nejdřív jen název a popis. Popis proto musí říct, **co skill dělá a kdy ho použít**:

> Pomáhá učitelům ZŠ formulovat vzdělávací cíle podle RVP. Použij, když učitel chce napsat nebo zkontrolovat cíl hodiny.

### 2. Postup krok za krokem

Popište, jak má chatbot pracovat:

- k čemu skill slouží a komu pomáhá,
- na co se má zeptat (a na co ne — nikdy na jména žáků),
- v jakém pořadí postupovat,
- jak má vypadat výstup,
- jakým tónem komunikovat.

Pokud má rozhovor pevnou posloupnost, napište ji jako číslovaný seznam. Například: *1) Zeptej se na ročník a předmět. 2) Počkej na odpověď. 3) Navrhni tři varianty cíle.*

### 3. Podklady

Do složky `references` patří to, z čeho má skill čerpat: hodnoticí škály, ŠVP, modelové příklady, seznamy pojmů.

- **Nahrávejte jen to, co smíte** — žádné osobní údaje, žádné materiály, u kterých to zakazují autorská práva.
- **Volte jednoduché formáty.** Text jako `.md` nebo `.txt`, tabulky jako `.csv`. Z PDF chatbot často špatně pochopí, co k čemu patří.
- **Dlouhé dokumenty rozdělte** podle témat do více souborů a v postupu napište, kdy který použít.

### 4. Testování

Vyzkoušejte skill na několika skutečných situacích:

- Reaguje správně na zadání?
- Jsou odpovědi věcně správné a srozumitelné?
- Drží se postupu?
- Co udělá, když uživatel zadá něco mimo téma?

Nechte ho vyzkoušet i kolegy — přemýšlí jinak než vy. Jako podklad poslouží [pracovní list pro testování AI asistentů](https://kurikulum.aidetem.cz/metodiky/digikomp/Digitalni-kompetence-AI_skolni-hackaton_AI-asistenti_pracovni-list-01.pdf) z AI kurikula.

### 5. Sdílení

Skills zatím nejdou sdílet veřejným odkazem tak jako GPTs:

- **Claude:** ZIP pošlete kolegům, v týmových tarifech můžete skill sdílet v rámci organizace.
- **Gemini:** v Google Workspace můžete skill sdílet odkazem — příjemce dostane kopii. Sdílení mimo školu musí povolit správce. Osobní účty sdílení teprve dostanou.
- **Copilot:** jen v rámci vaší organizace.
- **ChatGPT:** v rámci pracovního prostoru (Business, Enterprise, Edu).

Nejjednodušší je zveřejnit skill jako soubor ke stažení — přesně tak to děláme na tomto webu. Máte skill, o který se chcete podělit? [Napište nám](/o-webu/kontakt).
