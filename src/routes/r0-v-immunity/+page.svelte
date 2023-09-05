<script>
    import Graph from './Graph.svelte';
    import Spread from './Spread.svelte';
    import { tweened } from 'svelte/motion';
    let selection = 'null',
        finalX = 0;
    const xVal = tweened(1);
    $: if (selection !== 'null') {
        finalX = diseases.find((dis) => dis.name === selection).r0;
        xVal.set(finalX);
    }
    const diseases = [
        {
            name: 'Influenza',
            r0: 1.5,
        },
        {
            name: 'COVID-19 Omicron Variant',
            r0: 3.4,
        },
        {
            name: 'Norovirus',
            r0: 4,
        },
        {
            name: 'COVID-19 Delta Variant',
            r0: 5,
        },
        {
            name: 'Polio',
            r0: 6,
        },
        {
            name: 'Measles',
            r0: 14,
        },
    ];
</script>

<svelte:head>
    <script src="./scripts/iframeResizer.contentWindow.min.js"></script>
</svelte:head>
<main>
    <p>
        Select a disease to examine: <select bind:value={selection}>
            {#each diseases as disease}
                <option value={disease.name}
                    >{disease.name === 'null' ? '' : disease.name}</option>
            {/each}
        </select>
    </p>
    <Spread {finalX} />
    <Graph xVal={$xVal} />
</main>

<style>
    main {
        padding-left: 0.5em;
    }
    p {
        margin: 0;
    }
</style>
