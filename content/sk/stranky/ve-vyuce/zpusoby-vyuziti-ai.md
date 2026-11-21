---
title: Spôsoby využitia AI vo vyučovaní
menu: Chatboty vo vyučovaní
poradi: 2
popis: Desať spôsobov, ako zapojiť generatívnu AI do vyučovania tak, aby žiakom pomáhala premýšľať. Čo robí žiak, čo AI a hodnotiace kritérium.
aktualizovano: 2026-11-21
tlacitko: { text: AI aplikácia Tiny, href: /ve-vyuce/tiny }
stav: ke-kontrole   # slovenský preklad; před zveřejněním: ověřit čísla ze studií v původních článcích; věta o 4 krocích jen o návaznosti (s NPI nedohodnuto)
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

# Spôsoby využitia AI vo vyučovaní

Desať spôsobov, ako zapojiť generatívnu AI do vyučovania tak, aby žiakom pomáhala premýšľať a nepremýšľala za nich.

Chatbot vie za chvíľu napísať osnovu, vyriešiť príklad alebo zhrnúť kapitolu. Práve preto záleží na tom, akú prácu mu vo vyučovaní zveríte a akú necháte žiakom. Spôsoby na tejto stránke sú zoradené podľa toho, čo pri nich robí žiak: od vybavovania si učiva cez skúmanie súvislostí a posudzovanie až po vlastnú tvorbu.

Pri každom spôsobe nájdete, čo robí žiak a čo AI, kedy sa spôsob hodí a kedy nie, a hodnotiace kritérium, podľa ktorého spoznáte, že sa žiak naozaj niečo naučil.

Spôsoby sú určené pre 2. stupeň základných škôl a pre stredné školy. Generatívnu AI odporúčame využívať hlavne so staršími žiakmi, ktorí už dokážu posúdiť, či im nástroj v učení pomáha. Stránka nadväzuje na rámec [4 kroky ke smysluplnému učení s AI](https://digitalizace.rvp.cz/clanky/4-kroky-ke-smysluplnemu-uceni-s-ai) (v češtine), ktorý vznikol v spolupráci Národného pedagogického inštitútu ČR a AI dětem.

## Ako si vybrať

Vychádzajte z cieľa hodiny, nie z nástroja. Pozrite sa na sloveso, ktorým sa cieľ začína, a podľa neho zvoľte skupinu.

| Skupina | Cieľ hodiny znie | Spôsoby |
| --- | --- | --- |
| Žiak si vybavuje a vysvetľuje | vybaví si, opíše, vysvetlí vlastnými slovami | Opakovanie · Spoločné objavovanie · Vysvetľovanie |
| Žiak skúma súvislosti | použije, porovná pohľady, odvodí dôsledky | Rozhovor v role · Čo keby |
| Žiak posudzuje | posúdi, zdôvodní, vyvráti, nájde chybu | Argumentácia · Hľadanie chýb |
| Žiak tvorí | navrhne, naplánuje, vylepší vlastnú prácu | Brainstorming · Plánovanie a štruktúra · Spätná väzba |

Ak s AI v triede začínate, vyberte si najprv niektorý spôsob zo skupiny Žiak si vybavuje a vysvetľuje. Náročnejšie spôsoby zaraďujte postupne.

Aktivity stačia krátke, na 5 až 15 minút, a majú nadväzovať na výklad, diskusiu alebo prácu s textom. Každý spôsob môžete vyskúšať v [aplikácii Tiny](/ve-vyuce/tiny), kde je pripravený ako vzdelávací chatbot, alebo v bežnom chatbote s promptom z [katalógu promptov](/prompty).

## Žiak si vybavuje a vysvetľuje

<!-- komponenta: karty způsobů -->

### Opakovanie {#opakování}

**Žiak si vybavuje učivo a hneď zisťuje, čo už vie a kde má medzery.**

- **Čo robí žiak:** Odpovedá na otázky, ktoré sa postupne sťažujú, a opravuje vlastné chyby.
- **Čo robí AI:** Kladie po jednej otázke. Pri chybe sa vráti o krok späť a napovie.
- **Hodí sa, keď** cieľ znie „žiak si vybaví“, „vymenuje“ alebo „opíše“.
- **Nehodí sa, keď** učivo sa ešte len preberá a žiak nemá z čoho čerpať.
- **Ako spoznáte, že sa žiak učí:** Zvládne náročnejšie otázky ako na začiatku a dokáže povedať, čo si potrebuje zopakovať.
- **Otázka na reflexiu:** Na ktorú otázku by som nabudúce odpovedal bez nápovedy?
- **Príklad:** Opakovanie slovných druhov pred štvrťročnou písomnou prácou.
- **Kde to spustiť:** V Tiny [Opakovací parťák](https://www.tiny.school/opakovaci-partak/) alebo [Testovací chatbot](https://www.tiny.school/testovaci-chatbot/), v bežnom chatbote prompt [Opakovanie](/funkce/prompty/zaci/opakovani).

### Spoločné objavovanie {#společné-objevování}

**Žiak dospieva k novému poznatku vlastným uvažovaním.**

- **Čo robí žiak:** Hľadá súvislosti a formuluje ich vlastnými slovami.
- **Čo robí AI:** Namiesto výkladu kladie návodné otázky a nadväzuje na to, čo žiak povedal.
- **Hodí sa, keď** cieľ znie „žiak vysvetlí“, „objasní“ alebo „nájde súvislosť“.
- **Nehodí sa, keď** téma stojí na faktoch, ktoré žiak nemôže odvodiť, napríklad na letopočtoch alebo názvosloví.
- **Ako spoznáte, že sa žiak učí:** Zhrnie nový poznatok vlastnými slovami bez pomoci chatbota.
- **Otázka na reflexiu:** Na čo som prišiel sám a kde ma chatbot naviedol?
- **Príklad:** Prečo sa na Zemi striedajú ročné obdobia.
- **Kde to spustiť:** V Tiny [Společné objevování](https://www.tiny.school/spolecne-objevovani/), v bežnom chatbote prompt [Spoločné objavovanie](/funkce/prompty/zaci/spolecne-objevovani).

### Vysvetľovanie {#vysvětlování}

**Žiak učí chatbota, ktorý učivu nerozumie, a tým si ho sám ujasňuje.**

- **Čo robí žiak:** Vysvetľuje tému jednoducho, volí príklady a reaguje na doplňujúce otázky.
- **Čo robí AI:** Hrá zvedavého, ale nechápavého poslucháča a dopytuje sa na nejasné miesta.
- **Hodí sa, keď** cieľ znie „žiak vysvetlí vlastnými slovami“ alebo „uvedie príklad“.
- **Nehodí sa, keď** žiak sa s učivom stretáva prvýkrát.
- **Ako spoznáte, že sa žiak učí:** Jeho vysvetlenie je vecne správne, zrozumiteľné a obstojí aj pri doplňujúcich otázkach.
- **Otázka na reflexiu:** Čo sa mi vysvetľovalo najťažšie a čo to hovorí o tom, ako učivu rozumiem?
- **Príklad:** Fotosyntéza vysvetlená niekomu, kto nikdy nevidel rastlinu.
- **Kde to spustiť:** V Tiny [Zvědavý mimoň](https://www.tiny.school/zvedavy-mimon/), v bežnom chatbote prompt [Vysvetľovanie](/funkce/prompty/zaci/vysvetlovani).

## Žiak skúma súvislosti

<!-- komponenta: karty způsobů -->

### Rozhovor v role {#rozhovor-v-roli}

**Žiak vedie rozhovor s osobnosťou, odborníkom alebo s javom, ktorý hovorí sám za seba.**

- **Čo robí žiak:** Pripraví si otázky, vedie rozhovor a odpovede porovnáva s učebnicou alebo iným zdrojom.
- **Čo robí AI:** Hovorí v prvej osobe za historickú postavu, odborníka alebo napríklad za bunku či rieku.
- **Hodí sa, keď** cieľ znie „žiak opíše z inej perspektívy“, „porovná pohľady“ alebo „zasadí do kontextu“.
- **Nehodí sa, keď** žiak nemá možnosť odpovede overiť.
- **Ako spoznáte, že sa žiak učí:** Kladie premyslené otázky a všimne si nepresnosť alebo rozdiel oproti zdroju.
- **Otázka na reflexiu:** Čomu z rozhovoru verím a podľa čoho?
- **Príklad:** Rozhovor s Máriou Teréziou o školskej reforme alebo s kvapkou vody o kolobehu vody.
- **Kde to spustiť:** V Tiny [Historická postava / Expert](https://www.tiny.school/historicka-postava-expert/) a [V hlavní roli…](https://www.tiny.school/v-hlavni-roli/), v bežnom chatbote prompt [Rozhovor v role](/funkce/prompty/zaci/rozhovor-v-roli).

### Čo keby {#co-kdyby}

**Žiak domýšľa, čo by sa stalo, keby sa jedna vec zmenila.**

- **Čo robí žiak:** Reťazí príčiny a dôsledky a svoje úvahy zdôvodňuje.
- **Čo robí AI:** Navrhne hypotetickú zmenu a pýta sa, čo z nej vyplýva.
- **Hodí sa, keď** cieľ znie „žiak odvodí dôsledky“, „vysvetlí príčinu“ alebo „použije poznatok v novej situácii“.
- **Nehodí sa, keď** žiakom chýbajú základné vedomosti a zostávalo by im len hádať.
- **Ako spoznáte, že sa žiak učí:** Jeho reťazec úvah je logický a opiera sa o učivo.
- **Otázka na reflexiu:** Ktorý z mojich záverov stojí na vedomostiach a ktorý na odhade?
- **Príklad:** Čo keby zemská os nebola naklonená.
- **Kde to spustiť:** V Tiny [Co kdyby…](https://www.tiny.school/co-kdyby/), v bežnom chatbote prompt [Čo keby](/funkce/prompty/zaci/co-kdyby).

## Žiak posudzuje

<!-- komponenta: karty způsobů -->

### Argumentácia {#argumentace}

**Žiak obhajuje stanovisko proti oponentovi, ktorý sa nedá len tak odbiť.**

- **Čo robí žiak:** Formuluje tvrdenia, dokladá ich a reaguje na protiargumenty.
- **Čo robí AI:** Oponuje, žiada dôkazy a upozorní na argumentačný klam.
- **Hodí sa, keď** cieľ znie „žiak obháji“, „zdôvodní“ alebo „vyvráti“.
- **Nehodí sa, keď** ide o fakty, o ktorých sa nediskutuje, alebo o tému, ktorá je pre žiakov osobne citlivá.
- **Ako spoznáte, že sa žiak učí:** Uvádza dôkazy, vyrovná sa s protiargumentom a pomenuje najslabšie miesto vlastnej pozície.
- **Otázka na reflexiu:** Ktorý protiargument ma prinútil názor zmeniť alebo spresniť?
- **Príklad:** Majú byť mobilné telefóny cez prestávky zakázané?
- **Kde to spustiť:** V Tiny [Argumentační partner](https://www.tiny.school/argumentacni-partner/), v bežnom chatbote prompt [Argumentácia](/funkce/prompty/zaci/argumentace).

### Hľadanie chýb {#hledání-chyb}

**Žiak kontroluje text, v ktorom AI zámerne robí chyby.**

- **Čo robí žiak:** Chyby nájde, pomenuje, opraví a vysvetlí, prečo sú chybné.
- **Čo robí AI:** Vytvorí vierohodný text so zámernými vecnými, logickými alebo jazykovými chybami.
- **Hodí sa, keď** cieľ znie „žiak posúdi“, „overí“ alebo „opraví“.
- **Nehodí sa, keď** žiaci učivo nepoznajú natoľko, aby chybu spoznali.
- **Ako spoznáte, že sa žiak učí:** Nájde podstatné chyby a vie zdôvodniť, prečo ide o chybu.
- **Otázka na reflexiu:** Ktorú chybu som prehliadol a prečo pôsobila vierohodne?
- **Príklad:** Odsek o slnečnej sústave s tromi chybami.
- **Kde to spustiť:** V Tiny [Chybující chatbot](https://www.tiny.school/chybujici-chatbot/), v bežnom chatbote prompt [Hľadanie chýb](/funkce/prompty/zaci/hledani-chyb).

## Žiak tvorí

<!-- komponenta: karty způsobů -->

### Brainstorming

**Žiak zbiera a triedi nápady, AI mu ich pomáha rozšíriť otázkami.**

- **Čo robí žiak:** Spíše vlastné nápady, potom ich s AI rozširuje, triedi a jeden vyberie.
- **Čo robí AI:** Pýta sa, ponúka ďalšie uhly pohľadu a upozorňuje na slepé miesta. Hotové nápady nepridáva.
- **Hodí sa, keď** cieľ znie „žiak navrhne“ alebo „nájde viac riešení“.
- **Nehodí sa, keď** hodnotíte pôvodnosť nápadu alebo keď má trieda dospieť k rozmanitým riešeniam.
- **Ako spoznáte, že sa žiak učí:** Má zoznam nápadov pred rozhovorom aj po ňom a svoj výber zdôvodní.
- **Otázka na reflexiu:** Ktorý nápad je môj a ku ktorému by som sa bez AI nedostal?
- **Príklad:** Námety na triedny projekt ku Dňu Zeme.
- **Kde to spustiť:** V Tiny [Parťák pro brainstorming](https://www.tiny.school/partak-pro-brainstorming/), v bežnom chatbote prompt [Brainstorming](/funkce/prompty/zaci/brainstorming).

### Plánovanie a štruktúra {#plánování-a-struktura}

**Žiak si rozvrhne prácu alebo osnovu skôr, ako začne tvoriť.**

- **Čo robí žiak:** Navrhne osnovu či postup, rozdelí úlohu na kroky a odhadne čas.
- **Čo robí AI:** Dopytuje sa na medzery, na poradie a na to, či je plán reálny.
- **Hodí sa, keď** cieľ znie „žiak naplánuje“, „usporiada“ alebo „navrhne postup“.
- **Nehodí sa, keď** samostatne hodnotíte práve stavbu textu alebo plánovanie.
- **Ako spoznáte, že sa žiak učí:** Predloží prvý návrh aj konečnú verziu a vysvetlí, čo zmenil a prečo.
- **Otázka na reflexiu:** Čo som v pláne podcenil?
- **Príklad:** Osnova referátu alebo harmonogram skupinového projektu.
- **Kde to spustiť:** V Tiny [Chatbot pro plánování](https://www.tiny.school/chatbot-pro-planovani/), v bežnom chatbote prompt [Plánovanie a štruktúra](/funkce/prompty/zaci/planovani-a-struktura).

### Spätná väzba {#zpětná-vazba}

**Žiak porovnáva vlastné hodnotenie svojej práce s hodnotením AI a rozhoduje, čo upraví.**

- **Čo robí žiak:** Najprv posúdi prácu podľa kritérií sám, potom ju porovná so spätnou väzbou od AI a vyberie úpravy.
- **Čo robí AI:** Posúdi prácu podľa kritérií, ktoré zadal vyučujúci, a navrhne, na čo sa zamerať.
- **Hodí sa, keď** cieľ znie „žiak zhodnotí vlastnú prácu“ alebo „vylepší ju“.
- **Nehodí sa, keď** žiaci kritériá nepoznajú alebo keď ide o hotovú prácu na klasifikáciu.
- **Ako spoznáte, že sa žiak učí:** Odovzdá verziu pred úpravou aj po nej a zdôvodní, ktoré rady prijal a ktoré odmietol.
- **Otázka na reflexiu:** V čom sa moje hodnotenie líšilo od hodnotenia AI a kto z nás mal pravdu?
- **Príklad:** Rozpracovaná úvaha posúdená podľa kritérií z hodiny slohu.
- **Kde to spustiť:** V bežnom chatbote prompt [Spätná väzba](/funkce/prompty/zaci/zpetna-vazba).

## Ku každému spôsobu patrí reflexia {#ke-každému-způsobu-patří-reflexe}

Na konci aktivity nechajte žiakov krátko zhodnotiť, či im AI pomohla. Stačí jedna alebo dve otázky, ústne alebo na lístok:

- Pomohla mi AI niečomu porozumieť, alebo len rýchlejšie skončiť?
- Čo by som nabudúce urobil bez nej?
- Kedy som odpovedi chatbota veril a kedy som si ju overil?

Žiaci sa tak učia rozhodovať, kedy im AI v učení pomáha a kedy nie. To je zručnosť, ktorú budú potrebovať aj mimo školy.

## Kedy AI nepoužiť

Vyučovanie bez AI je plnohodnotná voľba. Ak cieľ hodiny stojí na zručnosti, ktorú by chatbot prevzal, AI nezaraďujte. Platí to napríklad vtedy, keď chcete vidieť, ako žiak sám stavia text, počíta alebo formuluje myšlienku. Pomôže jednoduchá otázka: kto bude pri tejto aktivite premýšľať?

## Čo hovoria výskumy

Doterajšie výskumy sa zhodujú v jednom: o tom, či AI žiakom pomôže, nerozhoduje samotný nástroj, ale spôsob, akým s ním pracujú.

Lepší výkon s AI ešte neznamená, že sa žiak niečo naučil. V [experimente s takmer tisíckou tureckých stredoškolákov](https://doi.org/10.1073/pnas.2422633122) riešili žiaci so všeobecným chatbotom cvičné úlohy z matematiky o 48 % úspešnejšie. V skúške bez AI však dopadli o 17 % horšie ako spolužiaci, ktorí chatbota nemali. Druhá skupina pracovala s chatbotom, ktorý namiesto riešenia dával nápovedy. Pri precvičovaní sa zlepšila o 127 % a v skúške obstála rovnako ako kontrolná skupina. K podobnému záveru dospela [OECD v správe Digital Education Outlook 2026](https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html): všeobecné nástroje zvyšujú výkon v úlohe, táto výhoda však mizne, len čo žiaci AI k dispozícii nemajú. Trvalé zlepšenie prinášajú nástroje navrhnuté s pedagogickým zámerom.

AI môže žiakom uberať aj premýšľanie o vlastnej práci. V [štúdii so 117 vysokoškolákmi](https://arxiv.org/abs/2412.09315) zlepšila skupina s ChatGPT svoju esej najviac. Vo vedomostiach a v ich prenose na inú úlohu sa však od ostatných nelíšila a svoju prácu sama menej priebežne vyhodnocovala. Autori tento jav nazývajú metakognitívnou lenivosťou. Záleží aj na poradí. Podľa [predbežnej štúdie MIT](https://arxiv.org/abs/2506.08872) s malou vzorkou si účastníci, ktorí písali najprv sami a AI použili až potom, zo svojho textu vybavovali viac. Opačný postup viedol k nižšiemu zapojeniu.

Opatrnosť je namieste aj pri nápadoch. [Poviedky písané s nápadmi od AI](https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532) považovali hodnotitelia za kreatívnejšie, navzájom si však boli podobnejšie.

Premyslený návrh naopak funguje. [Harvardskí študenti fyziky](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/) sa s AI tútorom postaveným na zásadách aktívneho učenia naučili viac za kratší čas ako pri aktívnom vyučovaní v triede. Sľubné je aj učenie vysvetľovaním: žiak, ktorý učivo vysvetľuje „nechápavému“ chatbotu, sa ním zaoberá hlbšie. S jazykovými modelmi to zatiaľ potvrdzujú [len malé štúdie](https://arxiv.org/abs/2412.15226). Použiteľná je aj spätná väzba od AI, vyučujúceho však nenahradí. [Pri posudzovaní 200 žiackych esejí](https://doi.org/10.1016/j.learninstruc.2024.101894) získal ChatGPT na päťbodovej škále kvality 3,6, skúsení hodnotitelia 4,0.

Užitočné vodidlo na plánovanie vyučovania ponúkajú [Ethan a Lilach Mollickovci](https://arxiv.org/abs/2306.10052). Odporúčajú rozlišovať, v akej role AI vystupuje: ako tútor, kouč, mentor, spoluhráč, nástroj, simulátor alebo žiak. Každá rola má svoje prínosy aj svoje riziká.

## Z čoho vychádzame

- [4 kroky ke smysluplnému učení s AI](https://digitalizace.rvp.cz/clanky/4-kroky-ke-smysluplnemu-uceni-s-ai) (v češtine), Národný pedagogický inštitút ČR a AI dětem
- [AI Assessment Scale](https://aiassessmentscale.com/), Mike Perkins, Leon Furze, Jasper Roe a Jason MacVaugh
- [Assigning AI: Seven Approaches for Students, with Prompts](https://arxiv.org/abs/2306.10052), Ethan Mollick a Lilach Mollick
- Metodiky vzdelávacích chatbotov v aplikácii Tiny (v češtine), AI dětem
