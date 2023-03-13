<script>
    import { crossfade } from 'svelte/transition';

    const [send, receive] = crossfade({
        duration: 600,

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === 'none' ? '' : style.transform;

            return {
                duration: 600,
                css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
            };
        },
    });

    class Trait {
        constructor(text, adv, parent) {
            this.text = text;
            this.adv = adv;
            this.parent = parent;
            this.matched = false;
        }
    }
    const categories = [
        { id: 0, name: 'X-ray' },
        { id: 1, name: 'MRI' },
        { id: 2, name: 'CT' },
        { id: 3, name: 'Ultrasound' },
    ];
    let traits = [
            new Trait(`Can be conducted while a patient is moving`, true, 3),
            new Trait(
                `Produces 3D representation of a body part relatively quickly`,
                true,
                2
            ),
            new Trait(`Relatively expensive and time-consuming`, false, 1),
            new Trait(`Emits high doses of ionizing radiation`, false, 2),
            new Trait(`Produces high-resolution images`, true, 1),
            new Trait(
                `Resulting images provide less detail than alternative techniques`,
                false,
                0
            ),
            new Trait(`Relatively inexpensive and easy to access`, true, 0),
            new Trait(
                `Less effective for imaging deep body structures`,
                false,
                3
            ),
        ],
        incorrect,
        incTimer = null,
        currTarget = null,
        concluded = false;

    function drop(cat) {
        if (currTarget === null) {
            return;
        }
        if (currTarget.parent === cat.id) {
            currTarget.matched = true;
            currTarget = null;
            traits = traits;
        } else {
            if (incTimer) {
                clearTimeout(incTimer);
            }
            incorrect = cat;
            incTimer = setTimeout(() => (incorrect = null), 500);
        }
    }
</script>

<svelte:head>
    <script src="./scripts/iframeResizer.contentWindow.min.js"></script>
</svelte:head>
<main>
    <div id="pool">
        <div id="trait-holder">
            {#each traits.filter((t) => !t.matched) as trait (trait)}
                <button
                    class="trait"
                    class:good={trait.adv}
                    aria-grabbed={currTarget === trait}
                    draggable="true"
                    on:click={() => (currTarget = trait)}
                    in:receive={{ key: trait }}
                    out:send={{ key: trait }}>
                    {trait.text}
                </button>
            {/each}
        </div>
    </div>
    <div id="category-holder">
        {#each categories as cat}
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div
                tabindex="0"
                class="category"
                class:incorrect={incorrect === cat}
                aria-dropeffect="move"
                style="cursor: {currTarget ? 'pointer' : 'default'}"
                on:click={() => drop(cat)}
                on:keypress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        drop(cat);
                    }
                }}>
                <h3>{cat.name}</h3>
                {#each traits
                    .filter((t) => t.matched && t.parent === cat.id)
                    .sort((t) => !t.adv) as match (match)}
                    <div
                        class="trait"
                        class:good={match.adv}
                        in:receive={{ key: match }}
                        out:send={{ key: match }}>
                        {match.text}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>

<style>
    :global(:root) {
        --primary: #ffd100;
        --secondary: #00205b;
    }
    #pool {
        margin-bottom: 1em;
    }
    #trait-holder {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5em 5em;
        align-items: baseline;
        width: calc(100% - 4em);
    }
    #category-holder {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        align-items: flex-start;
    }
    .category {
        border: 2px solid var(--primary);
        border-radius: 0.5em;
        flex: 1 0 40%;
        width: 40%;
        max-width: 50%;
        position: relative;
    }
    h3 {
        margin: 0;
        padding: 0.5em 0;
        background: var(--primary);
        color: black;
        text-align: center;
        user-select: none;
        position: relative;
    }
    .trait {
        border: 4px solid black;
        border-radius: 0.5em;
        padding: 0.25em;
        max-width: max-content;
        user-select: none;
        font-size: 1rem;
        background-color: white;
        transition: transform 0.15s;
        transform-origin: left;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 0.25em;
    }
    button.trait {
        cursor: pointer;
    }
    .category .trait {
        border-color: red;
        position: relative;
    }
    .category .trait.good {
        border-color: green;
    }
    .trait::before {
        content: '-';
        font-size: 1.5rem;
        border-radius: 5em;
        width: 2rem;
        min-width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        background-color: red;
    }
    .trait.good::before {
        content: '+';
        background-color: green;
    }
    .incorrect h3::after {
        content: 'X';
        font-size: 1.4em;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        right: 0;
        background-color: red;
        color: white;
        border-radius: 10em;
        width: 1.3em;
        height: 1.3em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        z-index: 10;
        animation: waggle 0.3s 1 linear;
    }
    [aria-grabbed='true'] {
        border-color: var(--secondary);
        outline: 2px solid var(--secondary);
        transform: scale(1.02);
    }
    [aria-grabbed='true']::after {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0.5rem;
        margin: auto;
        left: calc(10px + 100%);
        font-size: 2.5rem;
        content: '\2190';
        color: var(--secondary);
        animation: point 1s infinite alternate;
    }

    @keyframes point {
        to {
            transform: translateX(25%);
        }
    }
    @keyframes waggle {
        0%,
        100% {
            transform: none;
        }
        33% {
            transform: translateX(-2px);
        }
        66% {
            transform: translateX(2px);
        }
    }
</style>
