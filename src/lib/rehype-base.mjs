// Doplní base (např. /chatveskole) k odkazům a obrázkům v Markdownu, které začínají „/“.
export default function rehypeBase(options = {}) {
  const base = (options.base || '/').replace(/\/$/, '');
  const fix = (v) => (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') ? base + v : v);
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      if (node.tagName === 'a') node.properties.href = fix(node.properties.href);
      if (node.tagName === 'img') node.properties.src = fix(node.properties.src);
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => {
    if (base) walk(tree);
  };
}
