// Doplní base (např. /chatveskole) k odkazům a obrázkům v Markdownu, které začínají „/“.
// Odkazy na formulář novinek (Ecomail) otevře v novém okně.
const NOVE_OKNO = /ecomailapp\.cz/;

export default function rehypeBase(options = {}) {
  const base = (options.base || '/').replace(/\/$/, '');
  const fix = (v) => (base && typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? base + v : v);
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      if (node.tagName === 'a') {
        node.properties.href = fix(node.properties.href);
        if (NOVE_OKNO.test(String(node.properties.href ?? ''))) {
          node.properties.target = '_blank';
          node.properties.rel = ['noopener'];
          node.children.push({ type: 'element', tagName: 'span', properties: { className: ['sr-only'] }, children: [{ type: 'text', value: ' (otevře se v novém okně)' }] });
        }
      }
      if (node.tagName === 'img') node.properties.src = fix(node.properties.src);
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}
