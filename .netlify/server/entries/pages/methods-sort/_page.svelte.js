import { h as assign, i as is_function, c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const { rect } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(rect, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--primary:#ffd100;--secondary:#00205b}#pool.svelte-c5w44b.svelte-c5w44b{margin-bottom:1em}#trait-holder.svelte-c5w44b.svelte-c5w44b{display:grid;grid-template-columns:1fr 1fr;gap:0.5em 5em;align-items:baseline;width:calc(100% - 4em)}#category-holder.svelte-c5w44b.svelte-c5w44b{display:flex;flex-wrap:wrap;gap:1em;justify-content:center;align-items:flex-start}.category.svelte-c5w44b.svelte-c5w44b{border:2px solid var(--primary);border-radius:0.5em;flex:1 0 40%;width:40%;max-width:50%;position:relative}h3.svelte-c5w44b.svelte-c5w44b{margin:0;padding:0.5em 0;background:var(--primary);color:white;text-align:center;user-select:none;position:relative}.trait.svelte-c5w44b.svelte-c5w44b{border:4px solid black;border-radius:0.5em;padding:0.25em;max-width:max-content;user-select:none;font-size:1rem;background-color:white;transition:transform 0.15s;transform-origin:left;text-align:left;display:flex;align-items:center;gap:0.25em}button.trait.svelte-c5w44b.svelte-c5w44b{cursor:pointer}.category.svelte-c5w44b .trait.svelte-c5w44b{border-color:red;position:relative}.category.svelte-c5w44b .trait.good.svelte-c5w44b{border-color:green}.trait.svelte-c5w44b.svelte-c5w44b::before{content:'-';font-size:1.5rem;border-radius:5em;width:2rem;min-width:2rem;height:2rem;display:flex;justify-content:center;align-items:center;color:white;font-weight:bold;background-color:red}.trait.good.svelte-c5w44b.svelte-c5w44b::before{content:'+';background-color:green}.incorrect.svelte-c5w44b h3.svelte-c5w44b::after{content:'X';font-size:1.4em;position:absolute;top:0;bottom:0;margin:auto 0;right:0;background-color:red;color:white;border-radius:10em;width:1.3em;height:1.3em;display:flex;justify-content:center;align-items:center;font-weight:bold;z-index:10;animation:svelte-c5w44b-waggle 0.3s 1 linear}[aria-grabbed='true'].svelte-c5w44b.svelte-c5w44b{border-color:var(--secondary);outline:2px solid var(--secondary);transform:scale(1.02)}[aria-grabbed='true'].svelte-c5w44b.svelte-c5w44b::after{position:absolute;display:flex;justify-content:center;align-items:center;top:0;bottom:0.5rem;margin:auto;left:calc(10px + 100%);font-size:2.5rem;content:'\\2190';color:var(--secondary);animation:svelte-c5w44b-point 1s infinite alternate}@keyframes svelte-c5w44b-point{to{transform:translateX(25%)}}@keyframes svelte-c5w44b-waggle{0%,100%{transform:none}33%{transform:translateX(-2px)}66%{transform:translateX(2px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  crossfade({
    duration: 600,
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        duration: 600,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });
  class Trait {
    constructor(text, adv, parent) {
      this.text = text;
      this.adv = adv;
      this.parent = parent;
      this.matched = false;
    }
  }
  const categories = [
    { id: 0, name: "X-ray" },
    { id: 1, name: "MRI" },
    { id: 2, name: "CT" },
    { id: 3, name: "Ultrasound" }
  ];
  let traits = [
    new Trait(`Can be conducted while a patient is moving`, true, 3),
    new Trait(`Produces 3D representation of a body part relatively quickly`, true, 2),
    new Trait(`Relatively expensive and time-consuming`, false, 1),
    new Trait(`Emits high doses of ionizing radiation`, false, 2),
    new Trait(`Produces high-resolution images`, true, 1),
    new Trait(`Resulting images provide less detail than alternative techniques`, false, 0),
    new Trait(`Relatively inexpensive and easy to access`, true, 0),
    new Trait(`Less effective for imaging deep body structures`, false, 3)
  ], incorrect, currTarget = null;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ubcj38_START --><script src="${"./scripts/iframeResizer.contentWindow.min.js"}"><\/script><!-- HEAD_svelte-1ubcj38_END -->`, ""}
<main><div id="${"pool"}" class="${"svelte-c5w44b"}"><div id="${"trait-holder"}" class="${"svelte-c5w44b"}">${each(traits.filter((t) => !t.matched), (trait) => {
    return `<button class="${["trait svelte-c5w44b", trait.adv ? "good" : ""].join(" ").trim()}"${add_attribute("aria-grabbed", currTarget === trait, 0)} draggable="${"true"}">${escape(trait.text)}
                </button>`;
  })}</div></div>
    <div id="${"category-holder"}" class="${"svelte-c5w44b"}">${each(categories, (cat) => {
    return `
            <div tabindex="${"0"}" class="${["category svelte-c5w44b", incorrect === cat ? "incorrect" : ""].join(" ").trim()}" aria-dropeffect="${"move"}" style="${"cursor: " + escape("default", true)}"><h3 class="${"svelte-c5w44b"}">${escape(cat.name)}</h3>
                ${each(traits.filter((t) => t.matched && t.parent === cat.id).sort((t) => !t.adv), (match) => {
      return `<div class="${["trait svelte-c5w44b", match.adv ? "good" : ""].join(" ").trim()}">${escape(match.text)}
                    </div>`;
    })}
            </div>`;
  })}</div>
</main>`;
});
export {
  Page as default
};
