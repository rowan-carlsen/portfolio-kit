import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-2j0yqb.svelte-2j0yqb{display:flex;flex-flow:column}#download-bar.svelte-2j0yqb.svelte-2j0yqb{background:white;display:flex;gap:10%;justify-content:center;font-size:16pt;margin:0 auto;padding:0.5em 0;width:624px}#download-bar.svelte-2j0yqb svg.svelte-2j0yqb{height:1em;margin-right:0.5em;width:1em;vertical-align:-0.125em}iframe.svelte-2j0yqb.svelte-2j0yqb{background:white;height:880px;margin:0 auto;padding-top:1em;width:624px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-2j0yqb"}"><h2 id="${"resume"}">Resume</h2>
    <div id="${"download-bar"}" class="${"svelte-2j0yqb"}"><a href="${"Rowan_Carlsen_Resume.pdf"}" download><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}" class="${"svelte-2j0yqb"}"><path d="${"M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"}"></path></svg>PDF</a>
        <a href="${"https://docs.google.com/document/d/1QRkFIBIgrdCxy8mJOZ5F3zV7UvpuKJnwe8LD8MJFrbw/edit?usp=sharing"}" target="${"_blank"}" rel="${"noreferrer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}" class="${"svelte-2j0yqb"}"><path d="${"M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"}"></path></svg>Google Doc</a></div>
    <iframe title="${"Resume"}" src="${"RowanCarlsenResume.html"}" width="${"100%"}" height="${"400"}" frameborder="${"0"}" class="${"svelte-2j0yqb"}"></iframe>
</div>`;
});
export {
  Page as default
};
