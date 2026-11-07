---
title: Vibe coding pro pokročilé
menu: Vibe Coding
poradi: 5
popis: Claude Code, Codex, Antigravity a Cursor, GitHub a Vercel, instrukce pro agenta v CLAUDE.md a bezpečnost. Jak stavíme web Chatboti ve škole.
aktualizovano: 2026-11-07
stav: koncept
---

# Vibe coding pro pokročilé

Když vám přestane stačit aplikace v okně chatbota — chcete web s více stránkami, vlastní doménu, data ze souborů nebo spolupráci v týmu — je čas na **programovací agenty**. Pracují přímo se soubory vašeho projektu, spouštějí ho, testují a opravují.

## Programovací agenti

| Nástroj | Pro koho | Cena |
|---|---|---|
| **Claude Code** (terminál, desktop, web) | učitelé informatiky, správci webů | tarif Claude Pro a vyšší |
| **OpenAI Codex** | totéž v prostředí ChatGPT | omezeně zdarma, plně v placených tarifech |
| **Google Antigravity** | vývojové prostředí od Googlu | zdarma s limity, 18+ |
| **Cursor** | editor kódu s AI | omezeně zdarma, 18+ |

## Základní sestava

1. **GitHub** — úložiště kódu s historií všech změn. Když agent něco rozbije, vrátíte se zpět.
2. **Programovací agent** — upravuje soubory podle vašich pokynů.
3. **Hosting** — [Vercel](https://vercel.com), [Netlify](https://www.netlify.com) nebo [GitHub Pages](https://pages.github.com). Po každé změně na GitHubu se web sám znovu zveřejní.

## Instrukce pro agenta

Agent si na začátku každé práce přečte soubor s pravidly projektu — u Claude Code `CLAUDE.md`, u ostatních obvykle `AGENTS.md`. Napište do něj:

- co je to za projekt a pro koho,
- jaké technologie používáte,
- jak je projekt uspořádaný (kde jsou texty, kde komponenty),
- pravidla: jazyk, styl, co nikdy nedělat,
- jak projekt spustit a otestovat.

Ušetříte tím vysvětlování a agent dělá méně chyb.

## Skills i pro programování

Skills nejsou jen pro chatboty. Programovací agenti je používají také — třeba skill „jak u nás píšeme stránky“, „jak přidat nový skill na web“ nebo „kontrola přístupnosti“. Formát je stejný jako u [skills pro učitele](/funkce/skills).

## Bezpečnost

- **Nikdy nedávejte do kódu hesla a API klíče.** Patří do nastavení hostingu (proměnné prostředí).
- **Nesbírejte osobní údaje**, pokud nemáte vyřešené GDPR. Statický web bez databáze je nejbezpečnější.
- **Kontrolujte, co agent instaluje.** Neznámé balíčky mohou obsahovat škodlivý kód.
- **Myslete na přístupnost** — kontrast, ovládání klávesnicí, popisky obrázků.

## Případová studie: tento web

Web Chatboti ve škole jsme v roce 2026 převedli z WordPressu na vibe coding:

- **Všechny texty jsou soubory Markdown** v repozitáři [github.com/aidetemcz/chatveskole](https://github.com/aidetemcz/chatveskole). Úprava textu = úprava souboru.
- **Každý skill je složka** se souborem `SKILL.md`, verzí promptu a metadaty. Web z ní sám vytvoří stránku, tlačítko Kopírovat a ZIP ke stažení.
- **Data jsou v souborech YAML** — ceny chatbotů, přehled funkcí. Když se změní ceník, upravíme jeden soubor.
- **Žádná databáze.** Web se sestaví do statických stránek a běží na Vercelu.
- **Změny děláme hromadně přes Claude Code**, například „aktualizuj u všech skills věkové limity podle nového přehledu“.

Funkce chatbotů se mění každý měsíc. Udržovat obsah klikáním ve WordPressu nestíhal; s vibe codingem upravíme desítky stránek najednou.

[Zpět na Co je vibe coding](/vibe-coding/co-je-to)
