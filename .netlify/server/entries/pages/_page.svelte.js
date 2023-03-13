import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1cktso3{margin:0.5em 10%;font-size:14pt;animation:svelte-1cktso3-fly-in 0.75s 0.2s forwards;opacity:0;transform:translateY(50px)}@keyframes svelte-1cktso3-fly-in{to{opacity:1;transform:none}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 id="${"about"}">About Me</h2>
<p class="${"svelte-1cktso3"}">I create engaging and interactive educational content online, combining web
    design expertise with 10+ years of experience as a teacher and a manager for
    teachers. My goal is to integrate the learning design sensibilities of
    in-person teaching with the expansive possibilities afforded by modern web
    technology.
</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1wu42dr_START -->${$$result.title = `<title>Rowan Carlsen: Educational Developer and Tech Liaison</title>`, ""}<!-- HEAD_svelte-1wu42dr_END -->`, ""}

${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
