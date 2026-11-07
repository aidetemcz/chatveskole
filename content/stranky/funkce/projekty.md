---
title: Projekty
menu: Funkce
poradi: 5
popis: Projekty v ChatGPT a Claude, notebooky v Gemini a Copilotu — jak mít pokyny, soubory a konverzace k jednomu tématu na jednom místě a co do nich nahrávat.
aktualizovano: 2026-11-07
stav: koncept
zdroje:
  - https://help.openai.com/en/articles/10169521-projects-in-chatgpt
  - https://support.claude.com/en/articles/9517075-what-are-projects
  - data/funkce-chatbotu.yaml
---

# Projekty

Projekt je složka v chatbotu, ve které máte **pokyny, soubory a konverzace k jednomu tématu**. Chatbot v ní pokaždé ví, o co jde: pro jakou třídu připravujete, podle jakého ŠVP, jakým stylem píšete. Nemusíte to opakovat v každé konverzaci.

Projekty jsou také nejjednodušší náhradou za vlastní GPTs a Gems, které končí.

## Kde projekty najdete

| Nástroj | Jak se jmenují | Zdarma | Sdílení |
|---|---|---|---|
| ChatGPT | Projekty | ano, ve Free 5 souborů na projekt | odkazem — otevře ho každý přihlášený uživatel |
| Claude | Projekty | ano, ve Free nejvýš 5 projektů | jen uvnitř týmu (placené týmové tarify) |
| Gemini | Notebooky (propojené s Gemini Notebook, dříve NotebookLM) | ano | v rámci Google Workspace |
| Copilot | Notebooks | ano, i v bezplatném Copilot Chatu | v rámci organizace |

## Jak projekt založit

1. Vytvořte nový projekt a pojmenujte ho podle účelu, například *Dějepis 8. B* nebo *Slovní hodnocení 2026/27*.
2. Do **pokynů (instrukcí)** napište, co má chatbot vědět a jak má pracovat. Můžete vložit systémový prompt kteréhokoli našeho skillu — najdete ho u skillu jako Google dokument.
3. Nahrajte **soubory**, ze kterých má chatbot čerpat.
4. Všechny konverzace k tématu veďte uvnitř projektu.

## Co do projektu nahrávat

Hodí se: ŠVP a tematické plány, hodnoticí kritéria, školní pravidla, modelové testy, volně dostupné učebnice, seznamy pojmů nebo slovíček, vaše vlastní osvědčené materiály.

Dvě pravidla:

- **Žádné osobní údaje.** Žádné seznamy žáků se jmény, známkami nebo diagnózami.
- **Jen to, co smíte.** Nenahrávejte materiály, u kterých to zakazují autorská práva (například skeny placených učebnic).

## Na formátu záleží

Chatbot nejlépe rozumí jednoduchému textu.

- Text ukládejte jako `.txt`, `.md` nebo `.docx`, tabulky jako `.csv` nebo `.xlsx`.
- PDF s tabulkami a sloupci chatbot často přečte špatně a poplete, co k čemu patří. Pokud můžete, převeďte ho na text.
- Dlouhý dokument rozdělte na menší soubory podle témat.

## Projekt, nebo odkaz na web?

Chatboti umí hledat na internetu, ale na konkrétní webové stránky se spolehlivě neodkazují. Pokud chcete, aby chatbot čerpal z určité stránky, uložte její text jako soubor a nahrajte ho do projektu.

## Projekt jako náhrada sdíleného asistenta

Sdíleli jste s kolegy vlastní GPT odkazem? V ChatGPT můžete místo něj **sdílet projekt**. Kolegové v něm najdou stejné pokyny i soubory, jen každý musí být přihlášený.

**Pozor: ve sdíleném projektu vidí všichni členové všechny konverzace** i nahrané soubory a nefunguje v něm paměť. Hodí se pro malý tým kolegů, kteří na něčem pracují společně, ne pro rozdávání asistenta desítkám učitelů. Pokud chcete, aby si asistenta mohl použít kdokoli, dejte mu systémový prompt (u našich skills je jako Google dokument) — každý si z něj založí vlastní projekt během dvou minut.

[Konektory →](/funkce/konektory)
