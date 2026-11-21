# Kľúč na tvorbu vzdelávacích cieľov podľa Novej taxonómie

Kontext pre AI nástroje, ktoré majú hromadne navrhovať vzdelávacie ciele ku konceptom v mape. Vychádza z knihy Marzano, R. J. & Kendall, J. S. (2007): *The New Taxonomy of Educational Objectives* (2. vyd., Corwin Press) a zo štýlu formulácií, ktorý používame v AI dětem.

Kniha nemá zoznam slovies ako Bloomova taxonómia. Slovesá v tomto dokumente sme odvodili z opisov úloh v kapitolách 4 a 5. Pravidlá štýlu, kontext učenia a výstupný formát sú naše.

---

## Pokyn pre AI

> Si skúsený didaktik. Navrhuješ vzdelávacie ciele podľa Novej taxonómie (Marzano & Kendall) ku konceptom, ktoré ti zadám. Riaď sa týmto dokumentom. Pri každom koncepte najprv urč dimenziu, potom pre každú požadovanú úroveň vyber najvhodnejší proces a napíš cieľ podľa pravidiel štýlu v kapitole 3. Ku každému cieľu pridaj kontext učenia a kritérium splnenia. Pred odovzdaním prejdi kontrolný zoznam v kapitole 11 a ciele, ktoré ho nesplnia, prepíš. Nepoužívaj Bloomovu taxonómiu ani jej úrovne (zapamätať si, aplikovať, tvoriť…).

**Čo odo mňa dostaneš:** názov konceptu, jeho krátky opis, prípadne predmet a výkon z kurikulárneho dokumentu (ŠVP, ŠkVP), ročník alebo stupeň a čo presne chcem vygenerovať.

**Čo mi vrátiš, ak nepoviem inak:** šesť cieľov na koncept, jeden na každú úroveň 1–6. Pri každom proces, dimenziu, dva varianty kontextu učenia a kritérium. Formát podľa kapitoly 10.

**Dva režimy.** Keď ťa požiadam o **tvorbu** cieľov, postupuj podľa kapitol 1–12. Keď ťa požiadam o **analýzu** existujúcej formulácie (výkon zo ŠVP, cieľ z učebnice alebo od vyučujúceho), postupuj podľa kapitoly 14. Pri analýze nehodnoť štýl a nepoužívaj pravidlá z kapitoly 3. Tie platia len pre ciele, ktoré píšeme my.

---

## 1. Cieľ a kontext učenia

**Vzdelávací cieľ** hovorí, čo žiak s vedomosťou urobí. Má dve časti:

- **proces**, teda čo žiak v hlave alebo rukami robí (porovná, vysvetlí, vykoná, stanoví si cieľ…),  
- **vedomosť**, s ktorou to robí (pojem, princíp, postup, zručnosť).

Samotná téma („šifrovanie“) cieľom nie je. Cieľom je až „Žiak vysvetlí, akú úlohu má pri šifrovaní algoritmus a akú kľúč.“

**Kontext učenia** je konkrétna situácia, materiál alebo téma, v ktorej žiak cieľ napĺňa. Cieľ zostáva rovnaký a kontexty sa menia. Vďaka tomu je cieľ krátky a všeobecný a konkrétnosť nesie kontext.

> **Cieľ:** Žiak pomocou systematického ladenia sprevádzkuje nefunkčnú hru. **Kontext učenia:** hra v Scratchi, ktorá občas spadne · webová hra, v ktorej nereaguje tlačidlo

Kniha pracuje so *vzdelávacími cieľmi*. Podmienky a výkonnostnú latku (koľko a ako dobre) do cieľa nepíšeme. Patria do kontextu a kritéria.

---

## 2. Model: tri dimenzie × šesť úrovní

Každý cieľ je priesečníkom jednej **dimenzie** (s akou vedomosťou žiak pracuje) a jednej **úrovne** (ako ju spracúva). Spolu tvoria kváder 3 × 6.

### 2.1 Dimenzie

| Dimenzia | Čo sem patrí | Typy |
| :---- | :---- | :---- |
| **Deklaratívne vedomosti** (Information) | Vedomosť o tom, *čo* platí. Nedá sa vykonať. | **Detaily:** pojmy, fakty, časové slede. **Organizujúce myšlienky:** zovšeobecnenia, princípy. |
| **Myšlienkové postupy** (Mental procedures) | Vedomosť o tom, *ako* sa niečo robí. Postupy, ktoré žiak vykonáva v hlave. | **Zručnosti:** jednoduché pravidlá, algoritmy, taktiky; praxou sa zautomatizujú. **Procesy (makropostupy):** zložité postupy ako písanie textu, návrh aplikácie, ladenie programu; treba ich zakaždým vedome riadiť. |
| **Psychomotorické zručnosti** (Psychomotor procedures) | Pohybové postupy. Učia sa rovnako ako myšlienkové: najprv ako opis, potom sa praxou zdokonaľujú, nakoniec „idú samy“. | **Zručnosti:** základné schopnosti (obratnosť prstov) a jednoduché kombinácie (hod na kôš). **Procesy:** zložité kombinácie (písanie všetkými desiatimi, spájkovanie, hra v tíme). |

**Rozhodovacia otázka:** Dá sa to *vykonať*? Áno: ide o postup (myšlienkový, alebo pohybový). Nie, dá sa to len vedieť, rozpoznať alebo vysvetliť: ide o deklaratívnu vedomosť.

**Pozor:** Postup, ktorý žiak zatiaľ vie len opísať, je preňho v skutočnosti deklaratívnou vedomosťou. Opis postupu preukazuje vedomosť *o* postupe. Zvládnutie preukáže až vykonanie.

Jeden koncept často zahŕňa viac dimenzií. „Dvojková sústava“ je deklaratívna vedomosť (prečo ju počítač používa) aj myšlienkový postup (prevod čísla). Každý cieľ však mieri len na **jednu** dimenziu. Dimenziu uveď pri každom cieli zvlášť.

**Dimenziu určuje vedomosť, s ktorou žiak pracuje, nie jeho činnosť.**

- Keď žiak *vysvetľuje* postup (integrácia) alebo hľadá chyby v jeho vykonaní, dimenzia zostáva **postup**. Príklad: „Žiak vysvetlí princíp písania všetkými desiatimi…“ patrí k psychomotorickým zručnostiam.  
- Keď žiak na úrovni 4 použije princíp ako podklad pre pokus alebo rozhodnutie, dimenzia je **deklaratívna vedomosť** (napríklad pokus s fotosyntézou).  
- Pri úrovniach 5 a 6 uveď dimenziu vedomosti, o ktorej žiak premýšľa. Stanovenie cieľa v zlepšení ladenia je teda myšlienkový postup.

### 2.2 Úrovne a procesy

Úrovne nie sú zoradené podľa náročnosti, ale podľa toho, koľko vedomej kontroly žiak potrebuje. Náročnosť cieľa určuje zložitosť vedomosti a kontextu, nie úroveň.

**1 Vybavovanie** (Retrieval) · procesy: rozpoznanie, vybavenie, vykonanie

*Čo to je:* Žiak si vedomosť vybaví v podobe, v akej sa ju naučil. Spozná správne tvrdenie, sám ho sformuluje alebo vykoná naučený postup. Vybavovanie je prenos vedomosti z dlhodobej pamäti do pracovnej, kde s ňou človek môže vedome pracovať.

*Ako sa overuje:* Testom s výberom odpovede, otázkou na to, čo sa preberalo, alebo úlohou, v ktorej žiak vykoná postup bez podstatných chýb.

**2 Porozumenie** (Comprehension) · procesy: integrácia, symbolizácia

*Čo to je:* Žiak si vedomosť usporiada do celku a prepojí ju s tým, čo už vie. Odlíši podstatné od nepodstatného a jadro vyjadrí vlastnými slovami alebo znázorní. Porozumenie prevádza vedomosť do úspornej podoby, v ktorej sa uloží do dlhodobej pamäti.

*Ako sa overuje:* Zhrnutím vlastnými slovami, opisom toho, čo je podstatné, pri postupe opisom krokov a toho, prečo idú v tomto poradí. Alebo schémou či grafom, ktorý vedomosť presne zachytáva.

**3 Analýza** (Analysis) · procesy: porovnávanie, triedenie, analýza chýb, zovšeobecňovanie, špecifikácia

*Čo to je:* Žiak z toho, čo vie, vyvodzuje niečo nové, čo doteraz nevedel. Porovnáva, triedi, hľadá chyby, zovšeobecňuje a domýšľa dôsledky. Na tejto úrovni žiak tieto činnosti vykonáva vedome a dôsledne, a vedomosť tým mení a spresňuje.

*Ako sa overuje:* Úlohou, ktorá sa nedá vyriešiť zopakovaním, napríklad porovnaním, zaradením do kategórie, hľadaním chýb, odvodením pravidla z príkladov alebo predpoveďou, čo sa stane, keď… Žiak pritom zdôvodní svoj postup.

**4 Použitie vedomostí** (Knowledge Utilization) · procesy: rozhodovanie, riešenie problému, experimentovanie, skúmanie

*Čo to je:* Žiak použije, čo vie a dokáže, na splnenie konkrétnej úlohy. Rozhoduje sa medzi možnosťami, rieši problém, overuje hypotézu pokusom alebo zo zdrojov skúma, prečo sa niečo stalo alebo čo by sa stalo, keby… Práve v konkrétnej úlohe sa vedomosť stáva užitočnou.

*Ako sa overuje:* Praktickou úlohou alebo projektom, ktorý sa bez danej vedomosti nedá splniť. Žiak dospeje k výsledku a vysvetlí, ako mu k nemu vedomosť pomohla.

**5 Metakognícia** (Metacognition) · procesy: stanovenie cieľov, sledovanie priebehu, sledovanie jasnosti, sledovanie presnosti

*Čo to je:* Žiak riadi vlastné učenie. Stanoví si cieľ a plán a sleduje a vyhodnocuje, či má potrebné vedomosti a zručnosti na splnenie cieľa. Metakognícia je možná len vtedy, keď má žiak dostatočný záujem na splnení cieľa (ja-systém).

*Ako sa overuje:* Cieľom s plánom, ktorý žiak zapíše alebo inak vytvorí či oznámi, priebežným opisom toho, čo mu ide a čo zmení, alebo sebahodnotením, v ktorom presne pomenuje, čomu nerozumie, a zdrojom doloží, čo má správne.

**6 Ja-systém** (Self-system · motivácia) · procesy: dôležitosť, vlastná účinnosť, emočná reakcia, motivácia

*Čo to je:* Žiak skúma, čo ho k učeniu vedie, alebo od neho odrádza. Zvažuje, aké dôležité je preňho učivo, či verí, že má schopnosti a možnosti sa ho naučiť, aké emócie v ňom vyvoláva a čo z toho najviac ovplyvňuje jeho motiváciu. Ja-systém tvoria postoje, presvedčenia a emócie, ktoré rozhodujú, či sa žiak do učenia pustí a koľko doň vloží energie.

*Ako sa overuje:* Reflexiou, v ktorej žiak pomenuje svoj postoj, vysvetlí, z čoho vychádza, a posúdi, aká rozumná je jeho úvaha. Cieľom nie je postoj zmeniť, ale porozumieť mu. Hodnotí sa premyslenosť úvahy, nie miera motivácie.

---

## 3. Ako cieľ napísať

### 3.1 Šablóna

> **Žiak** + **sloveso** (proces) + **vedomosť** [+ nevyhnutná podmienka]

Kniha používa „Žiak dokáže + infinitív“. My píšeme rovno sloveso v 3. osobe.

### 3.2 Pravidlá štýlu

1. **Začni slovom „Žiak“ a pokračuj slovesom v 3. osobe jednotného čísla**, najlepšie dokonavým: uvedie, vysvetlí, nakreslí, porovná, vyberie, posúdi. Nedokonavé sloveso len tam, kde ide o priebežnú činnosť: „sleduje“.  
2. **Nepíš „dokáže“, „vie“, „je schopný“, „zvládne“ + infinitív.** Nepoužívaj nepozorovateľné slovesá: pozná, vie, rozumie, chápe, uvedomí si, naučí sa, oboznámi sa.  
3. **Zvratné „si/sa“ patrí hneď za „Žiak“:** „Žiak si stanoví…“, nie „Žiak stanoví si…“.  
4. **Jedno hlavné sloveso.** Druhé len vtedy, keď je súčasťou toho istého výkonu: „zhodnotí postup … a navrhne zlepšenie“, „vysvetlí princíp … a opíše jeho výhody“. Nikdy tri.  
5. **Stručne.** Orientačne do 15 slov, dlhý názov konceptu sa nepočíta. Žiadna vata („v rámci“, „na základe získaných poznatkov“).  
6. **Všeobecne, nie scenárom.** Konkrétna situácia, materiál, nástroj alebo príbeh patria do kontextu učenia. Namiesto „hru, ktorá občas spadne“ napíš „nefunkčnú hru“, namiesto „triednych dát“ napíš „dát“. V cieli však zostáva **nevyhnutná podmienka**, teda to, čo určuje samotný proces a platí všeobecne: hľadisko porovnania („podľa spotrebovaných látok“), podmienka pri špecifikácii („keď sa zväčší veľkosť obrázkov“), kritériá pri rozhodovaní („podľa vopred stanovených kritérií“). Rozlišovacia otázka: Zmenil by sa proces, keby som to vynechal? Áno: je to podmienka a patrí do cieľa. Nie, len by sa zmenila situácia: je to scenár a patrí do kontextu.  
7. **Vedomosť pomenuj.** Cieľ musí dávať zmysel aj vytrhnutý z mapy. Stačí stručne: „pri ladení“, „o šifrovaní“, „písania všetkými desiatimi“.  
8. **Ukotvi v konkrétnosti tam, kde je to podstata procesu:** „na konkrétnom príklade“, „pre svoju konkrétnu potrebu“, „konkrétneho programu“.  
9. **„Svoj“ patrí len do úrovní 5 a 6**, kde ide o žiakovu vlastnú vedomosť, cieľ alebo postoj („svojich tvrdení“, „svoju schopnosť“, „pre svoju potrebu“). Na úrovniach 1–4 ho vynechaj („postupu pri ladení“, nie „svojho postupu pri ladení“).  
10. **Meradlo kvality len tam, kde je súčasťou procesu:** „bez podstatných chýb“ pri vykonaní, „podľa vopred stanovených kritérií“ pri rozhodovaní. Inak kvalitu nesie kritérium.  
11. **Perspektíva žiaka, nie vyučujúceho.** Nie „Vyučujúci predstaví…“, ale „Žiak vysvetlí…“.  
12. **Jeden cieľ = jeden proces = jedna dimenzia.**

### 3.3 Pred a po (skutočné úpravy z našej praxe)

| Pôvodná formulácia | Upravená | Čo sa zmenilo |
| :---- | :---- | :---- |
| Žiak dokáže nakresliť vývojový diagram svojho postupu pri ladení. | Žiak nakreslí vývojový diagram postupu pri ladení. | preč „dokáže“ a zbytočné „svojho“ |
| Žiak dokáže posúdiť, aké dôležité je preňho rozumieť šifrovaniu, a zhodnotiť, či jeho úvaha dáva zmysel. | Žiak zhodnotí dôležitosť vedomostí o šifrovaní pre svoju konkrétnu potrebu. | jedno sloveso, kratšie |
| Žiak dokáže nájsť chybu v postupe spolužiaka, ktorý mení niekoľko vecí naraz. | Žiak zhodnotí postup ladenia spolužiaka a navrhne zlepšenie. | scenár presunutý do kontextu |
| Žiak stanoví si cieľ a plán zlepšenia v ladení programov. | Žiak si stanoví cieľ a plán zlepšenia v ladení konkrétneho programu. | slovosled „si“, ukotvenie v konkrétnosti |
| Žiak vyberie vhodné zabezpečenie na zdieľanie triednych dát podľa vopred stanovených kritérií. | Žiak vyberie vhodné zabezpečenie na zdieľanie dát podľa vopred stanovených kritérií. | všeobecnejšie |
| Žiak pomocou systematického ladenia sprevádzkuje hru, ktorá občas spadne. | Žiak pomocou systematického ladenia sprevádzkuje nefunkčnú hru. | všeobecnejšie |
| Žiak posúdi pravdivosť tvrdenia „zámok v prehliadači znamená, že web je bezpečný“. | Žiak posúdi pravdivosť tvrdenia „heslo je bezpečné“ na konkrétnom príklade. | kratšie tvrdenie, ukotvenie v príklade |
| Žiak vysvetlí, prečo sa prsty pri písaní všetkými desiatimi vracajú do základného radu. | Žiak vysvetlí princíp písania všetkými desiatimi a opíše jeho výhody. | celok namiesto jedného detailu |
| Žiak experimentálne overí, či je pri nácviku písania všetkými desiatimi účinnejší krátky denný tréning, alebo jeden dlhý. | Žiak experimentálne overí, aký spôsob tréningu písania všetkými desiatimi je preňho najúčinnejší. | kratšie, hypotéza do kontextu |

---

## 4. Procesy: vzory a slovesá

Vzor zodpovedá všeobecnej forme cieľa z knihy (obr. 5.1). Za [vedomosť] dosaď konkrétny koncept. Slovesá sú orientačné. **Proces neurčuje sloveso, ale to, čo úloha od žiaka skutočne chce** (pozri kapitolu 6).

### Úroveň 1: Vybavovanie

| Proces | Čo žiak robí | Vzor | Slovesá |
| :---- | :---- | :---- | :---- |
| **Rozpoznanie** | Overí správnosť predložených tvrdení o tom, čo sa preberalo. Sám ich vytvoriť nemusí. | Žiak rozpozná správne tvrdenia o [vedomosti]. | rozpozná, vyberie správne, priradí, označí |
| **Vybavenie** | Sám uvedie, čo sa preberalo. Pri postupe opíše jeho povahu a účel, nie vykonanie. | Žiak uvedie [vlastnosti, príklady, účel] [vedomosti]. | uvedie, vymenuje, pomenuje, definuje, opíše |
| **Vykonanie** | Vykoná postup bez podstatnej chyby. Nemusí vedieť, prečo postup funguje. **Len pri postupoch.** | Žiak [vykoná postup] (bez podstatných chýb). | vykoná, vypočíta, prevedie, zostaví, napíše, opraví, nastaví |

### Úroveň 2: Porozumenie

| Proces | Čo žiak robí | Vzor | Slovesá |
| :---- | :---- | :---- | :---- |
| **Integrácia** | Vyjadrí jadro vedomosti vlastnými slovami a odlíši podstatné od nepodstatného. Pri princípe opíše vzťah medzi premennými, pri postupe logiku krokov a ich poradie. | Žiak vysvetlí [princíp / štruktúru / logiku krokov] [vedomosti]. | vysvetlí, zhrnie, opíše vlastnými slovami, odlíši podstatné od nepodstatného |
| **Symbolizácia** | Presne znázorní vedomosť (schéma, graf, vývojový diagram, model) a zachytí v nej podstatné prvky. | Žiak znázorní [vedomosť] [formou]. | znázorní, nakreslí, vytvorí schému / graf / vývojový diagram / myšlienkovú mapu, zostaví model |

### Úroveň 3: Analýza

| Proces | Čo žiak robí | Vzor | Slovesá |
| :---- | :---- | :---- | :---- |
| **Porovnávanie** | Určí dôležité podobnosti a rozdiely podľa podstatných znakov. | Žiak porovná [A] a [B] podľa [hľadiska]. | porovná, určí podobnosti a rozdiely, odlíši |
| **Triedenie** | Zaradí vedomosť do nadradenej kategórie, prípadne určí podkategórie, a zdôvodní to. | Žiak zaradí [vedomosť] do [kategórie] a zdôvodní zaradenie. | zaradí, roztriedi, určí kategóriu, usporiada |
| **Analýza chýb** | Pri deklaratívnych vedomostiach posúdi, či je tvrdenie pravdivé a podložené. Pri postupoch nájde chyby vo vykonaní. | Žiak posúdi pravdivosť tvrdenia o [vedomosti]. / Žiak určí chyby vo [vykonaní postupu]. | posúdi pravdivosť, odhalí, určí chyby, zhodnotí postup a navrhne zlepšenie |
| **Zovšeobecňovanie** | Z konkrétnych príkladov alebo dát vyvodí nové všeobecné pravidlo a obháji ho. | Žiak z [príkladov / dát] vyvodí všeobecné pravidlo o [vedomosti]. | vyvodí, sformuluje pravidlo, odvodí záver |
| **Špecifikácia** | Z pravidla alebo princípu vyvodí, čo sa stane za určitých podmienok. **Nie pri detailoch.** | Žiak predpovie, ako sa [vedomosť] prejaví, keď [podmienka]. | predpovie, odvodí dôsledok, určí, čo sa stane, keď… |

### Úroveň 4: Použitie vedomostí

Každý proces má dva varianty: vedomosť sa buď **použije** na riešenie, alebo sa rieši úloha **o** vedomosti samotnej. Pri postupoch musí byť úloha postavená tak, aby ju žiak bez daného postupu nevyriešil.

| Proces | Čo žiak robí | Vzor | Slovesá |
| :---- | :---- | :---- | :---- |
| **Rozhodovanie** | Vyberá medzi možnosťami, ktoré spočiatku vyzerajú podobne, podľa kritérií. | Žiak vyberie [najvhodnejšiu možnosť] podľa [kritérií]. | vyberie, rozhodne sa, zvolí, odporučí |
| **Riešenie problému** | Dosiahne cieľ, ktorému stojí v ceste prekážka alebo obmedzenie. | Žiak pomocou [vedomosti] vyrieši [problém]. | vyrieši, sprevádzkuje, navrhne riešenie, prispôsobí |
| **Experimentovanie** | Vytvorí hypotézu a overí ju pozorovaním alebo meraním. | Žiak experimentálne overí, [hypotéza o vedomosti]. | experimentálne overí, otestuje, navrhne a vykoná pokus |
| **Skúmanie** | Hľadá odpoveď na otázku o minulosti, prítomnosti alebo budúcnosti (Čo sa stalo? Prečo? Čo by sa stalo, keby…?) zo zdrojov a cudzích tvrdení a záver podloží argumentmi. | Žiak na základe zdrojov preskúma, [otázka]. | preskúma, dohľadá a vyhodnotí zdroje, obháji záver |

### Úroveň 5: Metakognícia

| Proces | Čo žiak robí | Vzor | Slovesá |
| :---- | :---- | :---- | :---- |
| **Stanovenie cieľov** | Stanoví si konkrétny cieľ a plán (kroky, časový rámec, zdroje). | Žiak si stanoví cieľ a plán zlepšenia v [vedomosti]. | si stanoví cieľ a plán, naplánuje |
| **Sledovanie priebehu** | Počas práce sleduje, ako sa blíži k stanovenému cieľu, a upravuje postup. | Žiak počas [činnosti] sleduje plnenie stanoveného cieľa. | sleduje, vyhodnocuje priebežne |
| **Sledovanie jasnosti** | Presne pomenuje, čomu nerozumie alebo v čom si nie je istý. | Žiak pomenuje, čomu v [vedomosti] nerozumie. | pomenuje nejasnosti, určí, čomu nerozumie |
| **Sledovanie presnosti** | Overí svoje tvrdenie alebo postup vo vonkajšom zdroji. | Žiak overí správnosť svojich tvrdení o [vedomosti] v dôveryhodnom zdroji. | overí, porovná so zdrojom, doloží |

### Úroveň 6: Ja-systém

| Proces | Čo žiak robí | Vzor | Slovesá |
| :---- | :---- | :---- | :---- |
| **Dôležitosť** | Určí, aká dôležitá je preňho vedomosť, a posúdi svoje dôvody. | Žiak zhodnotí dôležitosť [vedomosti] pre svoju konkrétnu potrebu. | zhodnotí dôležitosť, určí dôležitosť |
| **Vlastná účinnosť** | Posúdi, nakoľko verí, že má schopnosti a možnosti sa zlepšiť, a na čom to stojí. | Žiak posúdi svoju schopnosť zlepšiť sa v [vedomosti]. | posúdi svoju schopnosť |
| **Emočná reakcia** | Pomenuje emócie, ktoré s vedomosťou spája, a ich príčinu. Cieľom je emócii porozumieť, nie ju zmeniť. | Žiak pomenuje emócie spojené s [vedomosťou] a ich príčinu. | pomenuje emócie, určí príčinu |
| **Motivácia** | Zváži dôležitosť, vlastnú účinnosť aj emócie a určí, čo jeho motiváciu ovplyvňuje najviac. | Žiak určí, čo najviac ovplyvňuje jeho motiváciu zlepšiť sa v [vedomosti]. | určí, čo ovplyvňuje motiváciu |

---

## 5. Čo platí pre ktorú dimenziu

| Úroveň | Deklaratívne vedomosti | Myšlienkové a psychomotorické postupy |
| :---- | :---- | :---- |
| **1** | Len rozpoznanie a vybavenie. **Vykonanie neexistuje.** | Rozpoznanie a vybavenie preukazujú len vedomosť *o* postupe. Skutočné zvládnutie preukáže **vykonanie**, preto ho pri postupoch uprednostni. |
| **2** | Integrácia: podstatné vs. nepodstatné, pri princípe vzťah premenných. Integrácia pri detailoch len vtedy, keď majú štruktúru (napríklad sled udalostí). Symbolizácia: schéma, graf. | Integrácia: kroky, ich poradie a logika. Symbolizácia: vývojový diagram, schéma postupu. |
| **3** | Analýza chýb: pravdivosť a podloženosť tvrdenia. **Špecifikácia len pri zovšeobecneniach a princípoch**, nie pri detailoch. | Analýza chýb: chyby vo vykonaní. Triedenie pri zručnostiach: len nadradená kategória. Špecifikácia: ako sa postup zmení za iných podmienok. |
| **4** | Vedomosť slúži ako podklad alebo kritérium rozhodnutia či riešenia. | Postup je nástroj, bez ktorého sa úloha nedá vyriešiť. Pri psychomotorike ide pri rozhodovaní väčšinou o voľbu najvhodnejšej zručnosti. |
| **5** | Sledovanie priebehu: ako sa porozumenie vyvíja v čase. Hodí sa sledovanie jasnosti a presnosti. | Sledovanie priebehu: v reálnom čase počas vykonávania. Hodí sa stanovenie cieľov a sledovanie priebehu. |
| **6** | Rovnaké pre všetky dimenzie. | Rovnaké pre všetky dimenzie. |

---

## 6. Slovesá, ktoré zvádzajú k omylu

Pri Novej taxonómii rozhoduje o úrovni to, čo úloha od žiaka skutočne chce, nie samotné sloveso. Tieto slovesá sa vyskytujú na viacerých úrovniach:

| Sloveso | Úroveň 1 | Vyššia úroveň |
| :---- | :---- | :---- |
| **vysvetlí** | zopakuje prebraný výklad (vybavenie) | vyjadrí jadro vlastnými slovami a odlíši podstatné (integrácia, úr. 2) |
| **uvedie príklady** | **predvolený výklad:** príklady, ktoré sa preberali alebo ktoré žiak pozná zo svojho okolia (vybavenie) | len keď formulácia výslovne chce nové príklady, ktoré sa nepreberali, a žiak na ne musí použiť všeobecné pravidlo (úr. 3) |
| **odpovie, vyslovuje odpovede** | odpovie spamäti (vybavenie), alebo vyčíta odpoveď zo zadaných dát naučeným postupom (vykonanie) | odpoveď vyžaduje porovnanie, záver alebo predpoveď (úr. 3) |
| **rozpozná** | vyberie alebo potvrdí prebrané tvrdenie (rozpoznanie) | odhalí chybu, manipuláciu alebo chybnú interpretáciu v novom materiáli (analýza chýb, úr. 3) |
| **určí / posúdi** | overí prebrané tvrdenie (rozpoznanie) | posúdi nové tvrdenie podľa kritérií (analýza chýb, úr. 3) |
| **opraví** | opraví chybu naučeným postupom (vykonanie) | zhodnotí cudzí postup a navrhne zlepšenie (analýza chýb, úr. 3) |
| **vyberie** | vyberie správnu odpoveď (rozpoznanie) | vyberie najlepšiu možnosť podľa kritérií (rozhodovanie, úr. 4) |
| **zhodnotí** | — | posúdi postup alebo tvrdenie (analýza chýb, úr. 3), alebo dôležitosť pre seba (dôležitosť, úr. 6) |

**Predvolený výklad je vždy najnižšia úroveň, ktorú formulácia pripúšťa.** Vyššiu úroveň priraď, len keď ju formulácia výslovne vyžaduje: nové alebo neznáme príklady, výber podľa kritérií, zdôvodnenie, porovnanie, predpoveď, vlastný postoj.

Pri tvorbe cieľa formuluj tak, aby bolo zrejmé, čo žiak robí (prebrané × nové, cudzie × vlastné, jedna správna odpoveď × výber podľa kritérií).

---

## 7. Kontext učenia

- Ku každému cieľu navrhni **dva varianty** kontextu (ak nechcem inak).  
- Kontext je **konkrétna situácia, materiál alebo téma**: hra v Scratchi, správa o úniku hesiel, vlastné heslo, video z tréningu.  
- Pri rozpoznaní a vybavení je kontextom téma alebo materiál, na ktorom sa vedomosť preberala (izbová rastlina na okne, stolový počítač v učebni).  
- Varianty majú byť **rôzne**: škola × bežný život, rôzne nástroje, rôzne odbory.  
- Kontext musí cieľ skutočne umožniť. Pri úrovni 4 musí obsahovať voľbu, prekážku, hypotézu alebo otvorenú otázku. Pri úrovni 5 a 6 ide o žiakovu vlastnú prácu alebo situáciu.  
- Kontext je **primeraný veku** zadaného ročníka. Bez výslovného zadania nevolíme znepokojujúce témy: násilie, smrť a tragédie, sebapoškodzovanie, sexualitu, drogy, kyberšikanovanie konkrétnych ľudí.  
- Keď kontext pracuje s AI alebo online nástrojom, predpokladaj nástroj, ktorý škola pre daný vek schválila. Nepracuj s podobou skutočných osôb.  
- Úrovne 5 a 6 nesmú od žiaka chcieť, aby zdieľal súkromné alebo citlivé informácie. Reflexiu môže žiak zapísať len pre seba (denník učenia) a zdieľa ju, len ak chce.

---

## 8. Kritérium splnenia

Ku každému cieľu napíš **stručne, jednu vetu, najviac dve**: podľa čoho spoznáme, že žiak cieľ splnil. Opíš pozorovateľný prejav, nie latku v percentách. Kritérium nesmie predpokladať neúspech: žiak môže uspieť na prvýkrát.

| Úrovne | Čo kritérium hodnotí |
| :---- | :---- |
| 1–2 | správnosť a presnosť výsledku |
| 3–4 | aj kvalitu úvahy: žiak ju musí ukázať, zdôvodniť alebo vysvetliť |
| 5–6 | kvalitu sebareflexie: konkrétnosť, doloženie, posúdenie vlastnej úvahy. **Nehodnotí, akú emóciu alebo akú veľkú motiváciu žiak má.** |

| Proces | Kritérium musí overiť |
| :---- | :---- |
| Rozpoznanie | správne potvrdí alebo vyvráti predložené tvrdenia |
| Vybavenie | uvedie správne údaje, ktoré sa preberali |
| Vykonanie | vykoná postup bez podstatnej chyby |
| Integrácia | vyjadrí jadro, odlíši podstatné od nepodstatného; pri postupe kroky, poradie a jeho logiku |
| Symbolizácia | znázornenie je presné a zachytáva podstatné prvky |
| Porovnávanie | porovnáva podľa podstatných znakov, podobnosti aj rozdiely opíše presne |
| Triedenie | určí znaky, zaradí do kategórie a zdôvodní |
| Analýza chýb | pomenuje chybu a vysvetlí, prečo je to chyba |
| Zovšeobecňovanie | pravidlo sedí na všetky príklady, žiak uvedie prípadné výnimky |
| Špecifikácia | použije správne pravidlo a z neho vyvodí dôsledok |
| Rozhodovanie | určí možnosti a kritériá a vyberie možnosť, ktorá ich spĺňa najlepšie |
| Riešenie problému | pomenuje prekážku, vyskúša riešenie a v prípade neúspechu ho upraví; vysvetlí, ako mu vedomosť pomohla |
| Experimentovanie | predpoveď vychádza z princípu, pokus ju skutočne testuje, záver zodpovedá výsledku |
| Skúmanie | odlíši, čo je známe a čo sporné, záver podloží argumentmi zo zdrojov |
| Stanovenie cieľov | cieľ je konkrétny a overiteľný, plán má kroky, časový rámec a zdroje |
| Sledovanie priebehu | počas práce opisuje, čo funguje, čo nie a čo zmení |
| Sledovanie jasnosti | presne pomenuje, čo mu nie je jasné, prípadne konkrétne opíše, ktoré časti má jasné a ako to vie |
| Sledovanie presnosti | svoj úsudok doloží vonkajším zdrojom |
| Dôležitosť, vlastná účinnosť, emočná reakcia, motivácia | pomenuje svoj postoj, vysvetlí, na čom stojí, a posúdi, aká rozumná je jeho úvaha |

---

## 9. Postup generovania

1. **Urč dimenziu a typ vedomosti** konceptu (kapitola 2.1). Keď koncept zahŕňa deklaratívnu vedomosť aj postup, rozhodni pri každom cieli zvlášť.  
2. **Pre každú úroveň vyber jeden proces**, ktorý je pre koncept najprirodzenejší:  
   - **Úroveň 1:** pri postupoch vykonanie, pri deklaratívnych vedomostiach vybavenie (pri jednoduchých faktoch rozpoznanie).  
   - **Úroveň 2:** integrácia. Symbolizácia tam, kde má vedomosť prirodzenú vizuálnu podobu (postup, sled, štruktúra, vzťah premenných).  
   - **Úroveň 3:** pojmy → porovnávanie alebo triedenie; tvrdenia a princípy → analýza chýb alebo špecifikácia; postupy → analýza chýb alebo porovnávanie; dáta a príklady → zovšeobecňovanie.  
   - **Úroveň 4:** voľba medzi možnosťami → rozhodovanie; prekážka → riešenie problému; overiteľná hypotéza → experimentovanie; otázka „prečo / čo keby“ riešená zo zdrojov → skúmanie.  
   - **Úroveň 5:** pri postupoch stanovenie cieľov alebo sledovanie priebehu, pri deklaratívnych vedomostiach sledovanie jasnosti alebo presnosti.  
   - **Úroveň 6:** ktorýkoľvek zo štyroch procesov. Pri generovaní viacerých konceptov procesy striedaj.  
3. **Skontroluj obmedzenia** z kapitoly 5.  
4. **Napíš cieľ** podľa šablóny a pravidiel štýlu (kapitola 3).  
5. **Pridaj dva kontexty učenia** a **kritérium**.  
6. **Prejdi kontrolný zoznam** (kapitola 11) a oprav, čo nesedí.  
7. Pri generovaní viacerých konceptov stráž **pestrosť**. Prednosť má však vždy proces, ktorý sa ku konceptu hodí najviac. Striedaj len medzi procesmi, ktoré sedia rovnako dobre.

---

## 10. Výstupný formát

### Na čítanie (predvolený)

```
### Ladenie programu
Hlavná dimenzia: myšlienkové postupy (proces) · Predmet: informatika · Ročník: 6.–7.

| Úr. | Proces | Dimenzia | Cieľ | Kontext učenia | Kritérium |
|---|---|---|---|---|---|
| 1 | vykonanie | myšlienkové postupy | Žiak opraví chybu v krátkom programe. | program v Scratchi s vymenenými blokmi · skript v Pythone s chybou v podmienke | Program po oprave funguje podľa zadania a oprava nezaniesla novú chybu. |
```

Stĺpec **Dimenzia** uvádzaj vždy, aj keď je pri všetkých cieľoch rovnaká. Predmet a ročník uveď, ak som ich zadal(a).

### Na import do mapy (YAML, na vyžiadanie)

Kľúče a technické názvy v YAML sa neprekladajú (zostávajú bez diakritiky, ako ich očakáva import); po slovensky sú len texty.

```
- koncept: Ladenie programu
  predmet: informatika              # voliteľné
  cile:
    - uroven: 1                     # 1–6
      proces: provedeni             # bez diakritiky, pozri Názvy pre YAML
      dimenze: myslenkove-postupy   # deklarativni-znalosti | myslenkove-postupy | psychomotoricke-dovednosti
      text: "Žiak opraví chybu v krátkom programe."
      kontext_uceni:
        - "Program v Scratchi s vymenenými blokmi"
        - "Skript v Pythone s chybou v podmienke"
      kriterium: "Program po oprave funguje podľa zadania a oprava nezaniesla novú chybu."
      rocnik: 6                     # voliteľné
```

### Na kontrolu existujúcich cieľov

Tento formát je pre ciele, ktoré píšeme my a ktoré majú spĺňať náš štýl. Výkony zo ŠVP a cudzie ciele analyzuj podľa kapitoly 14.

```
**Pôvodný cieľ:** Žiak dokáže pochopiť, ako funguje internet.
**Úroveň / proces / dimenzia:** 2 Porozumenie / integrácia / deklaratívne vedomosti (odhad zámeru)
**Čo nesedí:** bod 1 („dokáže“, nepozorovateľné „pochopiť“), bod 10 (nedá sa napísať kritérium)
**Nová formulácia:** Žiak vysvetlí princíp prenosu dát internetom.
```

- Keď sloveso proces neurčuje („pochopí“, „uvedomí si“), odhadni zámer a napíš, že ide o odhad.  
- Keď je cieľ dvojznačný, uveď obidva varianty a ku každému navrhni formuláciu.  
- Keď cieľ spája viac procesov alebo dimenzií, rozdeľ ho na viac cieľov.  
- Keď cieľ kontrolou prejde, napíš „bez úprav“ a prípadne len odporúčanie.  
- Kontext a kritérium pridávaj, len keď o ne požiadam.

### Názvy pre YAML

Názvy úrovní: `vybavovani`, `porozumeni`, `analyza`, `pouziti-znalosti`, `metakognice`, `ja-system`. Názvy procesov: `rozpoznani`, `vybaveni`, `provedeni`, `integrace`, `symbolizace`, `porovnavani`, `trideni`, `analyza-chyb`, `zobecnovani`, `specifikace`, `rozhodovani`, `reseni-problemu`, `experimentovani`, `zkoumani`, `stanoveni-cilu`, `sledovani-prubehu`, `sledovani-jasnosti`, `sledovani-presnosti`, `dulezitost`, `vlastni-ucinnost`, `emocni-reakce`, `motivace`.

---

## 11. Kontrolný zoznam

Každý cieľ musí prejsť všetkými bodmi. Keď neprejde, prepíš ho.

1. Začína „Žiak“ a slovesom v 3. osobe? Nie je tam „dokáže“, „vie“, „pozná“, „rozumie“?  
2. Stojí „si/sa“ hneď za „Žiak“?  
3. Má jedno hlavné sloveso (najviac dve, ak ide o jeden výkon)?  
4. Je krátky (orientačne do 15 slov) a bez vaty? Je „svoj“ len na úrovni 5 alebo 6?  
5. Je pomenovaná vedomosť, ale bez scenára? Scenár je v kontexte a v cieli zostala len nevyhnutná podmienka?  
6. Zodpovedá sloveso procesu, ku ktorému je cieľ priradený (kapitola 6)?  
7. Sedí proces k dimenzii (kapitola 5)? Žiadne vykonanie pri deklaratívnej vedomosti, žiadna špecifikácia pri detailoch?  
8. Pri úrovni 4: je postup pre úlohu nevyhnutný a je jasné, o aký typ úlohy ide (voľba, prekážka, hypotéza, otázka)?  
9. Pri úrovni 5 a 6: týka sa cieľ žiakovej vlastnej vedomosti alebo zručnosti?  
10. Je cieľ pozorovateľný a dá sa k nemu napísať kritérium?  
11. Je primeraný zadanému ročníku (zložitosťou vedomosti a kontextu, nie úrovňou)?

---

## 12. Vzorové príklady

### 12.1 Kváder Novej taxonómie (informatika)

| Úroveň | Deklaratívne vedomosti: šifrovanie | Myšlienkové postupy: ladenie programu | Psychomotorické zručnosti: písanie všetkými desiatimi |
| :---- | :---- | :---- | :---- |
| **1** | Žiak uvedie, na čo slúži šifrovací kľúč. *(vybavenie)* | Žiak opraví chybu v krátkom programe. *(vykonanie)* | Žiak napíše text všetkými desiatimi bez podstatných chýb. *(vykonanie)* |
| **2** | Žiak vysvetlí, akú úlohu má pri šifrovaní algoritmus a akú kľúč. *(integrácia)* | Žiak nakreslí vývojový diagram postupu pri ladení. *(symbolizácia)* | Žiak vysvetlí princíp písania všetkými desiatimi a opíše jeho výhody. *(integrácia)* |
| **3** | Žiak posúdi pravdivosť tvrdenia „heslo je bezpečné“ na konkrétnom príklade. *(analýza chýb)* | Žiak zhodnotí postup ladenia spolužiaka a navrhne zlepšenie. *(analýza chýb)* | Žiak na videozázname určí chyby v technike písania všetkými desiatimi. *(analýza chýb)* |
| **4** | Žiak vyberie vhodné zabezpečenie na zdieľanie dát podľa vopred stanovených kritérií. *(rozhodovanie)* | Žiak pomocou systematického ladenia sprevádzkuje nefunkčnú hru. *(riešenie problému)* | Žiak experimentálne overí, aký spôsob tréningu písania všetkými desiatimi je preňho najúčinnejší. *(experimentovanie)* |
| **5** | Žiak overí správnosť svojich tvrdení o šifrovaní v dôveryhodnom zdroji. *(sledovanie presnosti)* | Žiak si stanoví cieľ a plán zlepšenia v ladení konkrétneho programu. *(stanovenie cieľov)* | Žiak počas tréningu písania sleduje plnenie stanoveného cieľa. *(sledovanie priebehu)* |
| **6** | Žiak zhodnotí dôležitosť vedomostí o šifrovaní pre svoju konkrétnu potrebu. *(dôležitosť)* | Žiak posúdi svoju schopnosť zlepšiť sa v ladení programov. *(vlastná účinnosť)* | Žiak určí dôležitosť písania všetkými desiatimi pre svoju konkrétnu potrebu. *(dôležitosť)* |

### 12.2 Kompletný výstup pre jeden koncept

**Ladenie programu** · Hlavná dimenzia: myšlienkové postupy (proces) · Predmet: informatika · Ročník: 6.–7.

| Úr. | Proces | Dimenzia | Cieľ | Kontext učenia | Kritérium |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | vykonanie | myšlienkové postupy | Žiak opraví chybu v krátkom programe. | program v Scratchi s vymenenými blokmi · skript v Pythone s chybou v podmienke | Program po oprave funguje podľa zadania a oprava nezaniesla novú chybu. |
| 2 | symbolizácia | myšlienkové postupy | Žiak nakreslí vývojový diagram postupu pri ladení. | ladenie hry v Scratchi · ladenie kalkulačky v Pythone | Diagram zachytáva podstatné kroky (vyvolanie chyby, odhad príčiny, zmena jednej veci, overenie) v správnom poradí. |
| 3 | analýza chýb | myšlienkové postupy | Žiak zhodnotí postup ladenia spolužiaka a navrhne zlepšenie. | záznam spolužiaka, ktorý mení niekoľko vecí naraz · spolužiak, ktorý opravuje bez opakovaného spustenia | Pomenuje chybu v postupe, vysvetlí, prečo bráni nájsť príčinu, a navrhne lepší krok. |
| 4 | riešenie problému | myšlienkové postupy | Žiak pomocou systematického ladenia sprevádzkuje nefunkčnú hru. | hra v Scratchi, ktorá občas spadne · webová hra, v ktorej nereaguje tlačidlo | Hra funguje a žiak opíše, ako ho postup ladenia doviedol k príčine. |
| 5 | stanovenie cieľov | myšlienkové postupy | Žiak si stanoví cieľ a plán zlepšenia v ladení konkrétneho programu. | vlastný projekt hry · domáca úloha v Pythone | Cieľ je konkrétny a overiteľný, plán má kroky, časový rámec a zdroje. |
| 6 | vlastná účinnosť | myšlienkové postupy | Žiak posúdi svoju schopnosť zlepšiť sa v ladení programov. | po dokončení projektu · na začiatku programovacieho bloku | Uvedie, nakoľko verí, že má schopnosti a možnosti sa zlepšiť, vysvetlí prečo a posúdi, či je jeho úvaha rozumná. |

### 12.3 Mimo informatiky: medián (podľa príkladu z knihy)

Kniha ukazuje, že pri jednej téme sa dimenzie môžu striedať. Medián je deklaratívna vedomosť (čo to je), jeho výpočet je myšlienkový postup.

| Úr. | Proces | Dimenzia | Cieľ |
| :---- | :---- | :---- | :---- |
| 1 | rozpoznanie | deklaratívne vedomosti | Žiak rozpozná správne tvrdenia o mediáne. |
| 1 | vykonanie | myšlienkové postupy | Žiak vypočíta medián súboru hodnôt. |
| 2 | integrácia | deklaratívne vedomosti | Žiak opíše určujúce vlastnosti mediánu. |
| 3 | porovnávanie | deklaratívne vedomosti | Žiak porovná medián, aritmetický priemer a modus. |
| 4 | riešenie problému | myšlienkové postupy | Žiak vyrieši úlohu, ktorá vyžaduje výpočet a interpretáciu mediánu. |

---

## 13. Ako zadať úlohu

**Jeden koncept, celá sada:**

> Vygeneruj ciele pre koncept „Dvojková sústava“ (Opis: Spôsob zápisu čísel pomocou 0 a 1, ktorý používajú počítače. Ročník: 7.). Výstup na čítanie.

**Viac konceptov naraz, len niektoré úrovne:**

> Vygeneruj ciele pre tieto koncepty, len úrovne 1–4, výstup v YAML: [zoznam konceptov s opismi].

**Kontrola existujúcich cieľov:**

> Skontroluj tieto ciele podľa kontrolného zoznamu. Pri každom urč úroveň, proces a dimenziu a navrhni lepšiu formuláciu, ak je potrebná: [zoznam cieľov].

**Analýza výkonu zo ŠVP:**

> Analyzuj tento výkon zo ŠVP podľa kapitoly 14. Ročník: [ročník]. Výkon: [výkon].

**Analýza výkonu zo ŠVP a návrh cieľov:**

> Analyzuj tento výkon zo ŠVP podľa kapitoly 14 a ku každému výkonu navrhni cieľ podľa kapitol 3 a 9. Ročník: [ročník]. Výkon: [výkon].

---

## 14. Analýza existujúcich formulácií

Analýza je iná úloha ako tvorba. Formuláciu neopravuješ, ale zisťuješ, kam v kvádri mieri.

### 14.1 Zásady

- **Štýl nehodnoť.** Výkony z kurikulárnych dokumentov (ŠVP, v Česku RVP) sa citujú doslovne a majú vlastný štýl. Nedokonavé slovesá („vyslovuje“, „rozpoznáva“, „pracuje“) opisujú opakovaný výkon a úroveň neovplyvňujú.  
- **Úroveň určuje výkon, nie sloveso** (kapitola 6).  
- **Predvolený výklad je najnižšia úroveň, ktorú formulácia pripúšťa.** Vyššiu úroveň priraď len vtedy, keď ju formulácia výslovne vyžaduje. Nepredpokladaj náročnejšiu úlohu, než aká z textu vyplýva.  
- **Ročník úroveň neurčuje, ale pomáha s výkladom.** Keď formulácia pripúšťa viac výkladov, zvoľ ten, ktorý zodpovedá bežnému vyučovaniu v danom ročníku.  
- **Rozhodni sa.** Pri každom výkone uveď jednu hlavnú klasifikáciu. Alternatívu uveď len vtedy, keď je rozumná, a napíš, čo by ju vyvolalo.

### 14.2 Postup

1. **Rozlož formuláciu na výkony.** Výkon je sloveso, ktorého podmetom je žiak. Výkonové formulácie často spájajú viac výkonov čiarkou alebo spojkou „a“.  
2. **Slovesá vo vedľajších vetách a prívlastkoch nie sú výkony.** Opisujú vedomosť. V spojení „dáta, ktoré mu môžu pomôcť lepšie sa rozhodnúť“ sa žiak nerozhoduje. Len uvádza dáta určitého druhu.  
3. **Doplňujúce sloveso toho istého výkonu neklasifikuj zvlášť.** Vo „vyvodí závery a vysvetlí, ako k nim dospel“ je vysvetlenie súčasťou zovšeobecňovania: žiak svoj záver obhajuje.  
4. Pri každom výkone urč **dimenziu**, teda s akou vedomosťou žiak pracuje (kapitola 2.1).  
5. Urč **úroveň a proces** podľa tabuľky 14.3. Začni od najnižšieho riadku, ktorý formulácii zodpovedá.  
6. Zapíš výsledok vo formáte 14.4.

### 14.3 Signály úrovní

| Čo formulácia od žiaka chce | Úroveň / proces |
| :---- | :---- |
| vybrať alebo potvrdiť správne tvrdenie z ponuky | 1 rozpoznanie |
| uviesť, vymenovať alebo opísať to, čo sa preberalo alebo čo pozná zo svojho okolia | 1 vybavenie |
| vykonať naučený postup vrátane vyčítania údaja zo zadanej tabuľky, grafu alebo mapy | 1 vykonanie |
| vyjadriť podstatu vlastnými slovami, vysvetliť, ako alebo prečo niečo funguje, opísať logiku krokov | 2 integrácia |
| znázorniť (schéma, graf, diagram, model) | 2 symbolizácia |
| porovnať, zaradiť, nájsť chybu, posúdiť nové tvrdenie, odhaliť manipuláciu, vyvodiť záver alebo pravidlo, predpovedať dôsledok | 3 analýza (proces podľa kapitoly 4) |
| vybrať podľa kritérií, vyriešiť problém s prekážkou, overiť hypotézu, preskúmať otázku zo zdrojov | 4 použitie vedomostí |
| stanoviť si cieľ, sledovať vlastný postup, pomenovať vlastné nejasnosti, overiť vlastné tvrdenie | 5 metakognícia |
| posúdiť vlastný postoj: dôležitosť, vieru v zlepšenie, emócie, motiváciu | 6 ja-systém |

**Vybavenie × vykonanie:** odpoveď spamäti je vybavenie. Odpoveď, ktorú žiak získa zo zadaného materiálu naučeným postupom (napríklad prečíta z tabuľky), je vykonanie. Oboje je úroveň 1.

### 14.4 Výstupný formát

```
**Formulácia:** …
**Ročník:** …

| Výkon (citácia) | Dimenzia | Úroveň | Proces | Zdôvodnenie |
|---|---|---|---|---|
| … | … | … | … | jedna veta |

**Slovesá, ktoré nie sú výkonom:** „…“ a prečo
**Alternatívny výklad:** len ak je rozumný, a čo by ho vyvolalo
**Návrh cieľov:** len na vyžiadanie, podľa kapitol 3 a 9
```

### 14.5 Kalibračné príklady

Formulácie v týchto príkladoch sú preložené očakávané výstupy z českého RVP (informatika); slúžia len na ilustráciu postupu analýzy.

**Formulácia:** uvedie príklady dát, ktoré ho obklopujú a ktoré mu môžu pomôcť lepšie sa rozhodnúť, vyslovuje odpovede na základe dát **Ročník:** 1. stupeň

| Výkon (citácia) | Dimenzia | Úroveň | Proces | Zdôvodnenie |
| :---- | :---- | :---- | :---- | :---- |
| uvedie príklady dát, ktoré ho obklopujú | deklaratívne vedomosti | 1 | vybavenie | Žiak uvádza dáta, ktoré pozná z vyučovania a zo svojho okolia. Nové príklady vymýšľať nemusí. |
| vyslovuje odpovede na základe dát | myšlienkové postupy | 1 | vykonanie | Žiak vyčíta odpoveď zo zadaných dát naučeným postupom. |

**Slovesá, ktoré nie sú výkonom:** „môžu pomôcť lepšie sa rozhodnúť“ opisuje, aké dáta má žiak uviesť. Žiak sa nerozhoduje. **Alternatívny výklad:** Keby úloha chcela nové príklady, ktoré sa nepreberali, alebo odpovede vyžadujúce porovnanie či záver, išlo by o úroveň 3.

**Formulácia:** prečíta dáta z modelu, tabuľky, diagramu, grafu (1. stupeň)

| Výkon | Dimenzia | Úroveň | Proces | Zdôvodnenie |
| :---- | :---- | :---- | :---- | :---- |
| prečíta dáta z modelu, tabuľky, diagramu, grafu | myšlienkové postupy | 1 | vykonanie | Čítanie údajov z tabuľky alebo grafu je naučený postup, ktorý žiak vykonáva. |

**Formulácia:** vyvodí závery na základe dát a vysvetlí, ako k nim dospel (1. stupeň)

| Výkon | Dimenzia | Úroveň | Proces | Zdôvodnenie |
| :---- | :---- | :---- | :---- | :---- |
| vyvodí závery na základe dát a vysvetlí, ako k nim dospel | deklaratívne vedomosti | 3 | zovšeobecňovanie | Žiak z konkrétnych údajov vyvodzuje nové všeobecné tvrdenie. Vysvetlenie je obhajobou záveru, nie samostatným výkonom. |

**Formulácia:** rozpozná chybné interpretácie dát vrátane bežných spôsobov možnej manipulácie (2. stupeň)

| Výkon | Dimenzia | Úroveň | Proces | Zdôvodnenie |
| :---- | :---- | :---- | :---- | :---- |
| rozpozná chybné interpretácie dát | deklaratívne vedomosti | 3 | analýza chýb | Žiak posudzuje pravdivosť nových tvrdení o dátach. „Rozpozná“ tu neznamená výber prebraného tvrdenia. |

**Alternatívny výklad:** Keby žiak len v teste označoval prebrané typy manipulácie, išlo by o úroveň 1, rozpoznanie.
