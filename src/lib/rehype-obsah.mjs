// Úpravy HTML z Markdownu (content/stranky, prompty):
// 1) nadpis „## Text {#kotva}“ dostane id="kotva" a značka zmizí z textu,
// 2) tabulky se zabalí do posuvného kontejneru (na mobilu se neposouvá celá stránka),
// 3) odstavec, který obsahuje jen odkazy (oddělené „·“), se vykreslí jako řada tlačítek,
// 4) text nadpisu H2 se zabalí do <span class="zvyrazneni"> (podbarvení jako zvýrazňovačem),
// 5) obsah se rozdělí na oddíly: úvod před prvním H2 a <section> pro každé H2.
export default function rehypeObsah() {
  return (tree) => {
    upravit(tree);
    tree.children = naOddily(tree.children);
  };
}

const el = (tagName, className, children, properties = {}) => ({
  type: 'element', tagName, properties: { className, ...properties }, children,
});

function upravit(uzel) {
  if (!uzel.children) return;
  uzel.children = uzel.children.map((dite) => {
    if (dite.type !== 'element') return dite;
    if (/^h[1-6]$/.test(dite.tagName)) kotvaNadpisu(dite);
    if (dite.tagName === 'h2') dite.children = [el('span', ['zvyrazneni'], dite.children)];
    if (dite.tagName === 'p' && jenOdkazy(dite)) {
      dite.properties = { ...dite.properties, className: ['odkazy'] };
      dite.children = dite.children.filter((c) => c.type === 'element');
      dite.children.forEach((a, i) => {
        a.properties = { ...a.properties, className: ['btn', i === 0 ? 'btn-accent' : 'btn-sky'] };
      });
    }
    if (dite.tagName === 'li') oddelitPomlcku(dite);
    if (dite.tagName === 'table') {
      upravit(dite);
      return el('div', ['tabulka'], [dite], { tabIndex: 0, role: 'region', ariaLabel: 'Tabulka (lze posouvat do strany)' });
    }
    upravit(dite);
    return dite;
  });
}

function jenOdkazy(p) {
  const odkazy = p.children.filter((c) => c.type === 'element');
  return odkazy.length > 0
    && odkazy.every((c) => c.tagName === 'a')
    && p.children.every((c) => c.type === 'element' || (c.type === 'text' && /^[\s·]*$/.test(c.value)));
}

function kotvaNadpisu(nadpis) {
  const posledni = nadpis.children.at(-1);
  if (posledni?.type !== 'text') return;
  const m = posledni.value.match(/\s*\{#([\w-]+)\}\s*$/);
  if (!m) return;
  posledni.value = posledni.value.slice(0, m.index);
  nadpis.properties = { ...nadpis.properties, id: m[1] };
}

function naOddily(deti) {
  const vysledek = [];
  let aktualni = el('div', ['uvod'], []);
  for (const d of deti) {
    if (d.type === 'element' && d.tagName === 'h2') {
      if (aktualni.children.some((c) => c.type !== 'text' || c.value.trim())) vysledek.push(aktualni);
      aktualni = el('section', ['oddil'], []);
    }
    aktualni.children.push(d);
  }
  if (aktualni.children.some((c) => c.type !== 'text' || c.value.trim())) vysledek.push(aktualni);
  return vysledek;
}

// „**Název** — popis“ v položce seznamu: pomlčka dostane <span class="pomlcka">, aby ji šlo
// skrýt tam, kde se položka vykresluje jako karta (homepage). Text se nemění.
function oddelitPomlcku(li) {
  const [prvni, druhy] = li.children;
  if (prvni?.type !== 'element' || !['strong', 'a'].includes(prvni.tagName)) return;
  if (druhy?.type !== 'text') return;
  const m = druhy.value.match(/^(\s*—\s*)/);
  if (!m) return;
  li.children.splice(1, 1, el('span', ['pomlcka'], [{ type: 'text', value: m[1] }]), { type: 'text', value: druhy.value.slice(m[1].length) });
}
