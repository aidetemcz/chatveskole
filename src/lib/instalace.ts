// Postup instalace dovednosti podle nástroje — fakta odpovídají stránce content/stranky/funkce/skills.md (zdroje tam).
// ZIPy pro Claude, Gemini a ChatGPT jsou na Google Disku (meta.yaml → stahnout); pro Copilot si učitel dovednost vytvoří sám.
export type Nastroj = { id: string; nazev: string; kroky: string[]; zip: 'claude' | 'gemini' | 'chatgpt' | null };

export const NASTROJE: Nastroj[] = [
  {
    id: 'claude', nazev: 'Claude', zip: 'claude',
    kroky: [
      'Stáhněte ZIP dovednosti pro Claude (nerozbalujte ho).',
      'V Claude otevřete Customize → Skills, klikněte na + a zvolte Upload a skill.',
      'Vyberte ZIP. Dovednost se objeví v seznamu a můžete ji zapnout nebo vypnout.',
      'Pište normálně — Claude dovednost použije sám, když se k úkolu hodí.',
    ],
  },
  {
    id: 'gemini', nazev: 'Gemini', zip: 'gemini',
    kroky: [
      'Stáhněte ZIP dovednosti pro Gemini.',
      'V aplikaci Gemini otevřete správu dovedností a nahrajte ZIP.',
      'Dovednost zavoláte lomítkem a jejím názvem.',
      'Dovednosti mají osobní účty od 18 let. Na školních účtech dostupnost řídí správce.',
    ],
  },
  {
    id: 'chatgpt', nazev: 'ChatGPT', zip: 'chatgpt',
    kroky: [
      'Stáhněte ZIP dovednosti pro ChatGPT.',
      'Tarify Business, Enterprise a Edu: Plugins → Skills → Create → Upload from your computer. Celou sadu může správce přidat do pracovního prostoru jako plugin.',
      'Ostatní tarify: vložte systémový prompt z Google Docs do pokynů projektu a nahrajte soubory ze složky Data.',
      'Zdarma a pro žáky: použijte verzi promptu níže.',
    ],
  },
  {
    id: 'copilot', nazev: 'Copilot', zip: null,
    kroky: [
      'Hotovou dovednost pro Copilot ke stažení nenabízíme, vytvoříte si ji sami.',
      'V Copilot Chatu vytvořte agenta a do jeho pokynů vložte systémový prompt z Google Docs.',
      'Má-li dovednost podklady, nahrajte do agenta i soubory ze složky Data na Google Disku.',
    ],
  },
];
