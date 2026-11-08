"""Vygeneruje migrace/inventura.csv a migrace/redirects.json ze známé mapy obsahu.

Spuštění: python3 scripts/build-inventura.py
Mapa vznikla při auditu webu 7. 11. 2026 (WordPress REST API: 28 stránek, 119 záznamů
databáze promptů, 27 kategorií). Když se mapa změní, uprav slovníky níže a skript pusť znovu.
"""
import csv, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://chatveskole.cz"

# --- Stránky (page) -> nová URL, akce, poznámka ---------------------------------
PAGES = {
    "": ("/", "přepsat", "Nová homepage podle nového menu"),
    "pruvodce-chatgpt-pro-ucitele": ("/", "smazat", "Duplikát homepage (stará verze)"),
    "jak-to-funguje": ("/funkce/prompty", "smazat", "Stará stránka o ChatGPT, rozbitý obsah (lorem text), odkazy na gptveskole.cz"),
    "jak-funguji-chatboti": ("/zaciname/jak-funguji-chatboti", "aktualizovat", ""),
    "dostupne-nastroje": ("/zaciname/dostupne-nastroje", "přepsat", "Nová tabulka nástrojů 2026, bez Perplexity jako hlavního nástroje"),
    "kolik-stoji": ("/zaciname/kolik-stoji-chatboti", "přepsat", "Ceny se na webu nezobrazují (0 Kč) — nová data z data/ceny.yaml"),
    "registrace-do-sluzeb": ("/zaciname/registrace", "aktualizovat", ""),
    "vekove-limity-pravo": ("/zaciname/vekove-limity-a-legislativa", "přepsat", "Doplnit AI Act, ChatGPT pro teenagery, Gemini 18+ mimo školní účty"),
    "zahranicni-platby-pro-neplatce-dph": ("/zaciname/zahranicni-platby", "aktualizovat", "Ověřit u daňového poradce"),
    "co-je-to-prompt": ("/funkce/prompty", "sloučit", "Sloučeno do stránky Prompty"),
    "jak-vytvaret-prompt": ("/funkce/prompty", "sloučit", "Sloučeno do stránky Prompty"),
    "prompty": ("/funkce/prompty", "přesunout", "Databáze promptů → Funkce → Prompty"),
    "prompty-pro-pedagogy": ("/funkce/prompty", "přesunout", "Databáze promptů → Funkce → Prompty"),
    "zpusoby-vyuziti-genai-ve-vyuce": ("/funkce/prompty/zaci", "přesunout", "10 způsobů využití GenAI + žákovské prompty (s NPI)"),
    "co-jsou-ai-asistenti": ("/funkce/zmeny-2026", "nahradit", "Asistenti (GPTs, Gems) končí — vysvětlení na stránce změn"),
    "jak-vyuzivat-ai-asistenty": ("/funkce/skills", "nahradit", "Instalace skills místo GPTs/Gems"),
    "jak-vytvaret-ai-asistenty": ("/funkce/skills", "nahradit", "Jak napsat vlastní skill"),
    "tvorba-systemoveho-promptu": ("/funkce/skills", "sloučit", "Principy systémového promptu → psaní SKILL.md"),
    "jaka-data-do-ai-asistenta-patri": ("/funkce/projekty", "sloučit", "Jaká data nahrávat do projektů a skills"),
    "testovani-a-publikace": ("/funkce/skills", "sloučit", "Testování a sdílení skills"),
    "databaze-ai-asistentu": ("/skills", "nahradit", "Asistenti převedeni na skills"),
    "vyuziti-chatbotu-ve-formativnim-hodnoceni": ("/sady/formativni-hodnoceni", "přesunout", "Rozcestník sady Formativní hodnocení"),
    "materialy-do-vyuky": ("/ve-vyuce/metodiky", "přepsat", "Metodické materiály: Tiny + AI kurikulum"),
    "strategie-vyuziti-umele-inteligence-ai-ve-skolach": ("/ve-vyuce/pravidla-pro-ai", "sloučit", "Tabulka J. Lodge jako podklad k volbě strategie"),
    "doporuceni-pro-vyuzivani-ai-na-zs-a-ss": ("/ve-vyuce/doporuceni-zs-ss", "aktualizovat", "NPI Jak na AI ve škole (2025)"),
    "doporuceni-pro-vyuzivani-ai-na-vs": ("/ve-vyuce/doporuceni-vs", "aktualizovat", ""),
    "kdo-za-tim-stoji": ("/o-webu/kdo-za-tim-stoji", "aktualizovat", ""),
    "kontakt": ("/o-webu/kontakt", "aktualizovat", "Sloučit s Pošlete nám prompt"),
    "poslete-nam-prompt": ("/o-webu/kontakt", "sloučit", "Formulář na návrhy skills/promptů"),
    # odkazováno z patičky, ale stránka neexistuje (404)
    "jak-ucit-a-hodnotit-s-ai": ("/funkce/prompty/zaci", "přesměrovat", "Rozbitý odkaz v patičce"),
}

# --- Databáze promptů (manual_kb) -> cíl --------------------------------------
SKILL_MAP = {
    "vzdelavaci-cile": ["formulace-vyukoveho-cile", "formulace-vyukoveho-cile-2"],
    "kriteria-hodnoceni": ["tvorba-kriterii-hodnoceni", "formulace-kriterii-hodnoceni", "vytvareni-sebehodnotici-skaly-pro-zaky", "sebehodnoceni-pro-zaky", "tvorba-dukazu-o-uceni"],
    "slovni-hodnoceni": ["tvorba-zpetne-vazby", "tvorba-slovniho-hodnoceni", "generovani-slovniho-hodnoceni", "radce-pro-spravne-formulace-slovniho-hodnoceni"],
    "didakticky-radce": ["didakticky-radce", "planovac-vyuky", "didaktik-konzultant", "napadnicek-geografie", "vyukovy-plan-bloomova-taxonomie", "osnova-lekce-informatika", "strukturovany-ucebni-plan", "unikovka-elektromagnetismus", "eduscrum-mestsky-ekosystem", "otazky-k-diskuzi", "k-cemu-mi-to-je"],
    "pracovni-listy": ["doplnovacka", "spojovacka", "kviz", "pracovni-list-s-otevrenymi-otazkami", "vyuka-s-emotikony", "slovnicek-pojmu", "pracovni-list-pro-reflexi-uciva", "tematicky-test-cizi-jazyk", "matematicke-priklady", "slovicka-nalady", "protiklady-prid-jmena", "doplnovacka_slovesa", "emotikony-zivot-vaclava-havla", "kviz-historie", "tvorba-testu-dedicnost", "slovnicky-pojmu"],
    "uprava-materialu": ["aktualizace-tematickeho-planu", "prevod-materialu-do-jine-formy", "rozsireni-existujiciho-materialu", "prevod-materialu-na-jinou-uroven-obtiznosti", "individualizace-vyukovych-cilu", "diferenciace-textu-rozhovory", "zmena-textu-strucne-a-jasne", "prace-s-textem-shrnuti"],
    "aktivity-s-chatbotem": ["quiz_bot", "cool_bot_vynalezy", "hadej-chemicke-prvky", "hadej-chemicke-prvky-asistent", "asistent-poznej-svet-zemepisny-kviz", "rpg-simulator-el-castice", "hrani-dvou-roli-bunka", "hraj-roli-chloroplast", "simulator-darwin", "zpetnovazebni-otazky-polymeraza", "textova-hra-karel-iv", "diskuzni-bot-genetika", "pruvodce-biotopy", "wikichat-hardware", "piskvorky", "karierni-poradce-se-zamerenim-na-matematiku"],
    "rozvoj-mysleni": ["asistent-pro-rozvoj-mysleni"],
    "komunikace-s-rodici": ["reakce-na-stiznost-rodice", "zprava-o-pokroku-zaka", "vysvetleni-vyznamu-vyuziti-generativni-ai-ve-vyuce", "pozvanka-na-skolni-akci", "informace-o-skolnim-projektu", "komunikace-s-rodici", "komunikace-s-rodici-pozvanka", "komunikace-s-rodici-stiznost"],
    "jazykovy-korektor": ["jazykovy-ai-korektor", "zvyrazneni-chyb-v-textu", "stylistika", "nedelitelne-mezery", "slovni-a-vetny-rozbor"],
    "ucitelsky-mentor": ["ucitelsky-mentor", "chatboti-ve-skole-analogie", "zvladani-stresu", "slepe-skrvny"],
    "mise-vize-hodnoty": ["asistent-pro-definici-hodnot-mise-a-vize-skoly", "formulace-hodnot-mise-a-vize-skoly", "vytvareni-profilu-absolventa-skoly"],
    "skolni-pravidla": ["radce-pro-tvorbu-skolnich-pravidel", "tvorba-skolnich-pravidel", "tvorba-pravidel"],
    "strategicke-dokumenty": ["strategie-pro-rozvoj-digitalni-gramotnosti", "strategie-pro-podporu-inkluze", "integrace-digitalniho-wellbeingu", "tvorba-metodologie-hodnoceni", "navrh-systemu-vnitrniho-hodnoceni-kvality-vyuky", "swot-analyza", "plan-postupneho-zavadeni-inovaci-do-vyuky"],
    "rizeni-zmeny": ["strategicky-radce-pro-rizeni-zmeny", "pruvodce-rizenim-zmeny-adkar", "radce-pro-zlepseni-kultury-skoly", "kultura-a-komunikace-skoly-adkar"],
    "asistent-reditele": ["asistent-reditele"],
    "procesni-analytik": ["procesni-analytik-ai-detem"],
    "ai-gramotnost-v-svp": ["ai-gramotnost-v-rvp-a-svp"],
}
ZACI = ["otazky-na-miru", "obsahova-struktura", "brainstorming", "planovani", "vylepseni-vystupu", "zpetna-vazba", "argumentace", "role-experta"]
VIBE = ["tabulky", "sekvencni-diagram", "myslenkove-mapy-dreviny", "kolacovy-graf-vitaminy", "graf-regiony", "derivace-latex", "casove-osy", "srdce-ve-formatu-svg", "kostka-format-stl", "3d-model-kvetu"]
ASISTENTI = {"formulace-vyukoveho-cile-2", "formulace-kriterii-hodnoceni", "vytvareni-sebehodnotici-skaly-pro-zaky", "generovani-slovniho-hodnoceni", "radce-pro-spravne-formulace-slovniho-hodnoceni", "didakticky-radce", "planovac-vyuky", "ucitelsky-mentor", "jazykovy-ai-korektor", "asistent-pro-rozvoj-mysleni", "asistent-pro-definici-hodnot-mise-a-vize-skoly", "radce-pro-tvorbu-skolnich-pravidel", "asistent-reditele", "strategicky-radce-pro-rizeni-zmeny", "ai-gramotnost-v-rvp-a-svp", "pruvodce-rizenim-zmeny-adkar", "radce-pro-zlepseni-kultury-skoly", "kultura-a-komunikace-skoly-adkar", "procesni-analytik-ai-detem", "asistent-poznej-svet-zemepisny-kviz", "hadej-chemicke-prvky-asistent", "karierni-poradce-se-zamerenim-na-matematiku"}
OLD_2024 = set(VIBE) | {"slovni-a-vetny-rozbor", "diferenciace-textu-rozhovory", "zmena-textu-strucne-a-jasne", "prace-s-textem-shrnuti", "zvyrazneni-chyb-v-textu", "k-cemu-mi-to-je", "otazky-k-diskuzi", "komunikace-s-rodici-pozvanka", "komunikace-s-rodici-stiznost", "tematicky-test-cizi-jazyk", "nedelitelne-mezery", "chatboti-ve-skole-analogie", "zvladani-stresu", "slepe-skrvny", "slovicka-nalady", "piskvorky", "protiklady-prid-jmena", "komunikace-s-rodici", "eduscrum-mestsky-ekosystem", "tvorba-pravidel", "matematicke-priklady", "cool_bot_vynalezy", "pruvodce-biotopy", "diskuzni-bot-genetika", "quiz_bot", "wikichat-hardware", "unikovka-elektromagnetismus", "strukturovany-ucebni-plan", "tvorba-testu-dedicnost", "swot-analyza", "napadnicek-geografie", "didaktik-konzultant", "hadej-chemicke-prvky", "rpg-simulator-el-castice", "hrani-dvou-roli-bunka", "simulator-darwin", "zpetnovazebni-otazky-polymeraza", "hraj-roli-chloroplast", "doplnovacka_slovesa", "emotikony-zivot-vaclava-havla", "stylistika", "textova-hra-karel-iv", "vyukovy-plan-bloomova-taxonomie", "osnova-lekce-informatika", "kviz-historie", "slovnicky-pojmu"}

# Prompty pro vedení školy (skupina „vedeni“ v content/prompty/vedeni/)
VEDENI_SKILLS = {"mise-vize-hodnoty", "skolni-pravidla", "strategicke-dokumenty"}

KB = {}
MAPA = {}   # slug -> {skupina, skill, vibe} pro scripts/prevod-promptu.mjs
for skill, slugs in SKILL_MAP.items():
    for s in slugs:
        if s in ASISTENTI:
            KB[s] = (f"/skills/{skill}", "převést na skill", "asistent", "AI asistent (GPT/Gem) → skill; systémový prompt v Google Docs")
            MAPA[s] = {"skupina": "asistent", "skill": skill}
        else:
            skupina = "archiv-2024" if s in OLD_2024 else ("vedeni" if skill in VEDENI_SKILLS else "pedagogove")
            note = "zachovat v databázi promptů (starší prompty 2024)" if skupina == "archiv-2024" else "zachovat v databázi promptů"
            KB[s] = (f"/funkce/prompty/{s}", "zachovat jako prompt", "prompt", note + f"; souvisí se skillem {skill}")
            MAPA[s] = {"skupina": skupina, "skill": skill}
for s in ZACI:
    KB[s] = (f"/funkce/prompty/zaci/{s}", "zachovat jako prompt", "prompt", "Žákovský prompt (skills jsou 18+)")
    MAPA[s] = {"skupina": "zaci", "skill": None}
for s in VIBE:
    KB[s] = (f"/funkce/prompty/{s}", "zachovat jako prompt", "prompt", "Starší prompt 2024; dnes vibe coding — odkaz na /vibe-coding/materialy-do-vyuky")
    MAPA[s] = {"skupina": "archiv-2024", "skill": None, "vibe": True}
KB["znalosti-zadna-ai"] = ("/funkce/prompty/zaci", "sloučit", "aktivita", "Jediná publikovaná úroveň AIAS; zbytek nikdy nevyšel")
MAPA["znalosti-zadna-ai"] = {"skupina": "vynechat", "skill": None}

# --- Kategorie (/dp/...) ---------------------------------------------------------
CATS = {
    "ai-asistenti-pro-hodnoceni-%e2%86%92": "/sady/formativni-hodnoceni",
    "formativni-hodnoceni": "/funkce/prompty#formativni-hodnoceni",
    "slovni-hodnoceni-%e2%86%92": "/funkce/prompty#slovni-hodnoceni",
    "hodnoceni": "/funkce/prompty#hodnoceni",
    "ai-asistenti-pro-rizeni-skoly": "/sady/vedeni-skoly",
    "tvorba-strategickych-dokumentu": "/funkce/prompty#tvorba-strategickych-dokumentu",
    "rizeni-a-administrativa-%e2%86%92": "/funkce/prompty#rizeni-a-administrativa",
    "ai-asistenti-ai-akcelerator-%e2%86%92": "/sady/ai-akcelerator",
    "ai-asistenti-ruzne": "/skills",
    "oborovi-ai-asistenti": "/skills/aktivity-s-chatbotem",
    "adaptivni-vzdelavani": "/funkce/prompty#adaptivni-vzdelavani",
    "aktualizace-materialu-%e2%86%92": "/funkce/prompty#aktualizace-materialu",
    "prace-s-textem": "/funkce/prompty#prace-s-textem",
    "komunikace-s-rodici-%e2%86%92": "/funkce/prompty#komunikace-s-rodici",
    "tvorba-materialu-do-vyuky": "/funkce/prompty#tvorba-materialu-do-vyuky",
    "vytvareni-pracovnich-listu": "/funkce/prompty#vytvareni-pracovnich-listu",
    "vytvareni-lekci": "/funkce/prompty#vytvareni-lekci",
    "projektova-vyuka": "/funkce/prompty#projektova-vyuka",
    "seberozvoj-%e2%86%92": "/funkce/prompty#seberozvoj",
    "vizualizace": "/funkce/prompty#vizualizace",
    "ruzne": "/funkce/prompty#ruzne",
    "principy-vyuziti-genai-ve-vyuce": "/funkce/prompty/zaci",
    "prompty-pro-zaky": "/funkce/prompty/zaci",
    "prompty-pro-pedagogy": "/funkce/prompty",
}

rows, redirects = [], []
for slug, (new, akce, note) in PAGES.items():
    old = f"{BASE}/{slug}/" if slug else f"{BASE}/"
    rows.append(["stránka", old, new, akce, "", note])
    if slug:
        redirects.append({"source": f"/{slug}", "destination": new, "permanent": True})
for slug, (new, akce, typ, note) in sorted(KB.items()):
    rows.append(["databáze promptů", f"{BASE}/databaze-promptu/{slug}/", new, akce, typ, note])
    redirects.append({"source": f"/databaze-promptu/{slug}", "destination": new, "permanent": True})
for slug, new in CATS.items():
    rows.append(["kategorie", f"{BASE}/dp/{slug}/", new, "přesměrovat", "", ""])
    redirects.append({"source": f"/dp/{slug}", "destination": new, "permanent": True})
# zbytky WordPressu
for src, dst in [("/databaze-promptu", "/funkce/prompty"), ("/dp", "/funkce/prompty"), ("/wp-content/uploads/:path*", "/archiv/uploads/:path*"), ("/feed", "/")]:
    redirects.append({"source": src, "destination": dst, "permanent": True})

out = ROOT / "migrace"
out.mkdir(exist_ok=True)
with open(out / "inventura.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["typ", "stará URL", "nová URL", "akce", "druh obsahu", "poznámka"])
    w.writerows(rows)
(out / "mapa-promptu.json").write_text(json.dumps(MAPA, ensure_ascii=False, indent=2), encoding="utf-8")
(out / "redirects.json").write_text(json.dumps({"redirects": redirects}, ensure_ascii=False, indent=2), encoding="utf-8")
assert len(KB) == 119, len(KB)
print(f"{len(rows)} řádků inventury, {len(redirects)} přesměrování, {len(KB)} záznamů databáze")
