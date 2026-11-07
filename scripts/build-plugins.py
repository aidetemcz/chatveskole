#!/usr/bin/env python3
"""Z content/sady.yaml a content/skills/ vytvoří pluginy (formát Claude, přijímá ho i ChatGPT).

Výstup:
  plugins/aidetem-<sada>/.claude-plugin/plugin.json
  plugins/aidetem-<sada>/skills/<slug>/SKILL.md (+ references/)
  .claude-plugin/marketplace.json          — repo jako marketplace (Claude, import do workspace ChatGPT)
  dist/pluginy/aidetem-<sada>.zip          — k nahrání (ChatGPT: platform.openai.com/plugins → Skills only;
                                             Claude: Customize → Plugins → Upload)

Složky plugins/ a .claude-plugin/ patří do gitu (marketplace z GitHubu je čte), ZIPy ne.
Spuštění: python3 scripts/build-plugins.py
"""
import json
import shutil
import zipfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / "content" / "skills"
PLUGINS = ROOT / "plugins"
DIST = ROOT / "dist" / "pluginy"
WEB = "https://chatveskole.cz"
REPO = "https://github.com/aidetemcz/chatveskole"
AUTOR = {"name": "AI dětem, z. ú.", "url": "https://aidetem.cz"}


def main():
    sady = yaml.safe_load((ROOT / "content" / "sady.yaml").read_text(encoding="utf-8"))
    if PLUGINS.exists():
        shutil.rmtree(PLUGINS)
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)

    marketplace = {
        "name": "aidetem",
        "owner": AUTOR,
        "metadata": {"description": "Skills pro učitele a vedení škol z webu Chatboti ve škole (chatveskole.cz)."},
        "plugins": [],
    }

    for sada in sady:
        name = f"aidetem-{sada['slug']}"
        stavy = []
        pdir = PLUGINS / name
        for slug in sada["skills"]:
            src = SKILLS / slug
            meta = yaml.safe_load((src / "meta.yaml").read_text(encoding="utf-8"))
            stavy.append(meta.get("stav", "koncept"))
            dst = pdir / "skills" / slug
            dst.mkdir(parents=True)
            shutil.copy2(src / "SKILL.md", dst / "SKILL.md")
            if (src / "references").is_dir():
                shutil.copytree(src / "references", dst / "references")
        # verze 0.x, dokud nejsou všechny skills v sadě ve stavu „hotovo“
        version = "1.0.0" if all(s == "hotovo" for s in stavy) else "0.1.0"
        manifest = {
            "name": name,
            "version": version,
            "description": sada["popis"],
            "author": AUTOR,
            "homepage": f"{WEB}/sady/{sada['slug']}",
            "repository": REPO,
            "keywords": ["škola", "učitelé", "vzdělávání", sada["title"]],
        }
        (pdir / ".claude-plugin").mkdir(parents=True)
        (pdir / ".claude-plugin" / "plugin.json").write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        marketplace["plugins"].append({
            "name": name,
            "source": f"./plugins/{name}",
            "description": sada["popis"],
            "version": version,
        })

        # ZIP: jedna složka <name>/ v kořeni (přijímá ChatGPT i Claude)
        zpath = DIST / f"{name}.zip"
        with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
            for f in sorted(pdir.rglob("*")):
                if f.is_file():
                    z.write(f, Path(name) / f.relative_to(pdir))
        print(f"{name} {version}: {len(sada['skills'])} skills → {zpath.relative_to(ROOT)}")

    (ROOT / ".claude-plugin").mkdir(exist_ok=True)
    (ROOT / ".claude-plugin" / "marketplace.json").write_text(
        json.dumps(marketplace, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("marketplace → .claude-plugin/marketplace.json")


if __name__ == "__main__":
    main()
