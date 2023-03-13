import { c as create_ssr_component, b as subscribe, e as escape, d as each, v as validate_component, f as add_attribute } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"contact"}">Contact</h2>

<ul><li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://fosstodon.org/@rowan_c"}">Mastodon</a></li>
    <li><a href="${"https://www.linkedin.com/in/rowan-carlsen-464a35195"}" target="${"_blank"}" rel="${"noreferrer"}">LinkedIn</a></li></ul>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{scroll-behavior:smooth}.nav-bar.svelte-1wd82tj.svelte-1wd82tj{display:grid;grid-template-columns:1fr auto 1fr;position:sticky;top:0;padding:0.5em 0;gap:4em;border:4px solid var(--color-dark);border-width:4px 0;background-color:var(--color-light);overflow:hidden;font-size:1.2em}.nav-bar.svelte-1wd82tj a.svelte-1wd82tj{width:max-content;position:relative;display:block;background-color:var(--color-light);padding:0.25em 0.5em;text-decoration:none}.nav-bar.svelte-1wd82tj a.svelte-1wd82tj:first-of-type{justify-self:end}.nav-bar.svelte-1wd82tj a.svelte-1wd82tj::after{content:'';position:absolute;left:-0.5em;top:-0.5em;z-index:-2;width:calc(100% + 1em);height:calc(100% + 1em);background:var(--color-primary);display:none;animation:svelte-1wd82tj-spin-in 1s forwards;transform:rotate(720deg) scale(0)}@keyframes svelte-1wd82tj-spin-in{50%{transform:none}100%{transform:scale(125%, 200%)}}.nav-bar.svelte-1wd82tj a.svelte-1wd82tj:is(:hover, :focus-visible, .current)::after{display:block}header.svelte-1wd82tj.svelte-1wd82tj{font-size:2.5vw;grid-column:span 2;height:6vw;position:relative;text-align:center;user-select:none;font-family:'Cousine', monospace}#web.svelte-1wd82tj.svelte-1wd82tj{mix-blend-mode:difference;color:orange;z-index:10;position:relative}.header-half.svelte-1wd82tj.svelte-1wd82tj{position:absolute;height:100%;width:100%;bottom:0;color:white;background-image:linear-gradient(\r\n            to bottom,\r\n            #ffffff55,\r\n            10%,\r\n            transparent,\r\n            90%,\r\n            #00000055\r\n        )}header.svelte-1wd82tj.svelte-1wd82tj::before,header.svelte-1wd82tj.svelte-1wd82tj::after{content:'';width:100%;height:100%;position:absolute;top:0;animation:svelte-1wd82tj-fly-off 3s 0.5s cubic-bezier(0.4, 0.5, 0.4, 1) forwards;background-image:linear-gradient(\r\n            to bottom,\r\n            #ffffff55,\r\n            10%,\r\n            transparent,\r\n            90%,\r\n            #00000055\r\n        );z-index:8}header.svelte-1wd82tj.svelte-1wd82tj::before{left:100%;background-color:var(--color-opposite);transform:translateX(-150%)}header.svelte-1wd82tj.svelte-1wd82tj::after{right:100%;background-color:var(--color-primary);transform:translateX(150%)}#header-dev.svelte-1wd82tj.svelte-1wd82tj{left:0;color:var(--color-opposite);background-color:var(--color-primary)}.header-half.svelte-1wd82tj span.svelte-1wd82tj{position:absolute;width:max-content;bottom:0}#header-dev.svelte-1wd82tj span.svelte-1wd82tj{right:55%}#header-edu.svelte-1wd82tj span.svelte-1wd82tj{left:55%}#header-edu.svelte-1wd82tj.svelte-1wd82tj{right:0;color:var(--color-primary);background-color:var(--color-opposite);z-index:5}footer.svelte-1wd82tj.svelte-1wd82tj{padding:0 0.5em}main.svelte-1wd82tj.svelte-1wd82tj{padding:0 0.5em}@keyframes svelte-1wd82tj-fly-off{to{transform:none}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resume", href: "/resume" }
  ];
  let headerPct = 50;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wu42dr_START -->${$$result.title = `<title>Rowan Carlsen: Educational Developer and Tech Liaison</title>`, ""}<!-- HEAD_svelte-1wu42dr_END -->`, ""}
<header class="${"svelte-1wd82tj"}"><div id="${"web"}" class="${"svelte-1wd82tj"}">WEB</div>
    <div class="${"header-half svelte-1wd82tj"}" id="${"header-edu"}" style="${"clip-path: inset(0 0 0 " + escape(headerPct, true) + "%)"}"><span class="${"svelte-1wd82tj"}">EDU</span></div>
    <div class="${"header-half svelte-1wd82tj"}" id="${"header-dev"}"><span class="${"svelte-1wd82tj"}">DEV</span></div></header>
<nav class="${"nav-bar svelte-1wd82tj"}">${each(navLinks, ({ name, href }) => {
    return `<a${add_attribute("href", href, 0)} class="${["nav-link svelte-1wd82tj", $page.route.id === href ? "current" : ""].join(" ").trim()}">${escape(name)}</a>`;
  })}</nav>
<main class="${"svelte-1wd82tj"}">${slots.default ? slots.default({}) : ``}</main>
<footer class="${"svelte-1wd82tj"}">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</footer>`;
});
export {
  Layout as default
};
