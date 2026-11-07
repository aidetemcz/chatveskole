#!/usr/bin/env python3
"""Vytvoří složky pro Google Disk: ke každému skillu systémový prompt a data (Word → Google Docs).

Výstup: google-drive/
  Návod pro nahrání na Disk.docx              (pro tým AI dětem, nenahrávat)
  seznam-souboru.csv                          (pro doplnění odkazů do meta.yaml)
  Skills – systémové prompty a data/          (tuto složku nahrát na Disk)
    00 Jak složky používat.docx
    01 Formativní hodnocení/
      Vzdělávací cíle/
        Vzdělávací cíle – systémový prompt.docx
        Data/
          <název podkladu>.docx               (z content/skills/<slug>/references/)

Znalostní soubory (klíčové kompetence apod.) už na Disku jsou — do složek Data se zkopírují
až na Disku (konektorem Google Drive, nebo ručně), aby vznikla přesná kopie.

Spuštění: python3 scripts/build-google-drive.py   (potřebuje pandoc a python-docx)
"""
import csv
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import date
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / "content" / "skills"
OUT = ROOT / "google-drive"
UPLOAD = OUT / "Skills – systémové prompty a data"
WEB = "https://chatveskole.cz"

PRO_KOHO = {"ucitele": "učitelé", "vedeni": "vedení škol", "zaci-18plus": "studenti 18+"}


def load_yaml(p):
    return yaml.safe_load(p.read_text(encoding="utf-8"))


def split_frontmatter(text):
    if text.startswith("---"):
        parts = text.split("\n---", 1)
        if len(parts) == 2:
            return parts[1].lstrip("-").lstrip("\n")
    return text


def shift_headings(md, n):
    """Posune nadpisy o n úrovní (mimo bloky kódu)."""
    out, fence = [], False
    for line in md.splitlines():
        if line.lstrip().startswith("```"):
            fence = not fence
        if not fence and re.match(r"^#{1,6} ", line):
            hashes = len(line) - len(line.lstrip("#"))
            line = "#" * min(6, hashes + n) + line[hashes:]
        out.append(line)
    return "\n".join(out)


def safe_name(title):
    """Název souboru bezpečný pro Windows i Disk."""
    t = title.replace(":", " –").replace("/", " – ")
    t = re.sub(r'[\\*?"<>|]', "", t)
    return re.sub(r"\s+", " ", t).strip().rstrip(".")


def ref_title(p):
    for line in p.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return p.stem.replace("-", " ").capitalize()


def replace_refs(md, names):
    """`references/x.md` → soubor „Název“ (tak se jmenuje ve složce Data)."""
    def repl(m):
        pre, stem = m.group(1), m.group(2)
        name = names.get(stem)
        if not name:
            return m.group(0)
        if pre.strip() in ("v", "ve"):
            return f"{pre}souboru „{name}“"
        if pre.strip() == "z":
            return f"ze souboru „{name}“"
        if pre.strip() == "podle":
            return f"{pre}souboru „{name}“"
        return f"{pre}soubor „{name}“"
    md = re.sub(r"(\b(?:ve|v|z|podle)\s|)`references/([a-z0-9-]+)\.md`", repl, md)
    md = re.sub(r"\bs `references/`", "s ostatními přiloženými podklady", md)
    md = re.sub(r"\bv `references/`", "v ostatních přiložených podkladech", md)
    return md.replace("`references/`", "přiložené podklady")


def as_list(v):
    if not v:
        return []
    return v if isinstance(v, list) else [v]


def make_reference_docx(path):
    """Styl dokumentů: Arial, barvy AI dětem."""
    data = subprocess.run(["pandoc", "--print-default-data-file", "reference.docx"],
                          capture_output=True, check=True).stdout
    path.write_bytes(data)
    from docx import Document
    from docx.oxml.ns import qn
    from docx.shared import Pt, RGBColor
    doc = Document(str(path))
    by_name = {s.name: s for s in doc.styles}
    colors = {"Title": "1C2530", "Heading 1": "1C2530", "Heading 2": "C24848",
              "Heading 3": "1C2530", "Heading 4": "5F8C9B", "Heading 5": "1C2530", "Heading 6": "5F6C79"}
    sizes = {"Title": 24, "Heading 1": 20, "Heading 2": 16, "Heading 3": 14,
             "Heading 4": 12, "Heading 5": 11, "Heading 6": 11}
    for name in ["Normal", "Body Text", "First Paragraph", "Compact"]:
        s = by_name.get(name)
        if s is not None:
            s.font.name = "Arial"
            s.font.size = Pt(11)
            s.font.color.rgb = RGBColor.from_string("1C2530")
    for name, c in colors.items():
        s = by_name.get(name) or by_name.get(name.lower())
        if s is not None:
            s.font.name = "Arial"
            s.font.size = Pt(sizes[name])
            s.font.bold = True
            s.font.italic = False
            s.font.color.rgb = RGBColor.from_string(c)
            rfonts = s.element.rPr.find(qn("w:rFonts"))
            for attr in ("w:asciiTheme", "w:hAnsiTheme", "w:cstheme", "w:eastAsiaTheme"):
                if rfonts is not None and rfonts.get(qn(attr)) is not None:
                    del rfonts.attrib[qn(attr)]
    doc.save(str(path))


def pandoc(md, target, ref):
    target.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile("w", suffix=".md", delete=False, encoding="utf-8") as f:
        f.write(md)
        src = f.name
    subprocess.run(["pandoc", src, "-f", "markdown-implicit_figures-yaml_metadata_block",
                    "-o", str(target), f"--reference-doc={ref}"], check=True)
    Path(src).unlink()
    # Word odmítá v cloudu soubory se složkami v ZIPu
    subprocess.run(["zip", "-dq", str(target), "*/"], capture_output=True)


def cz_date(d):
    if isinstance(d, str):
        d = date.fromisoformat(d)
    return f"{d.day}. {d.month}. {d.year}"


def main():
    if not shutil.which("pandoc"):
        sys.exit("Chybí pandoc (https://pandoc.org/installing.html).")
    sady = load_yaml(ROOT / "content" / "sady.yaml")
    znalosti = load_yaml(ROOT / "content" / "znalosti" / "znalosti.yaml") or {}

    # každý skill jen jednou — ve složce první sady, ve které je
    umisteni, poradi = {}, []
    for i, s in enumerate(sady, 1):
        for slug in s["skills"]:
            if slug not in umisteni:
                umisteni[slug] = (f"{i:02d} {s['title']}", s)
                poradi.append(slug)

    if OUT.exists():
        shutil.rmtree(OUT)
    UPLOAD.mkdir(parents=True)
    tmp = Path(tempfile.mkdtemp())
    ref = tmp / "reference.docx"
    make_reference_docx(ref)

    radky = []
    for slug in poradi:
        d = SKILLS / slug
        meta = load_yaml(d / "meta.yaml")
        title = meta["title"]
        slozka_sady, sada = umisteni[slug]
        sk = UPLOAD / slozka_sady / safe_name(title)
        data = sk / "Data"

        # podklady z references/
        names = {}
        for r in sorted((d / "references").glob("*.md")):
            names[r.stem] = safe_name(ref_title(r))
        for r in sorted((d / "references").glob("*.md")):
            target = data / f"{names[r.stem]}.docx"
            pandoc(r.read_text(encoding="utf-8"), target, ref)
            radky.append([slug, "data", str(target.relative_to(UPLOAD))])

        body = split_frontmatter((d / "SKILL.md").read_text(encoding="utf-8")).strip()
        body = replace_refs(body, names)
        prompt = split_frontmatter((d / "prompt.md").read_text(encoding="utf-8")).strip()

        sady_skillu = [s["title"] for s in sady if slug in s["skills"]]
        pro = ", ".join(PRO_KOHO.get(p, p) for p in meta.get("pro_koho", []))
        autori = ", ".join(meta.get("autori", []))
        metodika = "; ".join(f"[{m['nazev']}]({m['url']})" if m.get("url") else m["nazev"]
                             for m in meta.get("metodika", []) or [])

        md = [f"# {title} – systémový prompt", "", meta.get("kratky_popis", ""), ""]
        md.append(f"**Pro koho:** {pro}  ")
        md.append(f"**Sada:** {', '.join(sady_skillu)}  ")
        if autori:
            md.append(f"**Autoři:** {autori}  ")
        if metodika:
            md.append(f"**Metodika:** {metodika}  ")
        md.append(f"**Aktualizováno:** {cz_date(meta.get('aktualizovano', date.today()))}  ")
        md.append(f"**Na webu:** [{WEB}/skills/{slug}]({WEB}/skills/{slug})")
        md += ["", "## Jak dokument použít", "",
               f"1. **Jako skill (doporučeno).** Na stránce [{WEB}/skills/{slug}]({WEB}/skills/{slug}) "
               "stáhněte skill pro Claude, Gemini nebo Copilot, nebo plugin pro ChatGPT. Skill má všechno v sobě.",
               "2. **V projektu** (ChatGPT, Claude) **nebo v notebooku** (Gemini, Copilot). Zkopírujte celý text "
               "mezi značkami ZAČÁTEK a KONEC do pokynů projektu a nahrajte do projektu soubory ze složky Data.",
               "3. **Když se text do pokynů nevejde,** nahrajte do projektu i tento dokument a do pokynů napište: "
               f"*Řiď se pokyny v dokumentu „{title} – systémový prompt“.*",
               "4. **Bez projektu a bez skills:** použijte krátký prompt ke zkopírování na konci dokumentu.",
               "",
               "Výstup chatbota je vždy návrh — zkontrolujte ho a upravte. Nevkládejte jména žáků ani citlivé údaje.",
               "", "## Soubory ve složce Data", ""]
        for stem, name in names.items():
            md.append(f"- {name}")
        zn = [z for z in meta.get("znalosti", []) or []]
        if zn:
            md += ["", "Znalostní soubory (společné pro více skills):", ""]
            for z in zn:
                info = znalosti.get(z, {})
                nazev = info.get("nazev", z)
                if info.get("verejne", True) and info.get("url"):
                    md.append(f"- [{nazev}]({info['url']})")
                else:
                    md.append(f"- {nazev} (interní podklad AI dětem, zatím není ke stažení)")
            md += ["", "Pokud znalostní soubory ve složce Data nejsou, stáhněte je z odkazů a nahrajte do projektu také. "
                   "Skill funguje i bez nich, s nimi je přesnější."]
        md += ["", "## Systémový prompt", "",
               "**▼ ZAČÁTEK — zkopírujte vše odsud až po značku KONEC.**", "",
               shift_headings(body, 2), "",
               "**▲ KONEC SYSTÉMOVÉHO PROMPTU**", "",
               "## Krátká verze: prompt ke zkopírování", "",
               "Funguje v jakémkoli chatbotu i zdarma, bez projektu a bez souborů.", "",
               shift_headings(prompt, 1)]
        gpt = as_list((meta.get("puvodni_asistenti") or {}).get("gpt"))
        gem = as_list((meta.get("puvodni_asistenti") or {}).get("gem"))
        if gpt or gem:
            md += ["", "## Původní asistenti", "",
                   "Skill nahrazuje původní GPT a Gem z chatveskole.cz. GPTs přestanou fungovat 11. 12. 2026, "
                   "Gems se od 17. 11. 2026 postupně mění na skills."]
        target = sk / f"{safe_name(title)} – systémový prompt.docx"
        pandoc("\n".join(md) + "\n", target, ref)
        radky.insert(len(radky) - len(names), [slug, "systemovy-prompt", str(target.relative_to(UPLOAD))])

    # průvodce pro učitele v kořeni nahrávané složky
    obsah = ["# Systémové prompty a data skills z chatveskole.cz", "",
             "V každé složce najdete jeden skill: **systémový prompt** (dokument „… – systémový prompt“) "
             "a složku **Data** s podklady, ze kterých skill čerpá.", "",
             "## Jak je použít", "",
             "- **Nejjednodušší je skill.** Na chatveskole.cz/skills si ho stáhnete do Claude, Gemini nebo Copilotu, "
             "do ChatGPT jako plugin.",
             "- **Projekt nebo notebook.** Systémový prompt vložte do pokynů projektu (ChatGPT, Claude) nebo notebooku "
             "(Gemini, Copilot) a nahrajte soubory ze složky Data.",
             "- **Vlastní úpravy.** Dokument si zkopírujte (Soubor → Vytvořit kopii) a upravte podle své školy.", "",
             "## Co ve složkách je", ""]
    for i, s in enumerate(sady, 1):
        moje = [slug for slug in s["skills"] if umisteni[slug][0].startswith(f"{i:02d} ")]
        jinde = [slug for slug in s["skills"] if slug not in moje]
        if not moje and not jinde:
            continue
        obsah.append(f"**{i:02d} {s['title']}** — " + ", ".join(
            load_yaml(SKILLS / x / "meta.yaml")["title"] for x in moje))
        for x in jinde:
            obsah[-1] += f" (skill {load_yaml(SKILLS / x / 'meta.yaml')['title']} je ve složce {umisteni[x][0]})"
        obsah.append("")
    obsah += ["Výstup chatbota je vždy návrh — zkontrolujte ho a upravte. Do chatbota nevkládejte jména žáků "
              "ani citlivé údaje.", "", f"Web: [{WEB}]({WEB}) · AI dětem, z. ú."]
    pandoc("\n".join(obsah) + "\n", UPLOAD / "00 Jak složky používat.docx", ref)

    # návod pro tým (nenahrává se)
    navod = """# Návod: nahrání složek na Google Disk

Tento dokument je pro tým AI dětem. Na Disk se nenahrává — nahrává se jen složka *Skills – systémové prompty a data*.

## 1. Zapněte převod do Google Docs

Na Disku: ozubené kolo → **Nastavení** → **Obecné** → zaškrtněte převod nahraných souborů do formátu editorů Dokumentů Google (anglicky *Convert uploads*). Bez toho zůstanou soubory jako Word.

## 2. Nahrajte složku

Otevřete sdílenou složku AI dětem, kam mají systémové prompty patřit, a přetáhněte do ní celou složku *Skills – systémové prompty a data* (nebo Nový → Nahrát složku).

## 3. Doplňte znalostní soubory

Znalostní soubory (klíčové kompetence, průřezová témata, formulace cílů, kritéria, SVP, slovní hodnocení) už na Disku jsou. Do složek Data je zkopírujte buď ručně (pravé tlačítko → Vytvořit kopii → přesunout), nebo napište Claudovi s připojeným Google Diskem: *„Zkopíruj znalostní soubory podle content/znalosti/znalosti.yaml do složek Data jednotlivých skills.“* Který skill potřebuje které soubory, je v každém systémovém promptu v části *Soubory ve složce Data*.

## 4. Nastavte sdílení

Pravé tlačítko na složku → Sdílet → Obecný přístup: **Kdokoli s odkazem**, role **Čtenář**. Učitelé si dokumenty zkopírují (Soubor → Vytvořit kopii) nebo stáhnou.

## 5. Doplňte odkazy na web

Odkaz na systémový prompt patří do `content/skills/<slug>/meta.yaml` → `google_doc`, odkaz na složku skillu do `google_slozka`. Nejrychleji: požádejte Clauda s připojeným Diskem *„Najdi na Disku nahrané systémové prompty a doplň odkazy do meta.yaml“* — seznam souborů je v `google-drive/seznam-souboru.csv`.

## Když se skill změní

Složky se vytvářejí skriptem `python3 scripts/build-google-drive.py` z `content/skills/`. Po změně skillu buď dokument na Disku upravte ručně, nebo nový dokument vygenerujte a na Disku nahraďte (pravé tlačítko → Spravovat verze → Nahrát novou verzi — odkaz zůstane stejný).
"""
    pandoc(navod, OUT / "Návod pro nahrání na Disk.docx", ref)

    with open(OUT / "seznam-souboru.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["skill", "typ", "cesta"])
        w.writerows(radky)
    shutil.rmtree(tmp)
    n = sum(1 for _ in UPLOAD.rglob("*.docx"))
    print(f"{len(poradi)} skills, {n} dokumentů → {OUT.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
