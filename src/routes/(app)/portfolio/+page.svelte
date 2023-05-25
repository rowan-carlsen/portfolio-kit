<script>
    import '$lib/iframeResizer.min.js';
    import { fade } from 'svelte/transition';
    const samples = [
        {
            name: 'Fundr Mock App',
            path: './fundr',
            preview: './images/fundr-preview.png',
            desc: `This playful activity lets students explore the process of finding a Venture Capital investor through the analogy of a dating app.`,
        },
        {
            name: 'Sorting Activity',
            path: './methods-sort',
            preview: './images/sorting-preview.png',
            desc: `This is a sorting quiz, utilizing Svelte's 'crossfade' transition to smoothly move items to the appropriate category.`,
        },

        {
            name: 'Collision Detection',
            path: './sample-collision.html',
            preview: './images/collision-preview.png',
            desc: `From a Video Game Development course, this minimal demo shows how simple object collision in games works.`,
        },
        {
            name: 'Rotating 3D Objects',
            path: './sample-3d-objects.html',
            preview: './images/3d-shapes-preview.png',
            desc: `3D using pure CSS. The aim of this widget is to allow students to see how the profile of a 3-dimensional shape can change depending on perspective.`,
        },
        {
            name: 'Due Diligence Infographic',
            path: './sample-diligence.html',
            preview: './images/diligence-preview.png',
            desc: `This infographic walks students through the due diligence process for corporate acquisitions and mergers.`,
        },
        {
            name: 'Tracing Images',
            path: './sample-tracing.html',
            preview: './images/tracing-preview.png',
            desc: `Students in a 2D -> 3D design course have to hone their skills at breaking down complex shapes into many simpler ones. Here they can do so with a variety of fun and challenging options.`,
        },
        {
            name: 'Editable Bubble Map',
            path: './bubble-map',
            preview: './images/bubble-map-preview.png',
            desc: `This SVG can be edited by the student to add and place 'bubbles', creating a visual representation of their different language contexts. THe image can then be saved to revisit later!`,
        },
        {
            name: 'Interactive World Map Infographic',
            path: './world-map-interactive.html',
            preview: './images/world-map-preview.png',
            desc: `Students can zoom in on and examine a few selected countries in this interactive, adding a sense of scale and context to the 'vital stats' presented.`,
        },
    ];
    let item = 'null';
    function displaySample(e) {}
</script>

<h2 id="portfolio">Portfolio</h2>
<select bind:value={item}>
    <option value="null">Choose an item:</option>
    {#each samples as sample, i}
        <option value={i}>{sample.name}</option>
    {/each}
</select>
<div id="preview-gallery">
    {#each samples as sample, i}
        <div class="preview-thumbnail">
            <a
                href="#sample-frame-{i}"
                on:click={(e) => {
                    e.preventDefault();
                    item = i;
                }}>
                <img src={sample.preview} alt="{sample.name} preview" />
            </a>
        </div>
    {/each}
</div>
{#if item !== 'null'}
    {#key item}
        <p in:fade out:fade={{ duration: 0 }}>
            {samples[item].desc}
        </p>
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
    h2 {
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        width: 50rem;
    }
    iframe {
        margin: 1em 0;
        transition: height 0.5s;
    }
    select {
        margin: 0 auto;
        display: block;
        font-size: 1rem;
        padding: 0.5em;
        background-color: var(--color-analogous);
    }
    #preview-gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
    }
    .preview-thumbnail {
        width: 250px;
        height: 250px;
        padding: 5px;
        box-shadow: 5px 5px 5px var(--color-primary);
        border: 2px solid black;
        background: white;
        display: flex;

        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.2s;
    }
    .preview-thumbnail:is(:hover, :focus-visible) {
        transform: scale(1.05);
    }
    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
