// Sdílená logika: převod HTML záznamu databáze promptů (WordPress) na části promptu.
// Používá ji scripts/prevod-promptu.mjs. Bez závislostí.

export const decode = (s = "") =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
   .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
   .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
   .replace(/&lt;/g, "<").replace(/&gt;/g, ">");

/** HTML → jednoduchý Markdown (stejný převod jako v export-wordpress.mjs bez turndownu). */
export function htmlToText(html) {
  return decode(
    html
      .replace(/\r\n?/g, "\n")
      .replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, "")
      .replace(/<h([1-6])[^>]*>/gi, (_, n) => "\n\n" + "#".repeat(+n) + " ")
      .replace(/<\/h[1-6]>/gi, "\n\n")
      .replace(/<li[^>]*>/gi, "\n- ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|section|ul|ol|blockquote)>/gi, "\n\n")
      .replace(/<img [^>]*>/gi, (tag) => {
        // obrázky ze starého webu → kopie v archiv/uploads (stáhne export --images), jinak vynechat
        const src = (tag.match(/src="([^"]+)"/i) || [])[1] || "";
        const alt = ((tag.match(/alt="([^"]*)"/i) || [])[1] || "").trim();
        const m = src.match(/^https?:\/\/(?:www\.)?(?:chatveskole|gptveskole)\.cz\/wp-content\/uploads\/(.+)$/i);
        return m ? `\n\n![${alt}](/archiv/uploads/${m[1]})\n\n` : "";
      })
      .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, h, t) => {
        const x = t.replace(/<[^>]+>/g, "").trim();
        if (x.startsWith("![")) return `\n\n${x}\n\n`; // obrázek v odkazu na plnou velikost → jen obrázek
        return x ? `[${x}](${h})` : "";
      })
      .replace(/<[^>]+>/g, "")
  )
    .replace(/[ \t ]+\n/g, "\n")
    .replace(/\n[ \t ]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const strip = (s) => s.replace(/^#+\s*/gm, "").replace(/\n{3,}/g, "\n\n").trim();
const cut = (s, start, ends) => {
  const i = s.search(start);
  if (i < 0) return null;
  const rest = s.slice(i).replace(start, "");
  let end = rest.length;
  for (const e of ends) {
    const j = rest.search(e);
    if (j >= 0 && j < end) end = j;
  }
  return rest.slice(0, end);
};

/**
 * Vrátí { format, prompt, cil, pouziti, tipy } nebo { format: "neznamy" }.
 * format "2025" = prompty pro pedagogy a žáky (Prompt zkopírujte… / Co je cílem / Jak použít),
 * format "2024" = starší prompty (Prompt: … / tipy / galerie screenshotů).
 */
export function extractPrompt(text) {
  if (/Prompt zkopírujte do aplikace/i.test(text)) {
    const prompt = cut(text, /#*\s*Prompt zkopírujte do aplikace[^\n]*\n/i, [/\n#*\s*Co je cílem promptu/i, /\n#*\s*Jak prompt použít/i, /\n#*\s*Upozornění\s*\n/i]);
    const cil = cut(text, /#*\s*Co je cílem promptu\s*\n/i, [/\n#*\s*Jak prompt použít/i, /\n#*\s*Upozornění\s*\n/i]);
    const pouziti = cut(text, /#*\s*Jak prompt použít\s*\n/i, [/\n#*\s*Upozornění\s*\n/i, /\n#*\s*Podobné prompty/i]);
    return { format: "2025", prompt: prompt && strip(prompt), cil: cil && strip(cil), pouziti: pouziti && strip(pouziti) };
  }
  if (/#*\s*Prompt( č\. ?\d+| v [^\s:]+)?:/i.test(text)) {
    const body = cut(text, /^[\s\S]*?(?=#*\s*Prompt( č\. ?\d+| v [^\s:]+)?:)/i, [/Jak prompt funguje v jednotlivých aplikacích/i, /Ukázka výstupů/i]) ?? text;
    // bloky: nadpis „Prompt…:“ následovaný textem promptu (další nadpis), zbytek jsou tipy
    const parts = body.split(/\n(?=#+\s)/).map((p) => p.trim()).filter(Boolean);
    const prompts = [], tipy = [];
    for (let i = 0; i < parts.length; i++) {
      const p = strip(parts[i]);
      if (/^Prompt( č\. ?\d+| v [^\s:]+)?:\s*$/i.test(p) && parts[i + 1]) {
        prompts.push({ nadpis: p.replace(/:$/, ""), text: strip(parts[i + 1]) });
        i++;
      } else if (/^Prompt( č\. ?\d+| v [^\s:]+)?:/i.test(p)) {
        prompts.push({ nadpis: p.split(":")[0], text: p.replace(/^[^:]+:\s*/, "") });
      } else if (p && !/^(Vložte prompt|Zkopírujte kód)/i.test(p)) {
        tipy.push(p);
      } else if (p) {
        tipy.push(p);
      }
    }
    // obrázky (ukázky výstupů) nepatří do textu promptu → přesunout do tipů
    const obrazky = [];
    for (const pr of prompts) {
      pr.text = pr.text.replace(/\n*!\[[^\]]*\]\([^)]+\)\n*/g, (m) => { obrazky.push(m.trim()); return "\n"; }).trim();
    }
    return { format: "2024", prompts, tipy: [...obrazky, ...tipy].join("\n\n").trim() };
  }
  return { format: "neznamy" };
}
