// Postup instalace dovednosti podle nástroje — fakta odpovídají stránce content/stranky/funkce/skills.md (zdroje tam).
// ZIPy pro Claude, Gemini a ChatGPT jsou na Google Disku (meta.yaml → stahnout); pro Copilot si učitel dovednost vytvoří sám.
import { t } from './jazyk';

export type Nastroj = { id: string; nazev: string; kroky: string[]; zip: 'claude' | 'gemini' | 'chatgpt' | null };

export const NASTROJE: Nastroj[] = [
  {
    id: 'chatgpt', nazev: 'ChatGPT', zip: 'chatgpt',
    kroky: [
      t('Stáhněte ZIP dovednosti pro ChatGPT.'),
      t('Placené tarify od Plus: Plugins → Skills → Create → Upload from your computer. Celou sadu může správce přidat do pracovního prostoru jako plugin.'),
      t('Zdarma a tarif Go dovednosti nemají: vložte instrukce dovednosti z Google Docs do pokynů projektu a nahrajte soubory ze složky Data.'),
      t('Dovednost vyvoláte v chatu zavináčem: napište @ a začněte psát její název.'),
      t('Zdarma a pro žáky: použijte verzi promptu níže.'),
    ],
  },
  {
    id: 'gemini', nazev: 'Gemini', zip: 'gemini',
    kroky: [
      t('Stáhněte ZIP dovednosti pro Gemini.'),
      t('V aplikaci Gemini otevřete Více… → Přizpůsobit → Dovednosti a nahrajte ZIP.'),
      t('Dovednost vyvoláte v chatu zavináčem: napište @ a začněte psát její název.'),
      t('Dovednosti mají osobní účty od 18 let. Na školních účtech dostupnost řídí správce.'),
    ],
  },
  {
    id: 'claude', nazev: 'Claude', zip: 'claude',
    kroky: [
      t('Stáhněte ZIP dovednosti pro Claude (nerozbalujte ho).'),
      t('V Claude otevřete Customize → Skills, klikněte na + a zvolte Upload a skill.'),
      t('Vyberte ZIP. Dovednost se objeví v seznamu a můžete ji zapnout nebo vypnout.'),
      t('Dovednost vyvoláte v chatu lomítkem: napište / a začněte psát její název. Claude ji umí použít i sám, když se k úkolu hodí, a to i v projektech.'),
    ],
  },
  {
    id: 'copilot', nazev: 'MS Copilot', zip: null,
    kroky: [
      t('Dovednosti má Copilot jen s placenou licencí Microsoft 365 Copilot. Hotovou dovednost pro Copilot ke stažení nenabízíme, místo ní si vytvoříte agenta.'),
      t('V Copilot Chatu vytvořte agenta a do jeho pokynů vložte instrukce dovednosti z Google Docs.'),
      t('Pokud má dovednost podklady, nahrajte do agenta i soubory ze složky Data na Google Disku.'),
      t('Agenta vyvoláte v Copilot Chatu zavináčem, nebo ho otevřete v seznamu agentů.'),
    ],
  },
];
