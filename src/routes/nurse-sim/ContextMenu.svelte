<script>
    import { scale } from 'svelte/transition';
    import { backOut } from 'svelte/easing';
    export let x = 0,
        y = 0,
        door = 1,
        completed = false;
    let showFeedback = false,
        wrongAnswers = [];
    $: currentDoor = doors[door - 1];
    const icons = {
            temperature:
                'https://cdn.precollegeprograms.org/gt-world-med/icons/temperature.svg',
            pulse: 'https://cdn.precollegeprograms.org/gt-world-med/icons/pulse.svg',
            respiration:
                'https://cdn.precollegeprograms.org/gt-world-med/icons/respiration.svg',
            pressure:
                'https://cdn.precollegeprograms.org/gt-world-med/icons/blood-pressure.svg',
            oxygen: 'https://cdn.precollegeprograms.org/gt-world-med/icons/oxygen.svg',
            urine: 'https://cdn.precollegeprograms.org/gt-world-med/icons/urine.svg',
        },
        doors = [
            {
                vitals: ['temperature', 'oxygen', 'pulse'],
                values: ['102° F', '97%', '75 bpm'],
                answer: 0,
                feedback: `This patient is experiencing a fever, which can be a sign of infection or organ rejection.`,
            },
            {
                vitals: ['temperature', 'pressure', 'urine'],
                values: ['98.1° F', '190/115', '105 mL per hour'],
                answer: 1,
                feedback: `This patient's blood pressure is elevated, which can be a side effect of medications or an indication of organ rejection.`,
            },
            {
                vitals: ['temperature', 'respiration', 'urine'],
                values: ['97.9° F', '18 breaths per minute', '33 mL per hour'],
                answer: 2,
                feedback: `This patient's urine output is below the normal range, indicating that the kidney is not functioning properly.`,
            },
        ];
    function checkAnswer(i) {
        if (i === currentDoor.answer) {
            showFeedback = true;
            completed = true;
        } else {
            wrongAnswers.push(i);
            wrongAnswers = wrongAnswers;
        }
    }
</script>

{#if !showFeedback}
    <div
        id="container"
        role="menu"
        in:scale={{ easing: backOut, duration: 250 }}
        style="left: {x}%; top: {y}%;">
        {#each currentDoor.vitals as vital, i}
            <button
                class="option"
                disabled={wrongAnswers.includes(i)}
                role="menuitem"
                on:click={() => checkAnswer(i)}>
                <img src={icons[vital]} alt={vital} />
                {currentDoor.values[i]}
            </button>
        {/each}
    </div>
{:else}
    <div id="feedback" in:scale={{ easing: backOut, duration: 250 }}>
        Correct! {currentDoor.feedback}
    </div>
{/if}

<style>
    #container {
        background: #fff;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        gap: 0.25em;
        border-radius: 0.5em;
        padding: 0.5em;
        position: absolute;
        border: 1px solid black;
        z-index: 100;
        transform: translate(-50%, 5px);
        width: min-content;
    }
    #container::before {
        content: '';
        background: inherit;
        position: absolute;
        bottom: calc(100% - 7px);
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 15px;
        height: 15px;
        border: 1px solid black;
        border-width: 1px 0 0 1px;
        z-index: -5;
    }
    #feedback {
        border: 2px solid var(--primary);
        border-radius: 0.25em;
        padding: 0.5em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        font-family: 'Lato Extended', Lato, sans-serif;
    }
    img {
        width: auto;
        height: 65px;
        max-height: 6vw;
    }
    .option {
        background-color: white;
        color: black;
        border-color: var(--primary);
        display: flex;
        align-items: center;
        padding: 0.25em;
        gap: 0.5em;
        font-size: clamp(0.8rem, 1vw, 1.2rem);
        cursor: pointer;
        justify-content: center;
        transition: background-color 0.2s;
    }

    .option:is(:hover, :focus-visible) {
        background-color: var(--tertiary);
    }
    .option[disabled] {
        opacity: 0.5;
        background-color: white;
        cursor: default;
    }
    @keyframes blink-in {
        to {
            transform: scale(1) translate(12px, -50%);
        }
    }
</style>
