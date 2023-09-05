<script>
    import Gauge from './Gauge.svelte';
    import Rocket from './Rocket.svelte';
    const densities = {
        5: 0.9093,
        15: 0.1948,
        50: 0.001027,
        80: 0.00001846,
    };
    let height,
        delay = 100,
        interval,
        altitude = 5,
        thrust = 1;
    const animationLength = 2000;
    $: velocity = 500 * thrust;
    $: pressure =
        (0.5 * densities[altitude] * (velocity / 3.6) * (velocity / 3.6)) /
        1000;
</script>

<svelte:head>
    <script src="./scripts/iframeResizer.contentWindow.min.js"></script>
</svelte:head>
<main
    class:mid={altitude === 15}
    class:high={altitude === 50}
    class:orbit={altitude === 80}>
    <div id="control-station">
        <input type="range" min="1" max="16" bind:value={thrust} />
        <output>Velocity: {velocity} km/h</output>
        <div>
            <output>Altitude: {altitude} km</output>
            <div id="button-holder">
                <button
                    type="button"
                    on:click={() =>
                        (altitude =
                            altitude === 5 ? 15 : altitude === 15 ? 50 : 80)}
                    >^</button>
                <button
                    style="transform:rotate(180deg);"
                    on:click={() =>
                        (altitude =
                            altitude === 80 ? 50 : altitude === 50 ? 15 : 5)}
                    type="button">^</button>
            </div>
        </div>
        <output>Dynamic pressure: {pressure.toFixed(2)} kPa</output>
        <Gauge {pressure} />
    </div>
    <div id="svg-holder" bind:offsetHeight={height}>
        {#each { length: 140 } as p, i}
            <div
                class="particle"
                style="--fallHeight:{height + 'px'}; left:{Math.random() *
                    100}%; animation-duration: {animationLength}; animation-delay: {(animationLength /
                    140) *
                    i}ms; opacity: {pressure >= 20
                    ? i % Math.floor(40 / (41 - Math.min(pressure, 40))) === 0
                        ? 0
                        : 1
                    : i % Math.floor(40 / pressure) === 0
                    ? 1
                    : 0}" />
        {/each}
        <Rocket {thrust} />
    </div>
</main>

<style>
    main {
        background-image: linear-gradient(
            to bottom,
            #021f31,
            #054d7a,
            #098bdc,
            #87cefa
        );
        background-size: 100% 400%;
        background-position: 0 100%;
        transition: background-position 1s;
        display: flex;
        align-items: flex-start;
        width: max-content;
        margin: 0 auto;
    }
    main.mid {
        background-position: 0 66%;
    }
    main.high {
        background-position: 0 33%;
    }
    main.orbit {
        background-position: 0 0;
    }
    #control-station {
        background: #ddd;
        border: 2px solid black;
        padding: 0.5em;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        gap: 0.5em;
    }
    #control-station > div {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    #button-holder {
        display: flex;
        flex-flow: column;
        height: 100%;
        width: 2em;
    }
    #button-holder button {
        font-size: 1.2em;
        line-height: 1rem;
    }
    .particle {
        width: 1px;
        height: 40px;
        background: white;
        position: absolute;
        left: 0;
        top: -40px;
        animation: fall 2s linear infinite;
        z-index: -5;
        transition: opacity 0.75s;
    }

    #svg-holder {
        width: max-content;
        padding: 150px 100px 0 100px;
        margin: 0 auto;
        position: relative;
        transform: translateY(0px);
        overflow: hidden;
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }
    @keyframes fall {
        to {
            transform: translateY(var(--fallHeight));
        }
    }
</style>
