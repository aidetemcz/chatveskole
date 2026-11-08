// Vlastní id nadpisu v Markdownu: "## Nadpis {#kotva}" → <h2 id="kotva">Nadpis</h2>
export default function remarkHeadingId() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'heading') {
        const last = node.children[node.children.length - 1];
        const m = last && last.type === 'text' && last.value.match(/\s*\{#([\w-]+)\}\s*$/);
        if (m) {
          last.value = last.value.slice(0, m.index);
          node.data = { ...(node.data || {}), hProperties: { ...((node.data || {}).hProperties || {}), id: m[1] } };
        }
      }
      (node.children || []).forEach(visit);
    };
    visit(tree);
  };
}
