// Interní odkaz s base cestou (GitHub Pages: /chatveskole).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : '/' + path;
  return BASE + p;
}
