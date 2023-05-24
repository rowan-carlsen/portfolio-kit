<script>
    import { fly } from 'svelte/transition';
    let open = false,
        timer;
    function countdown() {
        timer = setTimeout(() => (open = false), 2500);
    }
</script>

<div class="container">
    <button
        type="button"
        id="resume-btn"
        on:click={() => {
            open = true;
            countdown();
        }}
        class:fade={open}>
        Resume
        <svg
            id="resume"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M320 481.5 h-295m0 0v-367.5m 0 0 l 95.5 -95.5m 0 0 h 276 m 0 0 v 214" />
            <path
                class="corner"
                style="stroke-dasharray: 400 1000; transition: stroke-dashoffset .5s;"
                d="M 396.5 232.5 v244 A 5 5, 0,0,1,391.5 481.5 h -76.5" />
            <path d="M 111 133.5 h 181.5" />
            <path d="M 111 187.5 h 181.5" />
            <path d="M 111 241.5 h 181.5" />
            <path d="M 111 295.5 h 181.5" />
            <path d="M 111 349.5 h 181.5" />
            <path
                class="person"
                d="M 330 435 A 72.63 72.63, 0, 0, 1, 475 435" />
            <circle class="person" r="41" cx="404.5" cy="339.5" fill="black" />
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
                href="https://docs.google.com/document/d/1O6pcPBxWxoeLF7t5-d6KtWiayjFSCCp4d082sSXJ6Wo/edit?usp=sharing"
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
        width: 3em;
        height: auto;
    }
    #resume path,
    #resume circle {
        stroke: white;
        stroke-width: 24px;
        stroke-linecap: round;
    }
    #resume path {
        fill: none;
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
    #resume-btn:is(:hover, :focus-visible) .corner {
        stroke-dashoffset: 400;
    }
    #resume-btn .person {
        stroke-opacity: 0;
        fill-opacity: 0;
        transform: translateY(100px);
        transition: stroke-opacity 0.5s, fill-opacity 0.5s, transform 0.5s;
    }
    #resume-btn:is(:hover, :focus-visible) .person {
        transform: translateY(0px);
        stroke-opacity: 1;
        fill-opacity: 1;
    }
    .fade {
        opacity: 0;
        visibility: hidden;
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
