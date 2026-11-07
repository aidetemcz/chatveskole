# Rešerše k 7. 11. 2026 — podklady pro texty webu

Shrnutí ověřených faktů, ze kterých vycházejí stránky a `data/*.yaml`. ⚠ = neoficiální nebo nepotvrzený zdroj. Při aktualizaci webu začněte tady a zdroje znovu projděte.

## Skills — formát a instalace

- Formát Agent Skills je otevřený standard (https://agentskills.io/specification). Povinné: `SKILL.md` s `name` (1–64 znaků, `a-z0-9-`, bez pomlčky na začátku/konci a bez `--`, shodné s názvem složky) a `description` (1–1024 znaků, co skill dělá a kdy ho použít). Volitelné složky `scripts/`, `references/`, `assets/`. Doporučení: SKILL.md pod 500 řádků, odkazy na soubory jen jednu úroveň hluboko.
- Claude navíc: v `name` ani `description` nesmí být XML tagy, `name` nesmí obsahovat `anthropic` ani `claude` (https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).
- **Claude:** Customize → Skills → + → Upload a skill (ZIP se složkou skillu v kořeni). Všechny tarify vč. Free, musí být zapnuté spouštění kódu. Sdílení jen Team/Enterprise (https://support.claude.com/en/articles/12512180-use-skills-in-claude).
- **Gemini:** osobní účty 18+, přihlášení, zapnutá historie aktivity; bez předplatného. Nahrání SKILL.md, složky nebo ZIP do 100 MB, volání lomítkem, max. 100 aktivních skills. Spuštěno 30. 9. 2026, rozšiřování v aplikaci od 13. 10. do poloviny listopadu. Sdílení u osobních účtů „v příštích týdnech“ (https://support.google.com/gemini/answer/17094296, https://support.google.com/gemini/answer/18560919).
- **Gems → skills:** osobní účty 18+ od 17. 11. 2026 automaticky (Gems jen pro čtení), 17. 12. 2026 Gems odstraněny; Workspace business nejdříve 1. 3. 2027, education nejdříve 1. 6. 2027; z Gems vzniknou neaktivní koncepty skills, které musí autor zkontrolovat a zapnout; sdílení z Disku se přenese (https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills). Sdílení mimo doménu povoluje správce, příjemce dostane kopii, do 18 let nelze (https://knowledge.workspace.google.com/admin/studio/allow-skill-sharing).
- **Microsoft Copilot Cowork:** Customize → Skills → Add → Upload skill; `.md` do 1 MB nebo ZIP do 10 MB (50 MB rozbalený, 100 souborů), `SKILL.md` v kořeni ZIPu; ukládá se na OneDrive; sdílení jen v organizaci (https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize). Agent Builder: jen ZIP, max. 8 skills na agenta, licence M365 Copilot (https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-skills). ⚠ limit 50 vlastních skills na profil jen z laboratoře Microsoftu na GitHubu.
- **ChatGPT:** samostatné osobní skills v Business, Enterprise, Healthcare, Edu (Enterprise a Edu ve výchozím stavu vypnuté); Plugins → Skills → Create → Upload; sdílení v rámci workspace (https://help.openai.com/en/articles/20001066-skills-in-chatgpt). ⚠ Ceník chatgpt.com/pricing uvádí Skills u všech tarifů — rozpor, ověřit.

## Pluginy

- **ChatGPT:** pluginy od ~9. 7. 2026 ⚠; obsahují skills, aplikace (konektory), šablony aplikací, MCP servery. Sdílení: jen pozvaní / kdokoli ve workspace s odkazem / v adresáři workspace; veřejný adresář jen po podání ZIPu, ověření identity a schválení OpenAI (https://help.openai.com/en/articles/20001256-plugins-in-chatgpt, https://developers.openai.com/plugins/deploy/submission). Archiv Claude pluginu jen se skills lze podat přímo a OpenAI ho převede (https://developers.openai.com/plugins/guides/submit-claude-plugin).
- **Konec GPTs** (⚠ jen sekundární zdroje citující FAQ 20001519, které nešlo načíst): GPTs končí 11. 12. 2026 ve všech tarifech, Enterprise s odkladem 11. 2. 2027; migrační nástroj od 22. 9. 2026; nové GPTs nelze tvořit od 26. 10. 2026. Migrace: My GPTs → Migrate to plugin. Přenese se: pokyny → skill, znalosti → referenční soubory, aplikace. Nepřenese se: vlastní akce, výběr modelu, sdílení, konverzace. Plugin je soukromý, GPT zůstane jen pro čtení.
- **Claude:** `.claude-plugin/plugin.json` (povinné jen `name` v kebab-case; jména začínající `claude-`/`anthropic-` odmítnuta), složky `skills/<name>/SKILL.md`, `commands/`, `agents/`, `hooks/`; složka `bin/` v kořeni blokuje instalaci na claude.ai (https://code.claude.com/docs/en/plugins-reference). Marketplace: `.claude-plugin/marketplace.json` s `name`, `owner`, `plugins[]` (`name`, `source`) (https://code.claude.com/docs/en/plugin-marketplaces). claude.ai: Customize → Plugins → Add → Add marketplace (GitHub) nebo Upload (.zip/.plugin), limity 200 MB, 5 000 souborů, 25 marketplaces; jen placené tarify; v chatu se načítají skills a příkazy (https://support.claude.com/en/articles/13837440-use-plugins-in-claude, https://claude.com/docs/plugins/platform-support). Veřejný adresář claude.ai/directory, podání z placených účtů, plugin musí být z veřejného GitHub repozitáře (https://claude.com/docs/directory/publish).

## Ceny (viz data/ceny.yaml)

Zdroje: https://chatgpt.com/pricing, https://claude.com/pricing, https://gemini.google/subscriptions/, https://www.microsoft.com/cs-cz/microsoft-365/buy/compare-all-microsoft-365-products, https://www.microsoft.com/en-us/education/products/copilot-in-education. ⚠ ChatGPT Go 249 Kč a Plus 499 Kč (zdroj cc.cz 10/2025), ⚠ Perplexity (finout.io).

## Věk a legislativa

- ChatGPT 13+, do 18 se souhlasem rodiče; ChatGPT for Teens (13–17) od 18. 8. 2026 (https://openai.com/policies/eu-terms-of-use/). ⚠ plné spuštění v EU nepotvrzeno. Reklamy ve Free a Go v EHP od srpna 2026, ne pro nezletilé (https://openai.com/blog/chatgpt-ads-expands-across-europe). Odhad věku a ověření přes Persona (https://openai.com/index/our-approach-to-age-prediction/).
- Gemini osobní 13+ / podle země (https://support.google.com/gemini/answer/13278668); v ČR spravuje dítě účet Google samo od 15 (https://support.google.com/accounts/answer/1350409); placené tarify 18+; školní účty všechny věky, správce zapíná, do 18 omezené funkce (https://knowledge.workspace.google.com/admin/generative-ai/gemini-app).
- Copilot 13+ (https://support.microsoft.com/en-US/microsoft-copilot/microsoft-copilot-age-limits-and-parental-controls); Copilot Chat pro studenty 13+ přes správce.
- Claude 18+ (https://www.anthropic.com/legal/consumer-terms); registrace: povinné ověření telefonem (https://support.claude.com/en/articles/8287232), při podezření na nezletilost ověření přes Yoti (https://support.claude.com/en/articles/15171100).
- GDPR v ČR: souhlas dítěte od 15 let (§ 7 zák. č. 110/2019 Sb.).
- AI Act čl. 4 (AI gramotnost) od 2. 2. 2025; Digital Omnibus (nařízení EU 2026/1744, účinné 27. 7. 2026) povinnost zmírnil a posunul termíny pro vysoce rizikové systémy z přílohy III (vč. vzdělávání) na 2. 12. 2027 (https://eur-lex.europa.eu/eli/reg/2026/1744/oj).
- NPI Jak na AI ve škole (2025): https://digitalizace.rvp.cz/ke-stazeni#doporuceni-pro-ai, plakát https://digitalizace.rvp.cz/files/jak-na-ai-ve-skole-2025-plakat.pdf.

## Vibe coding

Viz tabulky na stránce `content/stranky/vibe-coding/nastroje.md`. Klíčové: ChatGPT Canvas ukončen 28. 5. 2026 ⚠ (sekundární zdroje); ChatGPT Sites jen placené tarify; Copilot App Builder končí 30. 11. 2026 (https://mc.merill.net/message/MC1505609); Claude artefakty — veřejný odkaz u nových artefaktů jen Pro a vyšší (https://support.claude.com/en/articles/9547008); Gemini Canvas zdarma 13+, sdílený odkaz umožní vidět i měnit data (https://support.google.com/gemini/answer/16047321).

## Tiny a AI dětem

- Tiny: 11 chatbotů podle Bloomovy taxonomie, učitel vidí konverzace, 7 aktivit bez AI, AI asistenti pro učitele; teacher.tiny.school / student.tiny.school; data v EU, anonymizace před odesláním do OpenAI; financování Google.org a TA ČR; bezplatné; věk 13+, 11–12 se souhlasem zákonného zástupce, pod 11 ne (https://tiny.school, https://www.tiny.school/popis-sluzby/, https://www.tiny.school/podminky-uziti/). Rozpory na webu Tiny viz `docs/otevrene-otazky.md`.
- AI kurikulum: výpis https://kurikulum.aidetem.cz/vypis-vseho/; Vibecoding 01 (Macaly / Google AI Studio, verze 02, 04/2026); metodika formativního hodnocení verze 06 (03/2026) odkazuje na 4 asistenty z chatveskole.cz.
- MňauCoder (https://mnaucoder.cz): Scratch + strojové učení (Machine Learning for Kids), Scratch Copilot.
- Školení Vibecoding pro školy: https://vzdelavame.aidetem.cz/akce/sborovna/vibecoding-pro-skoly/
