<script>
    import '$lib/iframeResizer.min.js';
    import { fade, fly } from 'svelte/transition';
    const samples = [
        {
            name: 'Fundr Mock App',
            path: './fundr',
            preview: './images/fundr-preview.png',
            desc: `This playful activity lets students explore the process of finding a Venture Capital investor through the analogy of a dating app.`,
        },
        {
            name: 'Nursing Simulation',
            path: './nurse-sim',
            preview: './images/nurse-sim-preview.png',
            desc: `In lieue of a basic multiple choice quiz, students take on the role of a hospital nurse to determine which vital signs are abnormal for 3 patients.`,
        },

        {
            name: 'Collision Detection',
            path: './sample-collision.html',
            preview: './images/collision-preview.png',
            desc: `From a Video Game Development course, this minimal demo shows how simple object collision in games works.`,
        },
        {
            name: 'Spaceflight Dynamic Pressure',
            path: './air-density',
            preview: './images/air-density-preview.png',
            desc: `Students learning about the physics of leaving Earth's atmosphere are treated to a fun rocket visual with dynamically changing representations of external air pressure.`,
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
            name: 'R0 and Immunity Threshold',
            path: './r0-v-immunity',
            preview: './images/r0-v-immunity-preview.png',
            desc: `This animated infographic demonstrates the relationship between contagiousness (r0) of a disease and the required threshold for herd immunity.`,
        },
    ];
    let item = 'null';
</script>

<svelte:head>
    {#each samples as sample}
        <link rel="preload" as="image" href={sample.preview} />
    {/each}
</svelte:head>
<h2 id="portfolio">Portfolio</h2>
<select bind:value={item}>
    <option value="null">Choose an item:</option>
    {#each samples as sample, i}
        <option value={i}>{sample.name}</option>
    {/each}
</select>
<div id="container">
    <div id="preview-gallery">
        {#each samples as sample, i}
            <a
                in:fade
                class="preview-thumbnail"
                href="#sample-frame-{i}"
                data-name={sample.name}
                on:click={(e) => {
                    e.preventDefault();
                    item = i;
                }}>
                <img src={sample.preview} alt="{sample.name} preview" />
            </a>
        {/each}
    </div>

    <div id="frame-holder" class:active={item !== 'null'}>
        {#if item !== 'null'}
            <p in:fade out:fade={{ duration: 0 }}>
                {samples[item].desc}
                <button
                    type="button"
                    class="btn"
                    on:click={() => (item = 'null')}>X</button>
            </p>
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
    </div>
</div>

<style>
    h2 {
        text-align: center;
    }
    iframe {
        margin: 1em 0;
        transition: height 0.5s;
    }
    select {
        margin: 0 auto;
        display: none;
        font-size: 1rem;
        padding: 0.5em;
        background-color: var(--color-analogous);
    }
    #preview-gallery {
        display: grid;
        margin: 0 auto;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2em 10px;
        width: 100%;
        max-width: 1250px;
    }
    .preview-thumbnail {
        height: 250px;
        width: 100%;
        padding: 5px;
        box-shadow: 5px 5px 5px var(--color-primary);
        border: 2px solid black;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.2s;
        transform: scale(0.75);
        z-index: 1;
    }
    .preview-thumbnail::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #f9fbff;
        background-image: linear-gradient(135deg, #f9fbff, #d6e4ff);
        z-index: 6;
    }
    .preview-thumbnail::after {
        position: absolute;
        content: attr(data-name);
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 100%;
        text-align: center;
        width: max-content;
        color: black;
        transform: translateY(-150%);
        transition: transform 0.25s;
        background: var(--color-analogous);
        padding: 0.5em;
        border: 2px solid var(--color-dark);
        border-top: none;
        z-index: 5;
        border-radius: 0 0 0.25em 0.25em;
    }
    .preview-thumbnail:is(:hover, :focus-visible) {
        transform: none;
    }
    .preview-thumbnail:is(:hover, :focus-visible)::after {
        transform: none;
    }
    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 250px;
        z-index: 10;
    }
    #container {
        position: relative;
        overflow: hidden;
    }
    #frame-holder {
        position: absolute;
        width: 100%;
        min-height: 100%;
        top: 0;
        left: calc(100% + 2em);
        transition: transform 0.5s;
        background: white;
        z-index: 50;
        border: 2px solid var(--color-dark);
    }
    #frame-holder.active {
        transform: translateX(calc(-100% - 2em));
    }
    #frame-holder .btn {
        position: absolute;
        top: -2px;
        right: -2px;
        font-size: 1.5rem;
        height: 100%;
        margin: 0;
        border: 2px outset var(--color-dark);
        background-image: radial-gradient(
            circle at center,
            #ffffff99 50%,
            transparent 50%
        );
        background-size: 0;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        transition: background-size 0.5s;
        user-select: none;
    }
    #frame-holder .btn:active {
        transform: none;
        background-size: 300%;
    }
    p {
        margin: 0;
        padding: 1em;
        padding-right: 4em;
        background: #d2d2d2;
        min-height: 3.5em;
        display: flex;
        align-items: center;
        position: relative;
    }
    :global(body) {
        overflow-x: hidden;
    }
</style>
