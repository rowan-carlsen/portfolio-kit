<script>
    import '../iframeResizer.min.js';
    const samples = [
        {
            name: 'Sorting Activity',
            path: './methods-sort',
            desc: `This is a sorting activity`,
        },
        {
            name: 'Python Interpreter',
            path: './sample-python.html',
            desc: `python desc`,
        },
        {
            name: 'Collision Detection',
            path: './sample-collision.html',
            desc: `collision desc`,
        },
        {
            name: 'Rotating 3D Objects',
            path: './sample-3d-objects.html',
            desc: `3d desc`,
        },
        {
            name: 'Due Diligence Infographic',
            path: './sample-diligence.html',
            desc: `due desc`,
        },
        {
            name: 'Tracing Images',
            path: './sample-tracing.html',
            desc: `tracing desc`,
        },
    ];
    /*
fundr
world map-zoom
ortho-matching
asset-pie-chart (gt invest)
https://cdn.precollegeprograms.org/gt-investing/sectors-portfolio/index.html
porter-forces-general (wfu biz refresh)

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
    <p>{samples[item].desc}</p>
    <!-- svelte-ignore missing-declaration -->
    <iframe
        on:load={iFrameResize(this)}
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
