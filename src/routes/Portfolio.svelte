<script>
    const samples = [
        {
            name: 'Sorting Activity',
            path: './sample-sorting.html',
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
            name: 'Investment Returns',
            path: './sample-periodic.html',
            desc: `investment desc`,
        },
        {
            name: 'Tools of the Fed',
            path: './sample-fed-tools.html',
            desc: `fed desc`,
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
            name: 'Interactive Scenario',
            path: './sample-wrigley.html',
            desc: `scen desc`,
        },
        {
            name: 'Tracing Images',
            path: './sample-tracing.html',
            desc: `tracing desc`,
        },
    ];
    import './iframeResizer.min.js';
    /*
        WFU Invest - !inflation demo!
        CBS Lux - !Channel strategy!, e-commerce
        CBS Sports - what-is-valuation, world sports map
        GT IR: zoom map
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
