# Otevřené otázky (k rozhodnutí Evy a týmu)

## Rozhodnuto

- **7. 11. 2026 — Systémové prompty a znalosti zůstávají v Google Docs / na Google Disku.** Učitelé je stahují odtud (GitHub je pro běžného učitele zbytečně odstrašující). Web u každého skillu odkazuje na Google Doc se systémovým promptem a na znalostní soubory na Disku. ZIP skillu obsahuje jen `SKILL.md` a `references/` (skill funguje i bez znalostních souborů). Jak se drží Google Doc a `SKILL.md` ve shodě, popisuje `docs/architektura.md`, sekce „Google Docs“.
- **7. 11. 2026 — Databáze promptů zůstává** na stránce *Funkce → Prompty* včetně starších promptů z roku 2024; skills mají vlastní katalog na *Funkce → Skills*.
- **7. 11. 2026 — Všechny znalostní soubory jsou veřejné** včetně Katalogu aktivizačních metod a Příručky aktivizační výuky (Didaktický rádce).
- **8. 11. 2026 — Design schválen** (plátno Claude Design, pravidla v `docs/design.md`). Stránka promptů se jmenuje *Katalog promptů*, skupiny Pro učitele / Pro vedení školy / Pro žáky.
- **8. 11. 2026 — Starší prompty 2024 se v katalogu nezobrazují**, dokud je Eva s Coworkem neprojde; jejich stránky zůstávají kvůli starým odkazům.
- **8. 11. 2026 — Hosting zatím GitHub Pages** z větve `main`. Před přepnutím domény rozhodnout definitivně (GitHub Pages neumí skutečná přesměrování 301, jen přesměrovací stránky).
- **7. 11. 2026 — Souhlasy autorů** (Šárka Polanecká, Jan Jílek, AI reaktor UJEP, Vysvědčení jinak) Eva má, není potřeba je znovu získávat.

## Blokují stavbu webu

1. **Framework:** Astro (doporučeno pro obsahový web) vs. Next.js (stejný jako ostatní appky AI dětem).
2. **Hosting pro doménu chatveskole.cz:** GitHub Pages (zdarma, jen přesměrovací stránky místo 301) vs. Vercel Pro / Netlify / Cloudflare Pages (skutečná přesměrování, náhledy větví).
3. **Analytika** (zatím žádná, web je bez cookies): Vercel Web Analytics / Plausible (bez cookies, bez lišty) vs. Google Analytics (vyžaduje souhlas).
4. **Sdílení složek na Disku:** systémové prompty a data všech 18 skills jsou od 7. 11. 2026 na sdíleném disku ve složce *Zdroje k stažení*, znalostní soubory zkopírované do složek Data, odkazy v `meta.yaml` (`google_doc`, `google_slozka`, přehled v `migrace/google-drive.json`). Zbývá nastavit sdílení „Kdokoli s odkazem – čtenář“ (teď je složka soukromá) a smazat z ní *Návod pro nahrání na Disk*, který je jen pro tým.

## Obsah

38. **Staré kategorie databáze promptů:** 10 starých adres `/dp/…` (Adaptivní vzdělávání, Hodnocení, Práce s textem, Projektová výuka, Řízení a administrativa, Různé, Seberozvoj, Vizualizace, Vytváření lekcí, Vytváření pracovních listů) vede na katalog promptů, ale kotva už neexistuje — šlo o kategorie promptů z roku 2024, které v katalogu nejsou. Stačí to tak (návštěvník skončí nahoře v katalogu), nebo je přesměrovat na konkrétní kategorie?

5. **Žákovské prompty:** jsou součástí databáze na *Funkce → Prompty* (skupina Pro žáky). Chcete pro ně navíc odkaz v *Chatboti ve výuce*?
7. **Hodnocení „Bylo to přínosné?“:** starý web ho měl. Vynechat (navrženo), nebo zachovat (pak je potřeba malé úložiště)?
8. **Doporučení NPI 2025:** na stránku chybí krátké shrnutí hlavních bodů plakátu *Jak na AI ve škole* — doplnit z PDF.
9. **Kdo za tím stojí:** doplnit aktuální tým a autory dalších asistentů (AI akcelerátor, hackatony NPI).
10. **Zahraniční platby:** text je z roku 2024 — nechat zkontrolovat účetní.

## Fakta, která si odporují (ověřit)

11. **Gemini a věk:** artefakt *Funkce chatbotů 2027* uvádí osobní účet v EU od 18 let. Aktuální nápověda Google uvádí 13+ (v ČR samostatně od 15), 18+ jen pro placené tarify a skills. Na webu i v `data/funkce-chatbotu.yaml` jsme použili novější údaj — prosím potvrďte (a případně opravte i artefakt).
12. **Skills v ChatGPT:** ceník ChatGPT uvádí Skills u všech tarifů, nápověda OpenAI jen u Business, Enterprise a Edu (samostatně nahrané). Pravděpodobně: všechny tarify mají skills uvnitř pluginů, samostatné nahrání jen firemní. Ověřit v aplikaci.
13. **Ceny ChatGPT v Kč** (249 / 499 Kč) jsou z října 2025 — oficiální ceník je bez přihlášení neukazuje. Ověřit.
14. **Tiny — ceny a věk:** v paměti máme tarify Zdarma / Tým / Škola, web Tiny ale uvádí jen bezplatné užívání. Web Tiny si protiřečí i ve věku (13+ vs. 11–12 se souhlasem), v délce kódu lekce (4 vs. 5 číslic) a v době potvrzení registrace (30 dní vs. 3 měsíce). Sjednotit na tiny.school a pak převzít sem.
15. **Claude Free a sdílení artefaktů odkazem:** nápověda je po přechodu na nové artefakty nejasná (nově jen Pro a vyšší?). Vyzkoušet.

## Skills a pluginy

16. **Kontrola skills:** všechny jsou ve stavu `koncept`. Kdo je projde a otestuje (aspoň Claude + Gemini nebo ChatGPT)? Navrhujeme: formativní hodnocení — Eva + Šárka Polanecká; vedení školy — tým AI akcelerátoru.
17. **Plugin v ChatGPT (veřejný adresář):** platform.openai.com 7. 11. 2026 hlásí „We are not accepting more skills-only submissions at this time“ — pluginy jen se skills teď veřejně podat nejdou. Do té doby pluginy jen v pracovním prostoru AI dětem a ke stažení na webu. Až se podávání otevře, potřebujeme v manifestu (`extensions.com.openai.interface`): podtitul do 30 znaků (`shortDescription`), `websiteURL`, `supportURL`, `privacyPolicyURL`, `termsOfServiceURL` — tedy stránky zásad ochrany osobních údajů a podmínek užití na webu (existují? kde?). Doplní je `scripts/build-plugins.py`.
18. **Plugin v Claude:** repozitář je veřejný, takže může sloužit jako marketplace (`aidetemcz/chatveskole`). Podat i do veřejného adresáře Claude?
19. **Žákovští asistenti** (Hádej chemické prvky, Poznej svět, Rozvoj myšlení): převést do Tiny jako hotové chatboty?

### Obsah jednotlivých skills

20. **Doporučení na vysvědčení:** Rádce Šárky Polanecké chce z vysvědčení odstranit všechna doporučení do budoucna; asistent 04, Kratochvílová, metodika Vysvědčení jinak i § 15 vyhlášky 48/2005 Sb. doporučení počítají. Skill `slovni-hodnoceni` to řeší kompromisem (označí prázdné výhledy typu „věřím, že příště…“, krátká konkrétní doporučení nechá, delší rady doporučí mimo vysvědčení). Potvrdit se Šárkou.
21. **„Úplně to umím sám/sama“** v žákovském znění škály J–Č–T–Ú je v rozporu s pravidlem nepoužívat „umím“ v kritériích. Ponecháno beze změny (je to oficiální znění) — rozhodnout.
22. **Dva odkazy na GPT Asistent pro generování slovního hodnocení** (web: g-689478f6…, Google Doc: g-686bc657…) — který je aktuální? V `meta.yaml` jsou oba.
23. **Integrovaný model myšlení** (zdroj v projektu) není přes konektor Google Drive dostupný — skill `rozvoj-mysleni` proto stojí jen na původním systémovém promptu. Pošlete dokument, doplníme.
24. **Ohlašovací povinnost vůči OSPOD** v `ucitelsky-mentor/references/krizove-situace.md` — nechat ověřit někým znalým práva.
25. **Autorství starých promptů** (2024) je v `meta.yaml` připsané AI reaktoru UJEP s poznámkou „ověřit“.
26. **Tiny chatboti k žákovským promptům** — mapování je v `content/prompty/zaci/*.md` (pole `tiny_chatbot`); pro *Obsahovou strukturu* a *Zpětnou vazbu* chatbot v Tiny zatím není.
27. **Podpůrná opatření:** stupně v `uprava-materialu/references/podpurna-opatreni.md` jsou doplněné podle vyhlášky č. 27/2016 Sb. z obecné znalosti (PDF MŠMT popisuje jen druhy SVP) — zkontrolovat, co patří do kterého stupně.
28. **Seznam Tinybotů** ve skillu `aktivity-s-chatbotem` (režim „Zadání pro Tiny“) je podle dokumentu 08/2026 — ověřit proti dnešní nabídce Tiny.
29. **Věcné opravy starých promptů:** RPG simulátor (nově elektron v obvodu místo proton/neutron), Hádej prvek se neptá na jméno, Kariérní poradce se ptá jen na zájmy.
30. **Metodické příručky AI akcelerátoru** (Participativní přístup, Respektující komunikace, Spolupráce pedagogů) byly znalostmi asistentů pro kulturu školy a pravidla — přidat je do znalostí skills `rizeni-zmeny` a `skolni-pravidla` (odkaz na Disk)?
31. **Fakta ve skillech vedení školy k ověření:** školní řád vydává ředitel a schvaluje školská rada; AI Act — rozpoznávání emocí ve školách zakázáno, AI pro hodnocení, přijímání a dohled u testů je vysoce riziková. Uvedení „garant Luboš Malý“ u řízení změny.
32. **Původní Gem „Kultura a komunikace školy (plán změny)“** má na webu neplatný odkaz; v Google Docs je uveden jiný Gem a omylem GPT pro vizi a misi — opravit dokument.
33. **Znalostní soubor `formulace-vzdelavacich-cilu`** obsahuje jako příklady kontextů učení „asistovaná sebevražda, potrat, sledování porna“. Pokud ho budou učitelé stahovat z Disku, příklady bych vyměnila.

## Mimo tento web

35. **Odkazy na GPTs v PDF a metodikách** (kurikulum.aidetem.cz — 49 odkazů ve 14 PDF podle inventury z 5. 10.): přesměrování chatveskole.cz je pokryje jen tam, kde vedou na chatveskole.cz. Přímé odkazy na chatgpt.com/g/… a bit.ly/gems-* je potřeba v PDF vyměnit.
36. **Metodika *Vytváření AI asistentů — školní hackaton*** stojí na GPTs, které končí — přepracovat na skills nebo projekty.
37. **Doména gptveskole.cz** — vlastní ji ještě AI dětem? Pokud ano, přesměrovat na chatveskole.cz.
