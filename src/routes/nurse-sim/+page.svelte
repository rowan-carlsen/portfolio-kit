<script>
    import Hallway from './Hallway.svelte';
    import ContextMenu from './ContextMenu.svelte';
    import Nurse from './Nurse.svelte';
    let menuOpen = false,
        menuX = 0,
        menuY = 0,
        nurseRight = 0,
        nurseBot = 0,
        status = 'neutral',
        hallWidth,
        hallHeight,
        door,
        completed = false,
        completedDoors = [];
    const menuXY = [
        [27.4, 78.5],
        [64.35, 78.5],
        [90.44, 78.5],
    ];
    function pickDoor(e) {
        const targ = e.currentTarget,
            rect = targ.getBoundingClientRect();
        if (completedDoors.includes(targ.id)) {
            return;
        }
        door = targ.id.slice(-1);
        menuX = menuXY[door - 1][0];
        menuY = menuXY[door - 1][1];
        nurseRight = `${((rect.x + scrollX) / hallWidth) * 100}%`;
        nurseBot = `${((rect.y + scrollY + rect.height) / hallHeight) * 100}%`;
        completed = false;
        menuOpen = true;
        status = 'thinking';
    }
    $: if (completed === true) {
        completedDoors.push('door-' + door);
        completedDoors = completedDoors;
        if (completedDoors.length >= 3) {
            status = 'neutral';
        }
    }
</script>

<svelte:head>
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/gt-world-med/icons/temperature.svg" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/gt-world-med/icons/pulse.svg" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/gt-world-med/icons/respiration.svg" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/gt-world-med/icons/blood-pressure.svg" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/gt-world-med/icons/oxygen.svg" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/gt-world-med/icons/urine.svg" />
    <script src="./scripts/iframeResizer.contentWindow.min.js"></script>
</svelte:head>
<main bind:offsetWidth={hallWidth} bind:offsetHeight={hallHeight}>
    <Hallway
        on:click={pickDoor}
        on:keydown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                pickDoor(e);
            }
        }}
        {completedDoors} />
    <Nurse {status} pos={[nurseRight, nurseBot]} />
    {#if menuOpen}
        {#key menuX}
            <ContextMenu x={menuX} y={menuY} {door} bind:completed />
        {/key}
    {/if}
</main>

<style>
    main {
        position: relative;
        --primary: #115740;
        --secondary: #b9975b;
        --tertiary: #00b388;
        --quaternary: #84344e;
        --quinary: #64ccc9;
    }
    :global(body) {
        margin: 0;
        padding-bottom: 11%;
    }
    @font-face {
        font-family: 'Lato Extended';
        font-style: normal;
        font-weight: 400;
        src: url(https://du11hjcvx0uqb.cloudfront.net/br/dist/fonts/lato/extended/Lato-Regular-bd03a2cc27.woff2)
            format('woff2');
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato Extended';
        font-style: normal;
        font-weight: 700;
        src: url(https://du11hjcvx0uqb.cloudfront.net/br/dist/fonts/lato/extended/Lato-Bold-cccb897485.woff2)
            format('woff2');
        font-display: auto;
    }
</style>
