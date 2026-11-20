---
title: Projekty
menu: Funkce
poradi: 5
popis: Projekty v ChatGPT a Claude, notebooky v Gemini a Copilotu — jak mít pokyny, soubory a konverzace k jednomu tématu na jednom místě a co do nich nahrávat.
sablona: projekty-pruvodce   # vlastní šablona src/pages/funkce/projekty.astro (návrh z Claude Design, 20. 11. 2026)
aktualizovano: 2026-11-20
stav: koncept
zdroje:
  - https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - https://support.claude.com/en/articles/9517075-what-are-projects
  - https://help.openai.com/en/articles/8555545-file-uploads-faq
  - https://9to5google.com/2026/04/17/gemini-notebooks-free/
  - https://support.microsoft.com/en-us/microsoft-365-copilot/frequently-asked-questions-about-microsoft-365-copilot-notebooks
  - data/funkce-chatbotu.yaml
odkazy:
  - { text: Konektory, href: /funkce/konektory }
  - { text: Katalog dovedností, href: /skills }
---

# Projekty

Projekt je složka v chatbotu, ve které máte **pokyny, soubory a konverzace k jednomu tématu**. Chatbot v ní pokaždé ví, o co jde: pro jakou třídu připravujete, podle jakého ŠVP, jakým stylem píšete. Nemusíte to opakovat v každé konverzaci.

Projekty jsou také nejjednodušší náhradou za vlastní GPTs a Gems, které končí.

<!-- komponenta: video -->
[Průvodce založením a využitím projektu](https://www.loom.com/share/3b77f24d7e85482eaca0a3a6a9c3c69f)

## Co je v projektu

Všechno k jednomu tématu na jednom místě. Chatbot to má k dispozici v každé konverzaci uvnitř projektu.

- **Pokyny** — Co má chatbot vědět a jak má pracovat: pro koho píšete, jakým stylem, podle čeho.
- **Soubory** — Podklady, ze kterých chatbot čerpá: ŠVP, kritéria, vaše osvědčené materiály.
- **Konverzace** — Všechny rozhovory k tématu pohromadě, takže se k nim snadno vrátíte.

## Kde projekty najdete

Projekty mají všechny čtyři chatovací aplikace, jen se jinak jmenují.

| Nástroj | Jak se jmenují | Zdarma | Sdílení |
|---|---|---|---|
| ChatGPT | Projekty | ano, projektů bez omezení, ve Free 5 souborů na projekt | jen v rámci pracovního prostoru (školní domény) |
| Claude | Projekty | ano, ve Free nejvýš 5 projektů | jen uvnitř týmu (placené týmové tarify) |
| Gemini | Notebooky (propojené s Gemini Notebook, dříve NotebookLM) | ano, na webu, ve Free až 50 zdrojů na notebook | v rámci Google Workspace |
| Copilot | Notebooks | ano, v bezplatném Copilot Chatu se školním nebo pracovním účtem | v rámci organizace |

## Jak projekt založit

1. **Založte a pojmenujte** — Pojmenujte projekt podle účelu, například *Dějepis 8. B* nebo *Slovní hodnocení 2026/27*.
2. **Napište pokyny** — Do pokynů (instrukcí) napište, co má chatbot vědět a jak má pracovat. Můžete vložit instrukce kterékoli naší dovednosti, najdete je u dovednosti jako Google dokument.
3. **Nahrajte soubory** — Přidejte podklady, ze kterých má chatbot čerpat. Co se hodí, najdete níže.
4. **Pracujte uvnitř** — Všechny konverzace k tématu veďte uvnitř projektu.

## Co do projektu nahrávat

Hodí se:

- ŠVP a tematické plány
- hodnoticí kritéria
- školní pravidla
- modelové testy
- volně dostupné učebnice
- seznamy pojmů nebo slovíček
- vaše osvědčené materiály

### Dvě pravidla

- **Žádné osobní údaje** — Žádné seznamy žáků se jmény, známkami nebo diagnózami.
- **Jen to, co smíte** — Nenahrávejte materiály, u kterých to zakazují autorská práva (například skeny placených učebnic).

## Na formátu záleží

Chatbot nejlépe rozumí jednoduchému textu.

- **Volte jednoduché formáty** — Text ukládejte jako `.txt`, `.md` nebo `.docx`, tabulky jako `.csv` nebo `.xlsx`.
- **Pozor na PDF** — PDF s tabulkami a sloupci chatbot často přečte špatně a poplete, co k čemu patří. Pokud můžete, převeďte ho na text.
- **Dlouhé dokumenty rozdělte** — Dlouhý dokument rozdělte na menší soubory podle témat.

### Projekt, nebo odkaz na web?

Chatboti umí hledat na internetu, ale na konkrétní webové stránky se spolehlivě neodkazují. Pokud chcete, aby chatbot čerpal z určité stránky, uložte její text jako soubor a nahrajte ho do projektu.

## Projekt jako náhrada sdíleného asistenta

Sdíleli jste s kolegy vlastní GPT odkazem? V ChatGPT můžete místo něj **sdílet projekt**. Kolegové v něm najdou stejné pokyny i soubory. Sdílet ho ale můžete jen v rámci pracovního prostoru vaší školy, ne s lidmi mimo něj.

**Pozor:** ve sdíleném projektu vidí všichni členové všechny konverzace i nahrané soubory a nefunguje v něm paměť. Hodí se pro malý tým kolegů, kteří na něčem pracují společně, ne pro rozdávání asistenta desítkám kolegů.

**Chcete asistenta pro kohokoli?** Dejte kolegům instrukce (u našich dovedností jsou jako Google dokument). Každý si z nich založí vlastní projekt během dvou minut.

## Propojte chatbota s dalšími aplikacemi

Konektory napojí chatbota na Disk, kalendář nebo e-mail, takže soubory nemusíte nahrávat ručně.
