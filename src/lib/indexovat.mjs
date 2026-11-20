// Indexuje se jen ostrý web na chatveskole.cz:
// - build s INDEXOVAT=1, nebo
// - produkční build na Vercelu, jehož produkční doménou je chatveskole.cz
//   (VERCEL_ENV a VERCEL_PROJECT_PRODUCTION_URL nastavuje Vercel sám).
// Náhledy na github.io a vercel.app mají noindex.
export const indexovat =
  process.env.INDEXOVAT === '1' ||
  (process.env.VERCEL_ENV === 'production' &&
    /(^|\.)chatveskole\.cz$/.test(process.env.VERCEL_PROJECT_PRODUCTION_URL || ''));
