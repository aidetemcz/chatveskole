---
title: Projekty
menu: Funkcie
poradi: 5
popis: Projekty v ChatGPT a Claude, notebooky v Gemini a Copilote — ako mať pokyny, súbory a konverzácie k jednej téme na jednom mieste a čo do nich nahrávať.
sablona: projekty-pruvodce   # vlastní šablona src/pages/funkce/projekty.astro (návrh z Claude Design, 20. 11. 2026)
aktualizovano: 2026-11-21
stav: ke-kontrole
zdroje:
  - https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - https://support.claude.com/en/articles/9517075-what-are-projects
  - https://help.openai.com/en/articles/8555545-file-uploads-faq
  - https://9to5google.com/2026/04/17/gemini-notebooks-free/
  - https://support.microsoft.com/en-us/microsoft-365-copilot/frequently-asked-questions-about-microsoft-365-copilot-notebooks
  - data/funkce-chatbotu.yaml
odkazy:
  - { text: Konektory, href: /funkce/konektory }
  - { text: Katalóg zručností, href: /skills }
---

# Projekty

Projekt je priečinok v chatbote, v ktorom máte **pokyny, súbory a konverzácie k jednej téme**. Chatbot v ňom zakaždým vie, o čo ide: pre akú triedu pripravujete, podľa akého ŠkVP, akým štýlom píšete. Nemusíte to opakovať v každej konverzácii.

Projekty sú aj najjednoduchšou náhradou za vlastné GPTs a Gems, ktoré končia.

<!-- komponenta: video -->
[Sprievodca založením a využitím projektu (video v češtine)](https://www.loom.com/share/3b77f24d7e85482eaca0a3a6a9c3c69f)

## Čo je v projekte

Všetko k jednej téme na jednom mieste. Chatbot to má k dispozícii v každej konverzácii vnútri projektu.

- **Pokyny** — Čo má chatbot vedieť a ako má pracovať: pre koho píšete, akým štýlom, podľa čoho.
- **Súbory** — Podklady, z ktorých chatbot čerpá: ŠkVP, kritériá, vaše osvedčené materiály.
- **Konverzácie** — Všetky rozhovory k téme pohromade, takže sa k nim ľahko vrátite.

## Kde projekty nájdete

Projekty majú všetky štyri chatovacie aplikácie, len sa inak volajú.

| Nástroj | Ako sa volajú | Zadarmo | Zdieľanie |
|---|---|---|---|
| ChatGPT | Projekty | áno, projektov bez obmedzenia, vo Free 5 súborov na projekt | len v rámci pracovného priestoru (školskej domény) |
| Claude | Projekty | áno, vo Free najviac 5 projektov | len v rámci tímu (platené tímové tarify) |
| Gemini | Notebooky (prepojené s Gemini Notebook, predtým NotebookLM) | áno, na webe, vo Free až 50 zdrojov na notebook | v rámci Google Workspace |
| Copilot | Notebooks | áno, v bezplatnom Copilot Chate so školským alebo pracovným účtom | v rámci organizácie |

## Ako založiť projekt

1. **Založte a pomenujte** — Pomenujte projekt podľa účelu, napríklad *Dejepis 8. B* alebo *Slovné hodnotenie 2026/27*.
2. **Napíšte pokyny** — Do pokynov (inštrukcií) napíšte, čo má chatbot vedieť a ako má pracovať. Môžete vložiť inštrukcie ktorejkoľvek našej zručnosti, nájdete ich pri zručnosti ako dokument Google.
3. **Nahrajte súbory** — Pridajte podklady, z ktorých má chatbot čerpať. Čo sa hodí, nájdete nižšie.
4. **Pracujte vnútri** — Všetky konverzácie k téme veďte vnútri projektu.

## Čo do projektu nahrávať

Hodia sa:

- ŠkVP a tematické plány
- hodnotiace kritériá
- školské pravidlá
- modelové testy
- voľne dostupné učebnice
- zoznamy pojmov alebo slovíčok
- vaše osvedčené materiály

### Dve pravidlá

- **Žiadne osobné údaje** — Žiadne zoznamy žiakov s menami, známkami alebo diagnózami.
- **Len to, čo smiete** — Nenahrávajte materiály, pri ktorých to zakazujú autorské práva (napríklad skeny platených učebníc).

## Na formáte záleží

Chatbot najlepšie rozumie jednoduchému textu.

- **Voľte jednoduché formáty** — Chatbot najlepšie pracuje s malými textovými súbormi: text ukladajte ako `.txt` alebo `.md` (Markdown), tabuľky ako `.csv`. Formáty `.docx` a `.xlsx` použite, len keď to inak nejde. Šetrí to aj limity a zrýchľuje prácu.
- **Pozor na PDF** — PDF s tabuľkami a stĺpcami chatbot často prečíta zle a popletie, čo k čomu patrí. Nahrajte ho do chatu v projekte a požiadajte chatbota, aby ho previedol na Markdown. Výsledný súbor potom pridajte do projektu.
- **Dlhé dokumenty rozdeľte** — Dlhý dokument rozdeľte na menšie súbory podľa tém. Rozdelenie môžete nechať na chatbota, napríklad po kapitolách.

### Projekt, alebo odkaz na web?

Chatboty vedia hľadať na internete, ale na konkrétne webové stránky sa spoľahlivo neodkazujú. Ak chcete, aby chatbot čerpal z určitej stránky, požiadajte ho v projekte, aby text stránky previedol na Markdown, a súbor pridajte do projektu. Odkaz v pokynoch nestačí: chatbot môže tvrdiť, že stránku prečítal, aj keď to nie je pravda.

## Projekt ako náhrada zdieľaného asistenta

Zdieľali ste s kolegami vlastný GPT odkazom? V ChatGPT môžete namiesto neho **zdieľať projekt**. Kolegovia v ňom nájdu rovnaké pokyny aj súbory. Zdieľať ho však môžete len v rámci pracovného priestoru vašej školy, nie s ľuďmi mimo neho.

**Pozor:** v zdieľanom projekte vidia všetci členovia všetky konverzácie aj nahrané súbory a nefunguje v ňom pamäť. Hodí sa pre malý tím kolegov, ktorí na niečom pracujú spoločne, nie na rozdávanie asistenta desiatkam kolegov. Ak je projekt prepojený s Diskom Google alebo OneDrivom, uvidia kolegovia aj tieto dáta, aj keď do príslušných priečinkov sami prístup nemajú.

**Chcete asistenta pre kohokoľvek?** Dajte kolegom inštrukcie (pri našich zručnostiach sú ako dokument Google). Každý si z nich založí vlastný projekt za dve minúty.

## Prepojte chatbota s ďalšími aplikáciami

Konektory prepoja chatbota s Diskom, kalendárom alebo e-mailom, takže súbory nemusíte nahrávať ručne.
