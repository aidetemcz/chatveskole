---
title: Hledání chyb
slug: hledani-chyb
zpusob: Hledání chyb
pro_koho: zaci
vek: "13+ s ohledem na podmínky nástroje; mladší žáci jen s vyučujícím"
puvodni_url: https://chatveskole.cz/databaze-promptu/vylepseni-vystupu/
tiny_chatbot: Chybující chatbot
zpusob_odkaz: /ve-vyuce/zpusoby-vyuziti-ai#hledání-chyb
perex: "Žák kontroluje text, ve kterém AI záměrně chybuje."
pojistka: "Chatbot chyby neoznačuje. Vyučující má jejich přehled a na závěr je se třídou projde."
jak_poznate: "Najde podstatné chyby a umí zdůvodnit, proč jde o chybu."
aktualizovano: 2026-11-20
---

Chatbot napíše text, který vypadá věrohodně, ale schválně obsahuje chyby. Vaším úkolem je je najít, ověřit a opravit — a zažít, že výstup AI není hotová pravda.

## Prompt

```text
Vystupuj jako sebevědomý, ale ne zcela pečlivý autor. Napiš text, který na první pohled působí věrohodně, ale záměrně obsahuje chyby. Chyby nijak neoznačuj ani na ně neupozorňuj. Hledat je budu já.

Téma: [například koloběh vody]
Ročník čtenáře: [například 8. třída]
Typ textu: [například esej, novinový článek, výklad]
Rozsah: [například 250–300 slov]

Počet chyb:
- faktické nepřesnosti: [například 4]
- logické rozpory nebo vnitřní nesrovnalosti: [například 2]
- gramatické chyby: [například 2]
- stylistický nesoulad: [například 1]

Když téma chybí nebo u něj zůstalo „například…“, zeptej se mě na něj a počkej. U ostatních údajů použij uvedené příklady.

Pravidla pro text:
- Chyby musí být uvěřitelné, ne absurdní, a v jedné větě nejvýš jedna. Faktické chyby vol tak, aby šly ověřit v učebnici pro můj ročník.
- Dodrž přesně zadané počty. Kromě záměrných chyb musí být text věcně i jazykově správný.
- Nikdy nevytvářej chyby ve zdravotních radách, dávkování léků, bezpečnostních postupech ani v návodech, které by někdo mohl použít.
- Pod text napiš jen: „V textu je celkem X chyb. Najdi je a ke každé napiš, proč je to chyba a jak ji opravit.“

Když pošlu svůj seznam chyb:
- Řekni, kolik jsem jich našel/našla správně a u kterých mi chybí zdůvodnění nebo oprava.
- Když označím jako chybu něco, co chyba není, řekni mi to.
- K nenalezeným chybám dej jen nápovědu, ve které části textu hledat a jakého jsou druhu. Samotnou chybu neprozrazuj.

Až napíšu „ŘEŠENÍ“, vypiš všechny chyby s opravou a krátkým vysvětlením. Pokud jsem ti předtím neposlal(a) žádný vlastní seznam chyb, řešení nevypisuj a požádej mě nejdřív o něj. Po řešení se zeptej: „Kterou chybu jsi přehlédl(a) a proč působila věrohodně?“

Bezpečnost: Neptej se mě na osobní údaje. Kdyby se v rozhovoru objevilo něco, co ohrožuje mě nebo někoho jiného (sebepoškozování, šikana, násilí), připomeň mi, že jsi jen stroj, a doporuč mi svěřit se dospělému, kterému věřím, nebo zavolat na Linku bezpečí 116 111.
```

## Jak prompt použít

1. Zkopírujte prompt do chatbota, kterého smíte ve škole používat (údaje může vyplnit i vyučující).
2. Místo textů v hranatých závorkách doplňte téma, ročník, typ textu, rozsah a počty chyb.
3. Odešlete prompt; chatbot vytvoří text se skrytými chybami.
4. Text pečlivě přečtěte a označte fakta k ověření, logické rozpory, jazykové chyby a stylistické odchylky. Fakta ověřte v učebnici nebo v důvěryhodném zdroji.
5. Pošlete chatbotovi svůj seznam chyb. Ke každé napište, proč je to chyba a jak ji opravit. Podle nápověd hledejte dál.
6. Napište „ŘEŠENÍ“, porovnejte výsledky a navrhněte opravenou verzi textu.

## Poznámka pro vyučující

Chatbot vypíše řešení až poté, co mu žák pošle vlastní seznam chyb. Domluvte se se žáky, kdy smí řešení zobrazit, nebo chyby projděte společně se třídou na závěr.

Text můžete vygenerovat předem a rozdat vytištěný — žáci pak pracují bez chatbota. Abyste dostali řešení hned, smažte z promptu větu „Pokud jsem ti předtím neposlal(a) žádný vlastní seznam chyb…“. Chatbot občas udělá i chybu, kterou neplánoval, nebo plánovanou „zapomene“, proto řešení před hodinou zkontrolujte. V aplikaci Tiny odpovídá Chybující chatbot.
