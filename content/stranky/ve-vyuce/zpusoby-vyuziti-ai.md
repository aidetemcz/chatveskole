---
title: Způsoby využití AI ve výuce
menu: Chatboti ve výuce
poradi: 2
popis: Deset způsobů, jak zapojit generativní AI do výuky tak, aby žákům pomáhala přemýšlet a nepřemýšlela za ně. Ke každému co dělá žák a co AI, pojistka a jak poznáte, že se žák učí.
aktualizovano: 2026-11-21
tlacitko: { text: AI aplikace Tiny, href: /ve-vyuce/tiny }
stav: ke-kontrole   # před zveřejněním: ověřit čísla ze studií v původních článcích; věta o 4 krocích jen o návaznosti (s NPI nedohodnuto)
zdroje:
  - https://digitalizace.rvp.cz/clanky/4-kroky-ke-smysluplnemu-uceni-s-ai
  - https://aiassessmentscale.com/
  - https://arxiv.org/abs/2306.10052
  - https://doi.org/10.1073/pnas.2422633122
  - https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html
  - https://arxiv.org/abs/2412.09315
  - https://arxiv.org/abs/2506.08872
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/
  - https://arxiv.org/abs/2412.15226
  - https://doi.org/10.1016/j.learninstruc.2024.101894
---

# Způsoby využití AI ve výuce

Deset způsobů, jak zapojit generativní AI do výuky tak, aby žákům pomáhala přemýšlet a nepřemýšlela za ně.

Chatbot umí během chvilky napsat osnovu, vyřešit příklad nebo shrnout kapitolu. Právě proto záleží na tom, jakou práci mu ve výuce svěříte a jakou necháte žákům. Způsoby na této stránce jsou seřazené podle toho, co při nich dělá žák: od vybavování učiva přes zkoumání souvislostí a posuzování až po vlastní tvorbu.

Ke každému způsobu najdete, co dělá žák a co AI, kdy se způsob hodí a kdy ne a hodnoticí kritérium, podle kterého poznáte, že se žák opravdu něco naučil.

Způsoby jsou určené pro 2. stupeň základních škol a pro střední školy. Generativní AI doporučujeme využívat hlavně se staršími žáky, kteří už dokážou posoudit, zda jim nástroj v učení pomáhá. Stránka navazuje na rámec [4 kroky ke smysluplnému učení s AI](https://digitalizace.rvp.cz/clanky/4-kroky-ke-smysluplnemu-uceni-s-ai), který vznikl ve spolupráci Národního pedagogického institutu ČR a AI dětem.

## Jak si vybrat

Vycházejte z cíle hodiny, ne z nástroje. Podívejte se na sloveso, kterým cíl začíná, a podle něj zvolte skupinu.

| Skupina | Cíl hodiny zní | Způsoby |
| --- | --- | --- |
| Žák si vybavuje a vysvětluje | vybaví si, popíše, vysvětlí vlastními slovy | Opakování · Společné objevování · Vysvětlování |
| Žák zkoumá souvislosti | použije, porovná pohledy, odvodí důsledky | Rozhovor v roli · Co kdyby |
| Žák posuzuje | posoudí, zdůvodní, vyvrátí, najde chybu | Argumentace · Hledání chyb |
| Žák tvoří | navrhne, naplánuje, vylepší vlastní práci | Brainstorming · Plánování a struktura · Zpětná vazba |

Pokud s AI ve třídě začínáte, vyberte si nejdřív některý způsob ze skupiny Žák si vybavuje a vysvětluje. Náročnější způsoby zařazujte postupně.

Aktivity stačí krátké, na 5 až 15 minut, a mají navazovat na výklad, diskusi nebo práci s textem. Každý způsob můžete vyzkoušet v [aplikaci Tiny](/ve-vyuce/tiny), kde je připravený jako vzdělávací chatbot, nebo v běžném chatbotu s promptem z [katalogu promptů](/prompty).

## Žák si vybavuje a vysvětluje

<!-- komponenta: karty způsobů -->

### Opakování

**Žák si vybavuje učivo a hned zjišťuje, co už umí a kde má mezery.**

- **Co dělá žák:** Odpovídá na otázky, které se postupně ztěžují, a opravuje vlastní chyby.
- **Co dělá AI:** Klade po jedné otázce. Při chybě se vrátí o krok zpět a napoví.
- **Hodí se, když** cíl zní „žák si vybaví“, „vyjmenuje“ nebo „popíše“.
- **Nehodí se, když** se látka teprve probírá a žák nemá z čeho čerpat.
- **Jak poznáte, že se žák učí:** Zvládne obtížnější otázky než na začátku a dokáže říct, co si potřebuje zopakovat.
- **Otázka k reflexi:** Na kterou otázku bych příště odpověděl bez nápovědy?
- **Příklad:** Opakování slovních druhů před čtvrtletní prací.
- **Kde to spustit:** V Tiny [Opakovací parťák](https://www.tiny.school/opakovaci-partak/) nebo [Testovací chatbot](https://www.tiny.school/testovaci-chatbot/), v běžném chatbotu prompt [Opakování](/funkce/prompty/zaci/opakovani).

### Společné objevování

**Žák dochází k novému poznatku vlastním uvažováním.**

- **Co dělá žák:** Hledá souvislosti a formuluje je vlastními slovy.
- **Co dělá AI:** Místo výkladu klade návodné otázky a navazuje na to, co žák řekl.
- **Hodí se, když** cíl zní „žák vysvětlí“, „objasní“ nebo „najde souvislost“.
- **Nehodí se, když** téma stojí na faktech, která žák nemůže odvodit, například na letopočtech nebo názvosloví.
- **Jak poznáte, že se žák učí:** Shrne nový poznatek vlastními slovy bez pomoci chatbota.
- **Otázka k reflexi:** Na co jsem přišel sám a kde mě chatbot navedl?
- **Příklad:** Proč se na Zemi střídají roční období.
- **Kde to spustit:** V Tiny [Společné objevování](https://www.tiny.school/spolecne-objevovani/), v běžném chatbotu prompt [Společné objevování](/funkce/prompty/zaci/spolecne-objevovani).

### Vysvětlování

**Žák učí chatbota, který látce nerozumí, a tím si ji sám ujasňuje.**

- **Co dělá žák:** Vysvětluje téma jednoduše, volí příklady a reaguje na doplňující otázky.
- **Co dělá AI:** Hraje zvědavého, ale nechápavého posluchače a doptává se na nejasná místa.
- **Hodí se, když** cíl zní „žák vysvětlí vlastními slovy“ nebo „uvede příklad“.
- **Nehodí se, když** se žák s látkou setkává poprvé.
- **Jak poznáte, že se žák učí:** Jeho vysvětlení je věcně správné, srozumitelné a obstojí i při doplňujících otázkách.
- **Otázka k reflexi:** Co se mi vysvětlovalo nejhůř a co to říká o tom, jak látce rozumím?
- **Příklad:** Fotosyntéza vysvětlená někomu, kdo nikdy neviděl rostlinu.
- **Kde to spustit:** V Tiny [Zvědavý mimoň](https://www.tiny.school/zvedavy-mimon/), v běžném chatbotu prompt [Vysvětlování](/funkce/prompty/zaci/vysvetlovani).

## Žák zkoumá souvislosti

<!-- komponenta: karty způsobů -->

### Rozhovor v roli

**Žák vede rozhovor s osobností, odborníkem nebo s jevem, který mluví sám za sebe.**

- **Co dělá žák:** Připraví si otázky, vede rozhovor a odpovědi porovnává s učebnicí nebo jiným zdrojem.
- **Co dělá AI:** Mluví v první osobě za historickou postavu, odborníka, nebo třeba za buňku či řeku.
- **Hodí se, když** cíl zní „žák popíše z jiné perspektivy“, „porovná pohledy“ nebo „zasadí do kontextu“.
- **Nehodí se, když** žák nemá možnost odpovědi ověřit.
- **Jak poznáte, že se žák učí:** Klade promyšlené otázky a všimne si nepřesnosti nebo rozdílu oproti zdroji.
- **Otázka k reflexi:** Čemu z rozhovoru věřím a podle čeho?
- **Příklad:** Rozhovor s Marií Terezií o školní reformě nebo s kapkou vody o koloběhu vody.
- **Kde to spustit:** V Tiny [Historická postava / Expert](https://www.tiny.school/historicka-postava-expert/) a [V hlavní roli…](https://www.tiny.school/v-hlavni-roli/), v běžném chatbotu prompt [Rozhovor v roli](/funkce/prompty/zaci/rozhovor-v-roli).

### Co kdyby

**Žák domýšlí, co by se stalo, kdyby se jedna věc změnila.**

- **Co dělá žák:** Řetězí příčiny a důsledky a své úvahy zdůvodňuje.
- **Co dělá AI:** Navrhne hypotetickou změnu a ptá se, co z ní plyne.
- **Hodí se, když** cíl zní „žák odvodí důsledky“, „vysvětlí příčinu“ nebo „použije poznatek v nové situaci“.
- **Nehodí se, když** žákům chybějí základní znalosti a zbývalo by jim jen hádat.
- **Jak poznáte, že se žák učí:** Jeho řetězec úvah je logický a opírá se o učivo.
- **Otázka k reflexi:** Který z mých závěrů stojí na znalosti a který na odhadu?
- **Příklad:** Co kdyby zemská osa nebyla nakloněná.
- **Kde to spustit:** V Tiny [Co kdyby…](https://www.tiny.school/co-kdyby/), v běžném chatbotu prompt [Co kdyby](/funkce/prompty/zaci/co-kdyby).

## Žák posuzuje

<!-- komponenta: karty způsobů -->

### Argumentace

**Žák hájí stanovisko proti oponentovi, který se nenechá odbýt.**

- **Co dělá žák:** Formuluje tvrzení, dokládá je a reaguje na protiargumenty.
- **Co dělá AI:** Oponuje, žádá důkazy a upozorní na argumentační klam.
- **Hodí se, když** cíl zní „žák obhájí“, „zdůvodní“ nebo „vyvrátí“.
- **Nehodí se, když** jde o fakta, o kterých se nediskutuje, nebo o téma, které je pro žáky osobně citlivé.
- **Jak poznáte, že se žák učí:** Uvádí důkazy, vyrovná se s protiargumentem a pojmenuje nejslabší místo vlastní pozice.
- **Otázka k reflexi:** Který protiargument mě přiměl názor změnit nebo zpřesnit?
- **Příklad:** Mají být mobilní telefony o přestávkách zakázané?
- **Kde to spustit:** V Tiny [Argumentační partner](https://www.tiny.school/argumentacni-partner/), v běžném chatbotu prompt [Argumentace](/funkce/prompty/zaci/argumentace).

### Hledání chyb

**Žák kontroluje text, ve kterém AI záměrně chybuje.**

- **Co dělá žák:** Chyby najde, pojmenuje, opraví a vysvětlí, proč jsou chybné.
- **Co dělá AI:** Vytvoří věrohodný text se záměrnými věcnými, logickými nebo jazykovými chybami.
- **Hodí se, když** cíl zní „žák posoudí“, „ověří“ nebo „opraví“.
- **Nehodí se, když** žáci látku neznají natolik, aby chybu poznali.
- **Jak poznáte, že se žák učí:** Najde podstatné chyby a umí zdůvodnit, proč jde o chybu.
- **Otázka k reflexi:** Kterou chybu jsem přehlédl a proč působila věrohodně?
- **Příklad:** Odstavec o sluneční soustavě se třemi chybami.
- **Kde to spustit:** V Tiny [Chybující chatbot](https://www.tiny.school/chybujici-chatbot/), v běžném chatbotu prompt [Hledání chyb](/funkce/prompty/zaci/hledani-chyb).

## Žák tvoří

<!-- komponenta: karty způsobů -->

### Brainstorming

**Žák sbírá a třídí nápady, AI mu je pomáhá rozšířit otázkami.**

- **Co dělá žák:** Sepíše vlastní nápady, potom je s AI rozšiřuje, třídí a jeden vybere.
- **Co dělá AI:** Ptá se, nabízí další úhly pohledu a upozorňuje na slepá místa. Hotové nápady nepřidává.
- **Hodí se, když** cíl zní „žák navrhne“ nebo „najde více řešení“.
- **Nehodí se, když** se hodnotí původnost nápadu nebo když má třída dojít k rozmanitým řešením.
- **Jak poznáte, že se žák učí:** Má seznam nápadů před rozhovorem i po něm a svůj výběr zdůvodní.
- **Otázka k reflexi:** Který nápad je můj a ke kterému bych se bez AI nedostal?
- **Příklad:** Náměty na třídní projekt ke Dni Země.
- **Kde to spustit:** V Tiny [Parťák pro brainstorming](https://www.tiny.school/partak-pro-brainstorming/), v běžném chatbotu prompt [Brainstorming](/funkce/prompty/zaci/brainstorming).

### Plánování a struktura

**Žák si rozvrhne práci nebo osnovu dřív, než začne tvořit.**

- **Co dělá žák:** Navrhne osnovu či postup, rozdělí úkol na kroky a odhadne čas.
- **Co dělá AI:** Doptává se na mezery, na pořadí a na to, zda je plán reálný.
- **Hodí se, když** cíl zní „žák naplánuje“, „uspořádá“ nebo „navrhne postup“.
- **Nehodí se, když** samostatně hodnotíte právě stavbu textu nebo plánování.
- **Jak poznáte, že se žák učí:** Předloží první návrh i konečnou verzi a vysvětlí, co změnil a proč.
- **Otázka k reflexi:** Co jsem v plánu podcenil?
- **Příklad:** Osnova referátu nebo harmonogram skupinového projektu.
- **Kde to spustit:** V Tiny [Chatbot pro plánování](https://www.tiny.school/chatbot-pro-planovani/), v běžném chatbotu prompt [Plánování a struktura](/funkce/prompty/zaci/planovani-a-struktura).

### Zpětná vazba

**Žák porovnává vlastní hodnocení své práce s hodnocením AI a rozhoduje, co upraví.**

- **Co dělá žák:** Nejdřív posoudí práci podle kritérií sám, potom ji porovná se zpětnou vazbou od AI a vybere úpravy.
- **Co dělá AI:** Posoudí práci podle kritérií, která zadal vyučující, a navrhne, na co se zaměřit.
- **Hodí se, když** cíl zní „žák zhodnotí vlastní práci“ nebo „vylepší ji“.
- **Nehodí se, když** žáci kritéria neznají nebo když jde o hotovou práci ke klasifikaci.
- **Jak poznáte, že se žák učí:** Odevzdá verzi před úpravou i po ní a zdůvodní, které rady přijal a které odmítl.
- **Otázka k reflexi:** V čem se moje hodnocení lišilo od hodnocení AI a kdo z nás měl pravdu?
- **Příklad:** Rozpracovaná úvaha posouzená podle kritérií z hodiny slohu.
- **Kde to spustit:** V běžném chatbotu prompt [Zpětná vazba](/funkce/prompty/zaci/zpetna-vazba).

## Ke každému způsobu patří reflexe

Na konci aktivity nechte žáky krátce zhodnotit, zda jim AI pomohla. Stačí jedna nebo dvě otázky, ústně nebo na lístek:

- Pomohla mi AI něčemu porozumět, nebo jen rychleji skončit?
- Co bych příště udělal bez ní?
- Kdy jsem odpovědi chatbota věřil a kdy jsem si ji ověřil?

Žáci se tak učí rozhodovat, kdy jim AI v učení pomáhá a kdy ne. To je dovednost, kterou budou potřebovat i mimo školu.

## Kdy AI nepoužít

Výuka bez AI je plnohodnotná volba. Pokud cíl hodiny stojí na dovednosti, kterou by chatbot převzal, AI nezařazujte. Platí to například tehdy, když chcete vidět, jak žák sám staví text, počítá nebo formuluje myšlenku. Pomůže jednoduchá otázka: kdo bude při této aktivitě přemýšlet?

## Co říkají výzkumy

Dosavadní výzkumy se shodují v jednom: o tom, zda AI žákům pomůže, nerozhoduje nástroj sám, ale způsob, jakým s ním pracují.

Lepší výkon s AI ještě neznamená, že se žák něco naučil. V [experimentu s téměř tisícovkou tureckých středoškoláků](https://doi.org/10.1073/pnas.2422633122) řešili žáci s obecným chatbotem cvičné úlohy z matematiky o 48 % úspěšněji. Ve zkoušce bez AI ale dopadli o 17 % hůř než spolužáci, kteří chatbota neměli. Druhá skupina pracovala s chatbotem, který místo řešení dával nápovědy. Při procvičování se zlepšila o 127 % a ve zkoušce obstála stejně jako kontrolní skupina. K podobnému závěru došla [OECD ve zprávě Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html): obecné nástroje zvyšují výkon v úloze, tato výhoda však mizí, jakmile žáci AI k dispozici nemají. Trvalé zlepšení přinášejí nástroje navržené s pedagogickým záměrem.

AI může žákům ubírat také přemýšlení o vlastní práci. Ve [studii se 117 vysokoškoláky](https://arxiv.org/abs/2412.09315) zlepšila skupina s ChatGPT svou esej nejvíc. Ve znalostech a v jejich přenosu na jiný úkol se ale od ostatních nelišila a svou práci sama méně průběžně vyhodnocovala. Autoři tento jev nazývají metakognitivní leností. Záleží i na pořadí. Podle [předběžné studie MIT](https://arxiv.org/abs/2506.08872) s malým vzorkem si účastníci, kteří psali nejdřív sami a AI použili až potom, ze svého textu vybavovali víc. Opačný postup vedl k nižšímu zapojení.

Opatrnost je namístě také u nápadů. [Povídky psané s nápady od AI](https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532) považovali hodnotitelé za kreativnější, navzájem si ale byly podobnější.

Promyšlený návrh naopak funguje. [Harvardští studenti fyziky](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/) se s AI tutorem postaveným na zásadách aktivního učení naučili víc za kratší čas než v aktivní výuce ve třídě. Slibné je i učení vysvětlováním: žák, který látku vysvětluje „nechápavému“ chatbotu, se jí zabývá hlouběji. S jazykovými modely to zatím potvrzují [jen malé studie](https://arxiv.org/abs/2412.15226). Použitelná je také zpětná vazba od AI, vyučujícího ale nenahradí. [Při posuzování 200 žákovských esejí](https://doi.org/10.1016/j.learninstruc.2024.101894) získal ChatGPT na pětibodové škále kvality 3,6, zkušení hodnotitelé 4,0.

Užitečné vodítko pro plánování výuky nabízejí [Ethan a Lilach Mollickovi](https://arxiv.org/abs/2306.10052). Doporučují rozlišovat, v jaké roli AI vystupuje: jako tutor, kouč, mentor, spoluhráč, nástroj, simulátor, nebo žák. Každá role má své přínosy i svá rizika.

## Z čeho vycházíme

- [4 kroky ke smysluplnému učení s AI](https://digitalizace.rvp.cz/clanky/4-kroky-ke-smysluplnemu-uceni-s-ai), Národní pedagogický institut ČR a AI dětem
- [AI Assessment Scale](https://aiassessmentscale.com/), Mike Perkins, Leon Furze, Jasper Roe a Jason MacVaugh
- [Assigning AI: Seven Approaches for Students, with Prompts](https://arxiv.org/abs/2306.10052), Ethan Mollick a Lilach Mollick
- Metodiky vzdělávacích chatbotů v aplikaci Tiny, AI dětem
