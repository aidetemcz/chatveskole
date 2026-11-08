// Odstraní první nadpis 1. úrovně z Markdownu — H1 vykresluje šablona z frontmatteru (title).
export default function remarkDropH1() {
  return (tree) => {
    const i = tree.children.findIndex((n) => n.type === 'heading' && n.depth === 1);
    if (i !== -1) tree.children.splice(i, 1);
  };
}
