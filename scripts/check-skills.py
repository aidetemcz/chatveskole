"""Kontrola skills podle docs/specifikace-skills.md.

Spuštění: python3 scripts/check-skills.py
Vypíše chyby (E) a varování (W). Návratový kód 1, pokud je aspoň jedna chyba.
"""
import pathlib, re, sys
import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
SKILLS = ROOT / "content" / "skills"
SADY = yaml.safe_load((ROOT / "content" / "sady.yaml").read_text(encoding="utf-8"))
ZNALOSTI = yaml.safe_load((ROOT / "content" / "znalosti" / "znalosti.yaml").read_text(encoding="utf-8")) or {}
sady_slugs = {s["slug"] for s in SADY}
v_sadach = {sk for s in SADY for sk in s["skills"]}

errors = warnings = 0
def E(skill, msg):
    global errors; errors += 1; print(f"E {skill}: {msg}")
def W(skill, msg):
    global warnings; warnings += 1; print(f"W {skill}: {msg}")

def frontmatter(text):
    m = re.match(r"---\n(.*?)\n---\n?(.*)", text, re.S)
    return (yaml.safe_load(m.group(1)), m.group(2)) if m else (None, text)

for d in sorted(p for p in SKILLS.iterdir() if p.is_dir()):
    slug = d.name
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", slug) or len(slug) > 64:
        E(slug, "název složky neodpovídá pravidlům (a-z0-9-, max 64)")
    if "claude" in slug or "anthropic" in slug:
        E(slug, "název nesmí obsahovat claude/anthropic")
    for req in ("SKILL.md", "prompt.md", "meta.yaml"):
        if not (d / req).exists():
            E(slug, f"chybí {req}")
    if not (d / "SKILL.md").exists():
        continue
    fm, body = frontmatter((d / "SKILL.md").read_text(encoding="utf-8"))
    if not fm:
        E(slug, "SKILL.md nemá frontmatter"); continue
    if set(fm) != {"name", "description"}:
        E(slug, f"frontmatter má mít jen name a description, má {sorted(fm)}")
    if fm.get("name") != slug:
        E(slug, f"name '{fm.get('name')}' ≠ název složky")
    desc = fm.get("description") or ""
    if not 1 <= len(desc) <= 1024:
        E(slug, f"description má {len(desc)} znaků (1–1024)")
    if "<" in desc or ">" in desc:
        E(slug, "description obsahuje < nebo >")
    lines = body.count("\n")
    if lines > 500:
        E(slug, f"SKILL.md má {lines} řádků (max 500)")
    elif lines > 300:
        W(slug, f"SKILL.md má {lines} řádků (doporučeno do 300)")
    for ref in sorted(set(re.findall(r"references/[\w\-.]+\.md", body))):
        if not (d / ref).exists():
            E(slug, f"odkaz na neexistující {ref}")
    for f in (d / "references").glob("*.md") if (d / "references").exists() else []:
        if f"references/{f.name}" not in body:
            W(slug, f"references/{f.name} není ze SKILL.md odkázaný")
    if re.search(r"\bmlad(ý|ého|ému|ým) jedin", body, re.I):
        E(slug, "obsahuje „mladý jedinec“ — nahradit „žák“")
    if re.search(r"jméno žáka", body, re.I) and not re.search(r"(nežádej|nikdy|nepoužívej|nevkládejte|iniciál)", body, re.I):
        W(slug, "zmínka o jménu žáka — zkontrolovat ochranu údajů")
    # prompt.md
    if (d / "prompt.md").exists():
        pfm, pbody = frontmatter((d / "prompt.md").read_text(encoding="utf-8"))
        blocks = re.findall(r"```text\n(.*?)```", pbody, re.S)
        if not blocks:
            E(slug, "prompt.md neobsahuje žádný blok ```text")
        if len(blocks) > 4:
            W(slug, f"prompt.md má {len(blocks)} promptů (doporučeno max 1 + 3 varianty)")
        for i, b in enumerate(blocks, 1):
            if len(b) > 2500:
                W(slug, f"prompt č. {i} má {len(b)} znaků (doporučeno ≤ 2500)")
    # meta.yaml
    if (d / "meta.yaml").exists():
        meta = yaml.safe_load((d / "meta.yaml").read_text(encoding="utf-8")) or {}
        for k in ("title", "slug", "kratky_popis", "pro_koho", "sady", "puvodni_obsah", "autori", "stav", "aktualizovano"):
            if k not in meta:
                E(slug, f"meta.yaml: chybí {k}")
        if meta.get("slug") != slug:
            E(slug, "meta.yaml: slug ≠ název složky")
        if len(meta.get("kratky_popis", "")) > 140:
            W(slug, f"meta.yaml: kratky_popis má {len(meta['kratky_popis'])} znaků (max 140)")
        for s in meta.get("sady", []) or []:
            if s not in sady_slugs:
                E(slug, f"meta.yaml: neznámá sada {s}")
        for z in meta.get("znalosti", []) or []:
            if z not in ZNALOSTI:
                E(slug, f"znalostní soubor {z} není v content/znalosti/znalosti.yaml")
            elif not ZNALOSTI[z].get("verejne", True):
                W(slug, f"znalostní soubor {z} je zatím neveřejný — web ho nezobrazí")
        if not meta.get("google_doc"):
            W(slug, "meta.yaml: chybí google_doc (nový Google Doc se systémovým promptem)")
    if slug not in v_sadach:
        W(slug, "skill není v žádné sadě v content/sady.yaml")

for s in v_sadach:
    if not (SKILLS / s).exists():
        print(f"E sady.yaml: skill {s} neexistuje"); errors += 1

print(f"\n{errors} chyb, {warnings} varování")
sys.exit(1 if errors else 0)
