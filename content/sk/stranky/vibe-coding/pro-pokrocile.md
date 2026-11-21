---
title: Vibe Coding pre pokročilých
menu: Vibe Coding
poradi: 5
popis: Programovací agenti ako Claude Code alebo Codex, GitHub, hosting a databázy. Ako agentovi zadať pravidlá, na čo si dať pozor a ako staviame tento web.
sablona: pokrocili-pruvodce   # vlastní šablona src/pages/vibe-coding/pro-pokrocile.astro
aktualizovano: 2026-11-21
zdroje:
  - https://supabase.com/pricing
  - https://supabase.com/docs/guides/database/postgres/row-level-security
  - https://firebase.google.com/pricing
  - https://neon.com/pricing
stav: ke-kontrole   # slovenský preklad, kontrola korektorom
---

# Vibe Coding pre pokročilých

Po nejakom čase používania Vibe Coding aplikácií pre začiatočníkov pravdepodobne zistíte, že oveľa lepšie fungujú agentové riešenia ako Claude Code, OpenAI Codex alebo Google Antigravity. V nasledujúcom prehľade opisujeme, ako ich prepojiť do základnej zostavy a na čo si dať pozor.

## Programovací agenti

Programovací agenti sú nástroje AI, ktoré pracujú priamo so súbormi vášho projektu: spúšťajú ho, testujú a opravujú. Vyberte si podľa toho, čo už používate a koľko chcete platiť.

| Nástroj | Pre koho | Cena |
|---|---|---|
| **Claude Code** | vyučujúci informatiky, správcovia webov | v tarife Claude Pro a vyšších |
| **OpenAI Codex** | to isté pre tých, kto pracujú v ChatGPT | obmedzene zadarmo, plne v platených tarifoch |
| **Google Antigravity** | kto chce vývojové prostredie od Googlu | zadarmo s limitmi, 18+ |
| **Cursor** | kto chce editor kódu s AI | obmedzene zadarmo, 18+ |

## Základná zostava

Základná zostava (anglicky stack) je súbor nástrojov a služieb, na ktorých vaša aplikácia stojí. Patrí do nej agent, ktorý kód píše, úložisko, kde je kód uložený, služba, ktorá aplikáciu zverejní, a prípadne databáza na údaje a prihlasovanie.

1. **Programovací agent** — Agent číta a upravuje súbory projektu podľa vašich pokynov. Vy mu bežnou rečou opíšete, čo chcete zmeniť, a on to naprogramuje, spustí a otestuje.
2. **Úložisko kódu** — Kód aplikácie potrebuje miesto, kde je uložený aj s históriou všetkých zmien. Najčastejšie je to [GitHub](https://github.com). Keď agent niečo pokazí, ľahko sa vrátite k predchádzajúcej verzii.
3. **Zverejnenie na internete** — Služby ako [Vercel](https://vercel.com), [Netlify](https://www.netlify.com) alebo [GitHub Pages](https://pages.github.com) prepojíte s úložiskom a ony aplikáciu zverejnia. Po každej zmene v úložisku sa web sám znova zverejní.
4. **Databáza a prihlasovanie** — Keď aplikácia potrebuje ukladať údaje alebo prihlasovať používateľov, použite [Supabase](https://supabase.com), prípadne [Firebase](https://firebase.google.com) od Googlu alebo [Neon](https://neon.com). Ponúkajú databázu, prihlasovanie používateľov a ukladanie súborov a majú bezplatný tarif s limitmi. Pri zakladaní projektu zvoľte umiestnenie údajov v EÚ.

## Ako napojiť agenta na GitHub

Agent na webe pracuje priamo s vaším repozitárom (úložiskom) na GitHube, takže do počítača nemusíte nič inštalovať. Pri Claude Code aj OpenAI Codex je postup podobný.

1. **Vytvorte repozitár** — Založte si účet na GitHube a v ňom nový repozitár pre projekt. Môže byť súkromný. Agent na webe pracuje len s repozitárom, ktorý už na GitHube existuje, preto aj pre úplne nový projekt najprv založte prázdny.
2. **Prepojte agenta s GitHubom** — V Claude Code na webe (claude.ai/code) alebo v Codexe v ChatGPT sa prihláste ku GitHubu a povoľte prístup k vybraným repozitárom. Pri Claude Code pritom nainštalujete aplikáciu Claude pre GitHub.
3. **Zadajte úlohu** — Vyberte repozitár a bežnou rečou napíšte, čo má agent urobiť. Agent si kód stiahne, upraví ho a zmeny uloží do novej vetvy, teda do samostatnej verzie, ktorá nezasahuje do tej hlavnej.
4. **Skontrolujte a schváľte zmeny** — Agent pripraví pull request, teda návrh zmien. Prejdite si ho a zlúčte do hlavnej vetvy. Hosting prepojený s GitHubom potom web sám znova zverejní.

## Bezpečnosť

- **Nikdy nedávajte do kódu heslá a API kľúče.** API kľúč je heslo, ktorým sa aplikácia prihlasuje k inej službe. V kóde by sa k nemu mohol dostať niekto cudzí. Uložte ho preto v nastaveniach hostingu (premenné prostredia).
- **Nezbierajte osobné údaje.** Výnimkou je, keď máte vyriešené GDPR. Najbezpečnejší je statický web bez databázy, teda web, ktorý len zobrazuje hotové stránky a nič neukladá.
- **Zabezpečte databázu.** V Supabase zapnite pri každej tabuľke zabezpečenie na úrovni riadkov (Row Level Security) a nastavte pravidlá, kto smie údaje čítať a meniť. Inak sa k nim môže dostať ktokoľvek. Agenta o to výslovne požiadajte a pravidlá skontrolujte.
- **Kontrolujte, čo agent inštaluje.** Agent do projektu pridáva hotové časti kódu od iných autorov, takzvané balíčky. Neznáme balíčky môžu obsahovať škodlivý kód.
- **Myslite na prístupnosť.** Web majú zvládnuť aj ľudia so zrakovým alebo pohybovým obmedzením. Strážte kontrast, ovládanie klávesnicou a popisy obrázkov.

## Prípadová štúdia: tento web

Web Chatboty v škole sme v roku 2026 previedli zo systému WordPress na Astro pomocou Vibe Codingu. Ak nastane vo funkciách nejaká ďalšia zmena, stačí, keď ju v prirodzenom jazyku opíšeme Claude Code a on urobí zmeny za nás. My ich potom len skontrolujeme, prípadne informácie spresníme.

- **Všetky texty sú súbory Markdown**, teda obyčajný text s jednoduchými značkami pre nadpisy a zoznamy. Sú uložené v repozitári (úložisku projektu). Keď chceme zmeniť text, upravíme súbor.
- **Každá zručnosť je priečinok** so súborom `SKILL.md`, verziou vo forme promptu a údajmi pre web, ako je opis a štítky. Web z neho sám vytvorí stránku, tlačidlo Kopírovať a ZIP na stiahnutie.
- **Údaje sú v súboroch YAML**, teda v textových súboroch s prehľadne zapísanými údajmi. Máme v nich ceny chatbotov a prehľad funkcií. Keď sa zmení cenník, upravíme jeden súbor.
- **Nemáme žiadnu databázu.** Web sa vopred zostaví do hotových (statických) stránok a beží na Verceli.
- **Zmeny robíme hromadne cez Claude Code.** Stačí mu napísať napríklad „aktualizuj pri všetkých zručnostiach vekové limity podľa nového prehľadu“.

[Späť na Čo je Vibe Coding](/vibe-coding/co-je-to)
