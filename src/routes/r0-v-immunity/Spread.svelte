<script>
    export let finalX = 0;
    $: roundedX = Math.floor(finalX);
</script>

{#if roundedX < 20}
    <div
        id="container"
        style="margin-top: {13 * roundedX + 5}px; margin-bottom: {13 *
            roundedX +
            5}px">
        {#key roundedX}
            <svg
                class="person"
                id="patient0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1613.98 1976.64">
                <path
                    d="M1285.08 478.09c0 213.28-139.7 393.93-332.63 455.51-45.84 14.65-94.74 22.58-145.46 22.58s-99.62-7.93-145.46-22.58C468.6 872.09 328.9 691.44 328.9 478.09 328.9 214.09 542.99 0 806.99 0s478.09 214.09 478.09 478.09ZM1613.98 1779.51v-106.33c0-322.03-204.58-596.28-490.79-699.87-11-3.98-23.24-2.83-33.4 2.96-83.48 47.58-180.05 74.85-282.79 74.85s-199.38-27.27-282.86-74.85c-10.16-5.79-22.4-6.94-33.4-2.96C204.51 1076.9 0 1351.15 0 1673.18v106.33c0 58.73 361.3 197.13 806.99 197.13s806.99-138.41 806.99-197.13Z" />
            </svg>
            {#each { length: roundedX } as _, i}
                <div
                    style="--yDist: {-12 * roundedX +
                        (i / Math.max(roundedX - 1, 1)) *
                            24 *
                            roundedX}px; --xDist: {50 -
                        (Math.abs(i - (roundedX - 1) / 2) / roundedX) *
                            25}px; animation-delay: {i * 0.25}s"
                    class="transmit">
                    <svg
                        class="person"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1613.98 1976.64">
                        <path
                            d="M1285.08 478.09c0 213.28-139.7 393.93-332.63 455.51-45.84 14.65-94.74 22.58-145.46 22.58s-99.62-7.93-145.46-22.58C468.6 872.09 328.9 691.44 328.9 478.09 328.9 214.09 542.99 0 806.99 0s478.09 214.09 478.09 478.09ZM1613.98 1779.51v-106.33c0-322.03-204.58-596.28-490.79-699.87-11-3.98-23.24-2.83-33.4 2.96-83.48 47.58-180.05 74.85-282.79 74.85s-199.38-27.27-282.86-74.85c-10.16-5.79-22.4-6.94-33.4-2.96C204.51 1076.9 0 1351.15 0 1673.18v106.33c0 58.73 361.3 197.13 806.99 197.13s806.99-138.41 806.99-197.13Z" />
                    </svg>
                    {#each { length: roundedX } as _, u}
                        <svg
                            class="person second"
                            style="--yDist: 0; --xDist: {50 +
                                u * 25}px; animation-delay: {roundedX * 0.25 +
                                i * 0.25}s"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1613.98 1976.64">
                            <path
                                d="M1285.08 478.09c0 213.28-139.7 393.93-332.63 455.51-45.84 14.65-94.74 22.58-145.46 22.58s-99.62-7.93-145.46-22.58C468.6 872.09 328.9 691.44 328.9 478.09 328.9 214.09 542.99 0 806.99 0s478.09 214.09 478.09 478.09ZM1613.98 1779.51v-106.33c0-322.03-204.58-596.28-490.79-699.87-11-3.98-23.24-2.83-33.4 2.96-83.48 47.58-180.05 74.85-282.79 74.85s-199.38-27.27-282.86-74.85c-10.16-5.79-22.4-6.94-33.4-2.96C204.51 1076.9 0 1351.15 0 1673.18v106.33c0 58.73 361.3 197.13 806.99 197.13s806.99-138.41 806.99-197.13Z" />
                        </svg>
                    {/each}
                </div>
            {/each}
        {/key}
    </div>
{:else}
    <p>r0 too large to show!</p>
{/if}

<style>
    #container {
        width: 20px;
        position: relative;
        margin-left: 30%;
        transition: margin-top 0.5s, margin-bottom 0.5s;
    }
    svg {
        width: 100%;
        height: auto;
        fill: royalblue;
    }
    #patient0 {
        fill: orangered;
    }
    .second {
        fill: #b841e0;
    }
    .transmit,
    .second {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        animation: fly-off 0.5s forwards;
        --xDist: 0;
        --yDist: 0;
    }

    @keyframes fly-off {
        to {
            transform: translate(var(--xDist), var(--yDist));
            opacity: 1;
        }
    }
</style>
