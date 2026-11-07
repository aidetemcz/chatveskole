// Úpravy HTML z Markdownu (content/stranky, prompty):
// 1) nadpis „## Text {#kotva}“ dostane id="kotva" a značka zmizí z textu,
// 2) tabulky se zabalí do posuvného kontejneru (na mobilu se neposouvá celá stránka).
export default function rehypeObsah() {
  return (tree) => upravit(tree);
}

function upravit(uzel) {
  if (!uzel.children) return;
  uzel.children = uzel.children.map((dite) => {
    if (dite.type === 'element' && /^h[1-6]$/.test(dite.tagName)) kotvaNadpisu(dite);
    if (dite.type === 'element' && dite.tagName === 'table') {
      upravit(dite);
      return {
        type: 'element',
        tagName: 'div',
        properties: { className: ['tabulka'], tabIndex: 0, role: 'region', ariaLabel: 'Tabulka (lze posouvat do strany)' },
        children: [dite],
      };
    }
    upravit(dite);
    return dite;
  });
}

function kotvaNadpisu(nadpis) {
  const posledni = nadpis.children.at(-1);
  if (posledni?.type !== 'text') return;
  const m = posledni.value.match(/\s*\{#([\w-]+)\}\s*$/);
  if (!m) return;
  posledni.value = posledni.value.slice(0, m.index);
  nadpis.properties = { ...nadpis.properties, id: m[1] };
}
