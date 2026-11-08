// Postup instalace skillu podle nástroje — fakta odpovídají stránce content/stranky/funkce/skills.md (zdroje tam).
export type Nastroj = { id: string; nazev: string; kroky: (slug: string) => string[]; zip: 'skill' | 'copilot' | 'plugin' };

export const NASTROJE: Nastroj[] = [
  {
    id: 'claude', nazev: 'Claude', zip: 'skill',
    kroky: () => [
      'Stáhněte ZIP skillu (nerozbalujte ho).',
      'V Claude otevřete Customize → Skills, klikněte na + a zvolte Upload a skill.',
      'Vyberte ZIP. Skill se objeví v seznamu a můžete ho zapnout nebo vypnout.',
      'Pište normálně — Claude skill použije sám, když se k úkolu hodí.',
    ],
  },
  {
    id: 'gemini', nazev: 'Gemini', zip: 'skill',
    kroky: (slug) => [
      'Stáhněte ZIP skillu.',
      'V aplikaci Gemini otevřete správu skills a nahrajte ZIP, složku nebo samotný soubor SKILL.md.',
      `Skill zavoláte lomítkem: /${slug}.`,
      'Skills mají osobní účty od 18 let. Na školních účtech dostupnost řídí správce.',
    ],
  },
  {
    id: 'copilot', nazev: 'Copilot', zip: 'copilot',
    kroky: () => [
      'Copilot Cowork: Customize → Skills → Add → Upload skill (soubor .md do 1 MB nebo ZIP do 10 MB). Vyžaduje licenci Microsoft 365 Copilot.',
      'Agent Builder: ZIP přidáte do agenta, nejvýš 8 skills na agenta.',
      'Bez licence: v Copilot Chatu vytvořte agenta a do pokynů vložte systémový prompt z Google Docs.',
    ],
  },
  {
    id: 'chatgpt', nazev: 'ChatGPT', zip: 'plugin',
    kroky: () => [
      'Tarify Business, Enterprise a Edu: Plugins → Skills → Create → Upload from your computer. Celou sadu může správce přidat do pracovního prostoru jako plugin.',
      'Ostatní tarify: vložte systémový prompt z Google Docs do pokynů projektu a nahrajte soubory ze složky Data.',
      'Zdarma a pro žáky: použijte verzi promptu níže.',
    ],
  },
];
