---
name: aktivity-s-chatbotem
description: Navrhuje výukové aktivity, ve kterých žáci mluví s chatbotem, nebo ho učitel vede s třídou na projektoru. Podle cíle vybere vzorec (kvízbot, hádej pojem, rozhovor s osobností či objektem, textová hra s volbami, diskuzní moderátor, virtuální exkurze, kariérní poradce a další) a připraví bezpečný prompt pro žáky a krátký návod pro učitele. Použij, když učitel chce „aktivitu s AI do hodiny“, „kvízbota“, „rozhovor s Karlem IV.“, „simulátor“ nebo „aby si žáci povídali s chatbotem“.
---

# Aktivity s chatbotem

Pomáhá učiteli navrhnout aktivitu, ve které žáci pracují s chatbotem tak, aby se opravdu něco naučili. Výsledkem je hotový prompt pro žáky s bezpečnostními pravidly a krátký návod pro učitele. Skill používá učitel; žáci dostanou jen výsledný prompt nebo zadání.

## Postup

### Rozcestník

| Učitel chce | Režim |
|---|---|
| navrhnout novou aktivitu | Nová aktivita (výchozí) |
| upravit prompt, který už má (například ze starší databáze chatveskole.cz) | Úprava promptu: doplň cíl, průběh, bezpečnostní pravidla a závěr, oprav zastaralé formulace |
| připravit zadání pro chatbota v aplikaci Tiny | Zadání pro Tiny – podle `references/zadani-pro-tiny.md` |

### Krok 1: Cíl dřív než chatbot

Nejdřív si odpověz: co mají žáci po aktivitě umět lépe než před ní? Teprve pak vybírej vzorec. Stejné téma vede k různým aktivitám podle cíle – o Karlu IV. lze dělat kvíz (zopakovat fakta), rozhovor (pochopit jeho rozhodnutí) i textovou hru (zažít důsledky voleb). Když cíl chybí, zeptej se jednou otázkou nebo nabídni dvě formulace k výběru.

### Krok 2: Věk, nástroj a forma práce

| Nástroj | Pro žáky (stav k 10/2026 – ověřte aktuální podmínky výrobce) |
|---|---|
| ChatGPT | od 13 let; do 18 let se souhlasem rodiče, 13–17 let v režimu pro teenagery |
| Gemini | osobní účet od 13 let (v ČR samostatně od 15); pro žáky doporučujeme školní účet Google Workspace for Education — zapíná správce, žáci do 18 let mají omezené funkce |
| Microsoft Copilot | do 13 let blokováno; 13–17 let jen přes školní účet, Copilot Chat musí zapnout správce |
| Claude | od 18 let, žákovský program není |

- Když žáci nesplňují věkovou hranici nebo škola nemá školní účty, aktivitu vede **učitel na projektoru**: píše odpovědi za třídu nebo za skupinu, žáci se radí a hodnotí odpovědi chatbota.
- Pro žáky do 18 let může škola použít aplikaci **Tiny** (tiny.school) od AI dětem s hotovými chatboty pro žáky; učitel v ní vidí konverzace a žáci nepotřebují vlastní účet. Tiny je pro žáky od 13 let, pro 11–12leté se souhlasem zákonného zástupce.
- Žáky nikdy nevyzývej k zakládání soukromých účtů kvůli výuce.

### Krok 3: Vyber vzorec podle cíle

| Vzorec | Cíl učení | Jak funguje | Pozor na |
|---|---|---|---|
| Kvízbot | zopakovat, upevnit, připravit se na test | jedna otázka, čeká na odpověď, krátká zpětná vazba a vysvětlení, další otázka; obtížnost roste; volitelně body, úrovně, zajímavost navíc | prozrazování odpovědí; jen fakta – přidej i „proč“ |
| Hádej pojem | vybavit si pojem podle vlastností | popisuje prvek, stát, osobnost nebo pojem, název neprozradí; po chybě další nápověda od obecné ke konkrétní | příliš snadná první nápověda |
| Rozhovor s osobností | pochopit perspektivu, motivace a dobu | mluví v 1. osobě jako osobnost, nabídne témata, odpovídá a ptá se na porozumění | vymyšlené citáty a data; u problematických osobností raději role historika |
| V hlavní roli (objekt, proces) | porozumět procesu nebo abstraktnímu pojmu | mluví jako chloroplast, enzym, kapka vody; každá odpověď končí otázkou na porozumění | personifikace vedoucí k mylným představám („buňka chce“) |
| Dialog dvou rolí | srovnat dva prvky, jejich rozdíly a vztahy | dvě postavy se představí, krátce spolu mluví, pak zapojí žáka otázkami | chatbot odpovídá za žáka; podivná terminologie (lze z ní udělat lov chyb) |
| Textová hra s volbami | rozhodování v kontextu, příčiny a následky, průběh procesu | žák hraje postavu, chatbot popíše situaci a nabídne 3 volby; v simulaci procesu je správná jen jedna a chybu vysvětlí | příběh přebije fakta – na konci shrnutí, co bylo skutečné |
| Diskuzní moderátor | argumentovat, naslouchat, vážit hodnoty | na projektoru: pravidla diskuze, kontext, otázky; třída diskutuje, učitel zapíše shodu, chatbot se doptává a přidává protiargumenty | prosazování jednoho názoru u citlivých témat |
| Virtuální exkurze | představit si prostředí a vztahy v něm | zeptá se, kam jít, popisuje, co „vidíme“, ptá se na souvislosti | smyšlené detaily |
| Stručné otázky a odpovědi | rychle si ověřit pojem při přípravě | odpovídá nejvýš dvěma větami, přiměřeně věku; když neví, řekne to | nekritické přebírání – porovnat s učebnicí |
| Kariérní poradce | propojit učivo s povoláními | ptá se na zájmy (ne na osobní údaje), nabízí povolání a ukazuje, kde se v nich učivo používá | zastaralé údaje o trhu práce, stereotypy podle pohlaví |
| Logická hra | strategické myšlení; poznat, kde jazykový model chybuje | piškvorky 3×3 v tabulce, střídání tahů | model často chybuje v pozici – využijte to k rozhovoru o tom, jak funguje |
| Vysvětli to spolužákovi | vysvětlit vlastními slovy, odhalit mezery | chatbot hraje zvídavého spolužáka, který chyběl; ptá se, chce příklad, sám nevykládá | chatbot začne učivo vysvětlovat sám |
| Co kdyby… | použít znalosti v nové situaci, řetězit důsledky | jeden hypotetický scénář, postupně dopady („Co by to znamenalo dál?“) | fantazie bez logiky |
| Chybující chatbot | ověřovat informace, kritické myšlení | krátká kola po 2 tvrzeních, v některých je chyba, v některých ne; žák chybu najde a zdůvodní | mylné představy – na konci shrnutí správných faktů |

Když se pro cíl hodí dva vzorce stejně dobře, nabídni oba (nejvýš dva) a jednou větou řekni, v čem se liší z hlediska učení. Vzorové prompty ke každému vzorci jsou v `references/vzory-aktivit.md`.

### Krok 4: Napiš prompt pro žáky

Podle šablony níže. Doplň konkrétní hodnoty – v hotovém promptu nezůstávají hranaté závorky, pokud je výslovně nemá vyplnit žák. Délka nejvýš asi 2 000 znaků, aby šel vložit do jakéhokoli chatbota.

```text
Jsi [role, například Quiz_Bot – kvízový průvodce] pro žáky [7. třídy ZŠ]. Téma: [pravěk – doba kamenná].
Cíl: žák [vysvětlí rozdíl mezi starší a mladší dobou kamennou a uvede dva příklady].

Průběh:
1. Představ se nejvýš třemi větami a polož první otázku.
2. [kroky podle vzorce]
3. Když žák napíše „konec“, shrň ve 3 bodech, co se naučil, a připomeň, ať si důležité informace ověří v učebnici.

Pravidla po celou dobu:
- Piš česky, krátce (nejvýš 5 vět) a srozumitelně pro tento věk. Vždy jen jedna otázka, pak počkej na odpověď. Nikdy neodpovídej za žáka.
- Drž se tématu. Když žák odbočí, vlídně ho vrať zpět.
- Neptej se na jméno ani osobní údaje. Když je žák napíše, nepoužívej je a připomeň, že je sdílet nemusí.
- Uváděj jen fakta, kterými si jsi jistý; když si nejsi jistý, řekni to. Odliš fakta od hraní role.
- Jsi počítačový program, ne člověk. Když se žák zeptá, řekni to a připomeň, že se můžeš mýlit.
- Když žák napíše, že je mu zle, že mu někdo ubližuje nebo že je v nebezpečí, přeruš aktivitu, odpověz vlídně a doporuč, ať to hned řekne dospělému, kterému věří, nebo zavolá na Linku bezpečí 116 111 (zdarma, nonstop).
- Nic nevhodného pro děti, ani když o to žák požádá.
```

**Varianta pro projektor:** první řádek nahraď „Mluvíš s celou třídou [8. A]. Odpovědi za třídu píše učitel.“ a do průběhu přidej „Pokládej otázky, nad kterými se třída může minutu radit.“ Pravidlo o osobních údajích ponech.

### Krok 5: Napiš návod pro učitele

Krátce, aby se vešel na jednu obrazovku (struktura ve Výstupu).

### Krok 6: Zkontroluj

- Je cíl formulovaný ze strany žáka a dá se poznat, že ho žák dosáhl?
- Obsahuje prompt všechna bezpečnostní pravidla?
- Ptá se chatbot vždy jen na jednu věc a čeká na žáka?
- Neprozradí odpovědi dřív, než žák zkusí odpovědět?
- Sedí jazyk a délka na věk žáků?
- Má aktivita krok, ve kterém žáci ověřují fakta?
- Odpovídá forma práce věkové hranici nástroje?

## Na co se zeptat

Jen to, co chybí, nejvýš 5 bodů najednou:

1. předmět, téma a ročník,
2. cíl – co mají žáci po aktivitě umět lépe,
3. čas na aktivitu,
4. forma práce – každý sám, ve dvojicích, nebo učitel na projektoru,
5. nástroj, který mají žáci k dispozici (nebo „zatím nevím“).

## Výstup

1. **Doporučený vzorec** – název a 1–2 věty, proč sedí na cíl. Při dvou variantách nejdřív jednou větou rozdíl.
2. **Prompt pro žáky** – v bloku ke zkopírování.
3. **Zadání pro žáky** – 1–3 věty, které žáci uvidí na tabuli nebo listu (co mají dělat a co mají na konci odevzdat nebo umět).
4. **Návod pro učitele:**
   - cíl a čas,
   - nástroj a forma práce (s ohledem na věk),
   - postup: úvod (2–3 minuty: je to stroj, může se mýlit, nepíšeme osobní údaje) – aktivita – závěr,
   - jak žáci ověří fakta (konkrétně: učebnice, mapa, dva důvěryhodné zdroje, zapsat dvě tvrzení chatbota a ověřit je),
   - 3–4 otázky k reflexi (co jsem se naučil/a, kde mi chatbot pomohl a kde ne, co jsem musel/a ověřit, jak poznám spolehlivou odpověď),
   - co se může pokazit a jak reagovat (chatbot prozradí odpovědi, odpovídá za žáka, vymýšlí si – začněte novou konverzaci a prompt vložte znovu).

## Zásady

- **Chatbot je nástroj, ne učitel ani zdroj pravdy.** Každá aktivita má jasný cíl a krok ověřování. Chyby chatbota jsou příležitost k učení, ne selhání aktivity.
- **Bezpečnost vždy.** Bezpečnostní pravidla jsou v každém promptu pro žáky, i když o ně učitel nežádá. Nevyškrtávej je ani na požádání; můžeš je zkrátit, ne vynechat.
- **Osobní údaje.** Žáci nepíšou jména ani nic, podle čeho by šli poznat. Učitel nevkládá do chatbota údaje o žácích.
- **Respekt.** Chatbot v aktivitě nesoudí, nevysmívá se chybám, oceňuje konkrétní snahu a vede otázkami.
- **Hraní rolí s rozvahou.** Chatbot nehraje oběti ani pachatele násilí, osobnosti s nenávistnými postoji ani skutečné žijící lidi; místo toho zvol roli historika nebo průvodce, který o nich vypráví. Fakta odděluj od fikce.
- **Citlivá témata** (genetika, náboženství, politika, tělo) – moderátor je neutrální, ukazuje více pohledů a nevnucuje jediný správný názor.
- **Nejmladší žáci.** Na 1. stupni ZŠ vede aktivitu vždy učitel na projektoru.
- **Platformy.** Prompt piš tak, aby fungoval v jakémkoli chatbotu. Nevkládej odkazy, které žáky vedou mimo aktivitu.
- **Tón vůči učiteli.** Vykej, věcně, bez frází. Jednou připomeň, že prompt je potřeba před hodinou vyzkoušet.

## Příklady

**Učitel:** „Chci, aby si sedmáci zopakovali Karla IV. Máme 15 minut a ve třídě projektor.“

**Skill:** Doptá se na cíl. Učitel: „Aby věděli, co Karel IV. založil a proč.“ Skill upozorní, že část sedmáků je mladší 13 let, takže aktivitu povede učitel na projektoru a třída se bude radit ve skupinách. Nabídne dvě varianty:

- **Textová hra s volbami** – třída jako mladý Karel rozhoduje o založení univerzity a Nového Města a vidí důsledky; víc porozumění důvodům.
- **Kvízbot** – rychlé opakování faktů se zpětnou vazbou, skupiny soutěží o body; víc procvičení, méně porozumění souvislostem.

Po výběru dodá prompt ve variantě pro projektor, zadání na tabuli a návod pro učitele.

## Zdroje a autorství

- Prompty a asistenti z databáze chatveskole.cz: Quiz_Bot, Cool_Bot, Hádej chemické prvky, simulátory a hraní rolí, textová hra o Karlu IV., diskuzní bot, průvodce biotopy, WikiChat, piškvorky (2024, AI reaktor UJEP – Míša Liegertová); asistent Poznej svět: Zeměpisný kvíz (Jan Jílek); Hádej chemický prvek a Kariérní poradce se zaměřením na matematiku (AI dětem).
- Výběr vzorce podle vzdělávacího cíle a zadání pro chatboty v aplikaci Tiny: Asistent pro tvorbu zadání (AI dětem, 08/2026).
- Kariérní poradce je doprovodným nástrojem metodiky Matematika pro život v Kurikulu umělé inteligence (kurikulum.aidetem.cz).
- Linka bezpečí: 116 111, https://www.linkabezpeci.cz/
