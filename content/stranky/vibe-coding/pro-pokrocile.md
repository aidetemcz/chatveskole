---
title: Vibe Coding pro pokročilé
menu: Vibe Coding
poradi: 5
popis: Programovací agenti jako Claude Code nebo Codex, GitHub, hosting a databáze. Jak agentovi zadat pravidla, na co si dát pozor a jak stavíme tento web.
sablona: pokrocili-pruvodce   # vlastní šablona src/pages/vibe-coding/pro-pokrocile.astro
aktualizovano: 2026-11-21
zdroje:
  - https://supabase.com/pricing
  - https://supabase.com/docs/guides/database/postgres/row-level-security
  - https://firebase.google.com/pricing
  - https://neon.com/pricing
stav: koncept
---

# Vibe Coding pro pokročilé

Aplikace v okně chatbota vám přestane stačit ve chvíli, kdy chcete web s více stránkami, vlastní doménu, data ze souborů nebo spolupráci v týmu. Pak je čas na **programovací agenty**. Jsou to AI nástroje, které pracují přímo se soubory vašeho projektu: spouštějí ho, testují a opravují.

Najdete tu, co k tomu potřebujete, jak agentovi zadat pravidla a na co si dát pozor.

## Programovací agenti

Vyberte si podle toho, co už používáte a kolik chcete platit.

| Nástroj | Pro koho | Cena |
|---|---|---|
| **Claude Code** | vyučující informatiky, správci webů | v tarifu Claude Pro a vyšších |
| **OpenAI Codex** | totéž pro ty, kdo pracují v ChatGPT | omezeně zdarma, plně v placených tarifech |
| **Google Antigravity** | kdo chce vývojové prostředí od Googlu | zdarma s limity, 18+ |
| **Cursor** | kdo chce editor kódu s AI | omezeně zdarma, 18+ |

## Základní sestava

Projekt stojí na třech věcech, čtvrtou přidáte jen někdy.

1. **GitHub** — GitHub je služba, kam si uložíte kód aplikace i s historií všech změn. Když agent něco rozbije, snadno se vrátíte k předchozí verzi.
2. **Programovací agent** — Agent čte a upravuje soubory projektu podle vašich pokynů. Vy mu běžnou řečí popíšete, co chcete změnit.
3. **Hosting** — Hosting je místo na internetu, kde aplikace běží. Zveřejníte ji na [Vercelu](https://vercel.com), [Netlify](https://www.netlify.com) nebo [GitHub Pages](https://pages.github.com). Po každé změně na GitHubu se web sám znovu zveřejní.
4. **Databáze a přihlašování** — Když aplikace potřebuje ukládat data nebo přihlašovat uživatele, použijte [Supabase](https://supabase.com), případně [Firebase](https://firebase.google.com) od Googlu nebo [Neon](https://neon.com). Nabízejí databázi, přihlašování uživatelů a ukládání souborů a mají bezplatný tarif s limity. Při zakládání projektu zvolte umístění dat v EU.

## Instrukce pro agenta

Agent si na začátku každé práce přečte soubor s pravidly projektu. U Claude Code se jmenuje `CLAUDE.md`, u ostatních obvykle `AGENTS.md`. Napište do něj:

- co je to za projekt a pro koho,
- jaké technologie používáte,
- jak je projekt uspořádaný (kde jsou texty, kde opakované části stránek),
- jaká pravidla má dodržovat: jazyk, styl a co nikdy nedělat,
- jak projekt spustit a otestovat.

Nemusíte pak všechno vysvětlovat znovu a agent dělá méně chyb.

## Dovednosti i pro programování

Dovednosti nejsou jen pro chatboty, používají je i programovací agenti. Dovednost agentovi řekne, jak má udělat úkol, který se opakuje. Může to být třeba „jak u nás píšeme stránky“, „jak přidat novou dovednost na web“ nebo „kontrola přístupnosti“. Formát je stejný jako u [dovedností pro vyučující](/funkce/skills).

## Bezpečnost

- **Nikdy nedávejte do kódu hesla a API klíče.** API klíč je heslo, kterým se aplikace přihlašuje k jiné službě. V kódu by se k němu mohl dostat někdo cizí. Uložte ho proto v nastavení hostingu (proměnné prostředí).
- **Nesbírejte osobní údaje.** Výjimkou je, když máte vyřešené GDPR. Nejbezpečnější je statický web bez databáze, tedy web, který jen zobrazuje hotové stránky a nic neukládá.
- **Zabezpečte databázi.** U Supabase zapněte u každé tabulky zabezpečení na úrovni řádků (Row Level Security) a nastavte pravidla, kdo smí data číst a měnit. Jinak se k nim může dostat kdokoli. Agenta o to výslovně požádejte a pravidla zkontrolujte.
- **Kontrolujte, co agent instaluje.** Agent do projektu přidává hotové části kódu od jiných autorů, takzvané balíčky. Neznámé balíčky mohou obsahovat škodlivý kód.
- **Myslete na přístupnost.** Web mají zvládnout i lidé se zrakovým nebo pohybovým omezením. Hlídejte kontrast, ovládání klávesnicí a popisky obrázků.

## Případová studie: tento web

Web Chatboti ve škole jsme v roce 2026 převedli z WordPressu a od té doby ho stavíme Vibe Codingem.

- **Všechny texty jsou soubory Markdown**, tedy obyčejný text s jednoduchými značkami pro nadpisy a seznamy. Jsou uložené v repozitáři (úložišti projektu) [github.com/aidetemcz/chatveskole](https://github.com/aidetemcz/chatveskole). Když chceme změnit text, upravíme soubor.
- **Každá dovednost je složka** se souborem `SKILL.md`, verzí ve formě promptu a údaji pro web, jako je popis a štítky. Web z ní sám vytvoří stránku, tlačítko Kopírovat a ZIP ke stažení.
- **Data jsou v souborech YAML**, tedy v textových souborech s přehledně zapsanými údaji. Máme v nich ceny chatbotů a přehled funkcí. Když se změní ceník, upravíme jeden soubor.
- **Nemáme žádnou databázi.** Web se předem sestaví do hotových (statických) stránek a běží na Vercelu.
- **Změny děláme hromadně přes Claude Code.** Stačí mu napsat například „aktualizuj u všech dovedností věkové limity podle nového přehledu“.

Funkce chatbotů se mění každý měsíc. Udržovat obsah klikáním ve WordPressu jsme nestíhali. S Vibe Codingem upravíme desítky stránek najednou.

[Zpět na Co je Vibe Coding](/vibe-coding/co-je-to)
