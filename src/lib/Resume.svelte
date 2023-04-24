<script>
    import { fly } from 'svelte/transition';
    let open = false,
        timer;
    function countdown() {
        timer = setTimeout(() => (open = false), 3000);
    }
</script>

<div class="container">
    <button
        type="button"
        id="resume-btn"
        on:click={() => (open = true)}
        class:fade={open}>
        Resume
        <svg
            id="resume"
            viewBox="0 0 846.66 846.66"
            style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style>
                    .fil0 {
                        fill: #fff;
                        fill-rule: nonzero;
                    }
                </style>
            </defs>
            <path
                class="fil0"
                d="M539.75 794.68c27.15 0 27.15 41.29 0 41.29H42.28c-11.4 0-20.64-9.25-20.64-20.65V193.63c0-5.7 2.31-10.87 6.04-14.6l162.3-162.29c4.03-4.03 9.31-6.05 14.59-6.05h466.89c11.4 0 20.65 9.25 20.65 20.65V392.7c0 27.16-41.29 27.16-41.29 0V51.98h-437.7L62.93 202.18v592.5h476.82zM188.54 612.7c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0-274.68c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0 91.56c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0 91.56c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0-274.68c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm496.57 238.25c49.84 0 90.24 40.4 90.24 90.24 0 18.1-5.33 34.95-14.5 49.07 37.57 24.93 61.47 66.08 64.13 111.2 1.59 27.06-39.55 29.47-41.13 2.42-2.11-35.69-22.61-67.48-54.13-84.24-13.16 7.5-28.38 11.78-44.61 11.78-17.56 0-33.95-5.01-47.81-13.69-33.44 16.12-55.6 49.04-57.79 86.15-1.59 27.05-42.72 24.64-41.13-2.42 2.79-47.18 28.75-89.88 69.08-114.28-7.99-13.47-12.58-29.19-12.58-45.99 0-49.83 40.4-90.24 90.23-90.24zm0 41.29c-27.03 0-48.94 21.92-48.94 48.95s21.91 48.94 48.94 48.94c27.03 0 48.95-21.91 48.95-48.94 0-27.03-21.91-48.95-48.95-48.95z"
                id="Layer_x0020_1" />
        </svg>
    </button>
    {#if open}
        <div
            transition:fly={{ x: 200, duration: 500 }}
            id="download-bar"
            on:mouseleave={countdown}
            on:mouseenter={() => clearTimeout(timer)}>
            <a href="Rowan_Carlsen_Resume.pdf" download>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                        d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
                </svg>PDF</a>
            <a
                href="https://docs.google.com/document/d/1QRkFIBIgrdCxy8mJOZ5F3zV7UvpuKJnwe8LD8MJFrbw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                        d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z" />
                </svg>Google Doc</a>
        </div>
    {/if}
</div>

<style>
    .container {
        margin-right: 1em;
        position: relative;
    }
    #resume {
        width: 2.5em;
        height: auto;
    }
    #resume-btn {
        border: none;
        background: none;
        font-size: 1rem;
        cursor: pointer;
        transition: opacity 1s 0.2s;
        color: white;
        font-family: inherit;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    .fade {
        opacity: 0;
        transition: none;
    }
    #download-bar {
        position: absolute;
        top: 0;
        right: 0;
        background: white;
        display: flex;
        gap: 2em;
        justify-content: center;
        font-size: 14pt;
        margin: 0 auto;
        padding: 0.5em 1em;
        border-radius: 5px;
        width: max-content;
    }
    #download-bar svg {
        height: 1em;
        margin-right: 0.5em;
        width: 1em;
        vertical-align: -0.125em;
    }
</style>
