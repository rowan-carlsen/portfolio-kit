<script>
    import '$lib/iframeResizer.min.js';
    import { fade } from 'svelte/transition';
    const samples = [
        {
            name: 'Fundr Mock App',
            path: './fundr',
            desc: `This playful activity lets students explore the process of finding a Venture Capital investor through the analogy of a dating app.`,
        },
        {
            name: 'Sorting Activity',
            path: './methods-sort',
            desc: `This is a sorting quiz, utilizing Svelte's 'crossfade' transition to smoothly move items to the appropriate category.`,
        },
        {
            name: 'Python Interpreter',
            path: './sample-python.html',
            desc: `Made for an introductory Computer Science course, this widget uses a library to translate Python code into Javascript, execute it, and output results in a window.`,
        },
        {
            name: 'Collision Detection',
            path: './sample-collision.html',
            desc: `From a Video Game Development course, this minimal demo shows how simple object collision in games works.`,
        },
        {
            name: 'Rotating 3D Objects',
            path: './sample-3d-objects.html',
            desc: `3D using pure CSS. The aim of this widget is to allow students to see how the profile of a 3-dimensional shape can change depending on perspective.`,
        },
        {
            name: 'Due Diligence Infographic',
            path: './sample-diligence.html',
            desc: `This infographic walks students through the due diligence process for corporate acquisitions and mergers.`,
        },
        {
            name: 'Tracing Images',
            path: './sample-tracing.html',
            desc: `Students in a 2D -> 3D design course have to hone their skills at breaking down complex shapes into many simpler ones. Here they can do so with a variety of fun and challenging options.`,
        },
    ];
    /*
world map-zoom
ortho-matching
asset-pie-chart (gt invest)
https://cdn.precollegeprograms.org/gt-investing/sectors-portfolio/index.html
porter-forces-general (wfu biz refresh)
editable bubble map svg
    */
    let item = 'null';
</script>

<h2 id="portfolio">Portfolio</h2>
<select bind:value={item}>
    <option value="null">Choose an item:</option>
    {#each samples as sample, i}
        <option value={i}>{sample.name}</option>
    {/each}
</select>
{#if item !== 'null'}
    {#key item}
        <p in:fade out:fade={{ duration: 0 }}>{samples[item].desc}</p>
    {/key}
    <!-- svelte-ignore missing-declaration -->
    <iframe
        on:load|once={iFrameResize(this)}
        id="sample-frame"
        src={samples[item].path}
        title="Portfolio Item"
        width="100%"
        height="500"
        frameborder="0" />
{/if}

<style>
    iframe {
        margin: 1em 0;
        background: #ffffffaa;
        transition: height 0.5s;
    }
    select {
        margin: 0 auto;
        display: block;
    }
</style>
