---
title: Dovednosti (skills)
menu: Funkce
poradi: 3
popis: Co jsou dovednosti (skills), jak je nainstalovat do Claude, Gemini, Copilotu a ChatGPT a jak napsat vlastní. Náhrada za GPTs a Gems.
sablona: dovednosti-pruvodce   # vlastní šablona src/pages/funkce/skills.astro (návrh z Claude Design, 20. 11. 2026)
tlacitko: { text: Katalog dovedností, href: /skills }
aktualizovano: 2026-11-20
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
  - { text: Pluginy, href: /funkce/pluginy }
---

# Dovednosti (skills)

Dovednost je návod, který si chatbot vytáhne, když ho potřebuje. Jako recept v šuplíku: nemusíte ho pokaždé diktovat. Nahrazuje GPTs a Gems. **Stejnou dovednost nahrajete do Claude, Gemini, ChatGPT i Copilotu, ne každý tarif ale dovednosti má.** Kde je nemáte, použijte dovednost jako prompt.

<!-- komponenta: video -->
[Průvodce instalací a využitím dovednosti](https://www.loom.com/share/14a4cf1510e6458a82058811435b7d59)

## Z čeho se dovednost skládá

Dovednost si můžete představit jako složku, která obsahuje instrukce a volitelně soubory, ze kterých čerpá. Můžete si ji vytvořit sami nebo požádat chatbota, ať ji vytvoří za vás.

- **Název a popis** — Podle popisu chatbot pozná, kdy dovednost použít.
- **Postup** — Na co se zeptat, jak pracovat, jak má vypadat výstup.
- **Podklady** — Mohou být různé textové nebo tabulkové formáty, obrázky…

## Dovednosti z tohoto webu

Všechny naše dřívější AI asistenty jsme převedli na dovednosti a přidali k nim to nejlepší z databáze promptů. Původní prompty zůstávají v [katalogu promptů](/prompty). U každé dovednosti najdete čtyři cesty, jak ji použít:

- **Zkopírovat jako prompt** — Funguje v jakémkoli chatbotu, i zdarma.
- **Stáhnout dovednost** — ZIP zvlášť pro Claude, Gemini a ChatGPT k nahrání do chatbota. Pro Copilot si z instrukcí vytvoříte agenta.
- **Instrukce** — V Google Docs pro Copilot agenty, projekty v ChatGPT nebo k vlastní úpravě.
- **Znalosti na Disku** — Podklady, ze kterých dovednost čerpá (například klíčové kompetence z RVP). Nahrajte je k projektu nebo dovednosti, pokud chcete přesnější výstupy.

## Jak dovednost nainstalovat

### ChatGPT

- **Placené tarify od Plus:** **Plugins → Skills → Create → Upload from your computer.**
- **Zdarma a tarif Go:** dovednosti nemají. Vložte instrukce dovednosti do pokynů [projektu](/funkce/projekty), nebo použijte verzi promptu.
- **Pro žáky:** použijte verzi promptu.

Dovednost vyvoláte v chatu zavináčem, například `@slovni-hodnoceni`.

Dovednosti mají placené tarify od Plus. Ve verzi zdarma a v tarifu Go nejsou.

### Gemini

1. V aplikaci Gemini otevřete **Více… → Přizpůsobit → Dovednosti**.
2. Nahrajte ZIP, složku nebo samotný soubor `SKILL.md` (do 100 MB).
3. Dovednost zavoláte zavináčem v jakémkoli chatu, například `@slovni-hodnoceni`.

Dovednosti mají osobní účty od 18 let se zapnutou historií aktivity, předplatné není potřeba. Na školních účtech (Google Workspace for Education) dostupnost řídí správce — ověřte u něj.

Co se stane s vašimi Gems: na osobních účtech se od 17. 11. 2026 samy převedou na dovednosti (Gems pak zůstanou jen pro čtení a 17. 12. 2026 zmizí). Ve školách a firmách z nich vzniknou neaktivní koncepty dovedností, které musí autor zkontrolovat a zapnout — ve školách nejdříve 1. 6. 2027.

### Claude

1. Stáhněte ZIP dovednosti (nerozbalujte ho).
2. V Claude otevřete **Customize → Skills**, klikněte na **+** a zvolte **Upload a skill**.
3. Vyberte ZIP. Dovednost se objeví v seznamu a můžete ji zapnout nebo vypnout.
4. Dovednost vyvoláte v chatu lomítkem, například `/slovni-hodnoceni`. Claude ji umí použít i sám, když napíšete třeba „Napiš slovní hodnocení pro žáka 3. třídy“.

Funguje ve všech tarifech včetně bezplatného, musí být zapnuté spouštění kódu.

Claude je pro uživatele od 18 let.

### Microsoft Copilot

- **Copilot Cowork:** **Customize → Skills → Add → Upload skill.** Nahrajete soubor `.md` (do 1 MB) nebo ZIP (do 10 MB).
- **Agent Builder:** dovednost (ZIP) přidáte do agenta, nejvýš 8 dovedností na agenta.
- **Bez licence:** v bezplatném Copilot Chatu vytvořte agenta a do jeho pokynů vložte instrukce dovednosti z Google Docs.

Agenta vyvoláte v Copilot Chatu zavináčem, například `@Slovní hodnocení`, nebo ho otevřete v seznamu agentů.

Dovednosti (Cowork i Agent Builder) má jen placená licence Microsoft 365 Copilot. V bezplatném Copilot Chatu a v Copilotu pro osobní účty nejsou.

## Jak napsat vlastní dovednost

Nejjednodušší cesta: vezměte prompt, který se vám osvědčil, a požádejte chatbota „Udělej z tohoto promptu dovednost (skill) ve formátu SKILL.md“. Pak výsledek upravte podle pěti kroků.

### Popis rozhoduje

Chatbot čte nejdřív jen název a popis. Popis proto musí říct, co dovednost dělá a kdy ji použít.

> Pomáhá vyučujícím na ZŠ formulovat vzdělávací cíle podle RVP. Použij, když vyučující chce napsat nebo zkontrolovat cíl hodiny.

### Postup krok za krokem

Na co se zeptat (nikdy na jména žáků), v jakém pořadí postupovat, jak má vypadat výstup a jakým tónem komunikovat.

Popište také, k čemu dovednost slouží a komu pomáhá. Pokud má rozhovor pevnou posloupnost, napište ji jako číslovaný seznam.

> Například: 1) Zeptej se na ročník a předmět. 2) Počkej na odpověď. 3) Navrhni tři varianty cíle.

### Podklady

Do složky `references` patří to, z čeho má dovednost čerpat: hodnoticí škály, ŠVP, modelové příklady, seznamy pojmů.

- **Nahrávejte jen to, co smíte** — žádné osobní údaje, žádné materiály, u kterých to zakazují autorská práva.
- **Volte jednoduché formáty.** Text jako `.md` nebo `.txt`, tabulky jako `.csv`. Z PDF chatbot často špatně pochopí, co k čemu patří.
- **Dlouhé dokumenty rozdělte** podle témat do více souborů a v postupu napište, kdy který použít.

### Testování

Vyzkoušejte dovednost na několika skutečných situacích a nechte ji otestovat i kolegy.

- Reaguje správně na zadání?
- Jsou odpovědi věcně správné a srozumitelné?
- Drží se postupu?
- Co udělá, když uživatel zadá něco mimo téma?

Jako podklad poslouží [pracovní list pro testování AI asistentů](https://kurikulum.aidetem.cz/metodiky/digikomp/Digitalni-kompetence-AI_skolni-hackaton_AI-asistenti_pracovni-list-01.pdf) z AI kurikula.

### Sdílení

Dovednosti zatím nejdou sdílet veřejným odkazem tak jako GPTs. Nejjednodušší je zveřejnit dovednost jako soubor ke stažení — přesně tak to děláme na tomto webu.

- **Claude:** ZIP pošlete kolegům, v týmových tarifech můžete dovednost sdílet v rámci organizace.
- **Gemini:** v Google Workspace můžete dovednost sdílet odkazem — příjemce dostane kopii. Sdílení mimo školu musí povolit správce. Osobní účty sdílení teprve dostanou.
- **Copilot:** jen v rámci vaší organizace.
- **ChatGPT:** v rámci pracovního prostoru (Business, Enterprise, Edu).

## Máte vlastní dovednost?

Podělte se o ni s ostatními vyučujícími. Napište nám, nebo se podívejte, co už je v katalogu.
