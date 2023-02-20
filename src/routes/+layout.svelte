<script>
    import Contact from './Contact.svelte';

    let headerPct = 50;
    function slideHeader(e) {
        headerPct = (e.clientX / this.offsetWidth) * 100;
    }
</script>

<svelte:head>
    <title>Rowan Carlsen: Educational Developer and Tech Liaison</title>
</svelte:head>
<header on:mousemove={slideHeader}>
    <div id="web">WEB</div>
    <div
        class="header-half"
        id="header-edu"
        style="clip-path: inset(0 0 0 {headerPct}%)">
        <span>EDU</span>
    </div>
    <div class="header-half" id="header-dev"><span>DEV</span></div>
</header>
<nav class="nav-bar">
    <a href="/" style="justify-self: end;" class="nav-link">Home</a>
    <a href="/portfolio" class="nav-link">Portfolio</a>
    <a href="/resume" class="nav-link">Resume</a>
</nav>
<main>
    <slot />
</main>
<footer>
    <Contact />
</footer>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
    .nav-bar {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        position: sticky;
        top: 0;
        padding: 1em 0;
        gap: 4em;
        border: 4px solid var(--color-dark);
        border-width: 4px 0;
        background-color: var(--color-light);
        overflow: hidden;
    }
    .nav-bar a {
        width: max-content;
        position: relative;
        display: block;
        background-color: var(--color-light);
        padding: 0.25em 0.5em;
    }
    .nav-bar a::after {
        content: '';
        position: absolute;
        left: -0.5em;
        top: -0.5em;
        z-index: -2;
        width: calc(100% + 1em);
        height: calc(100% + 1em);
        background: var(--color-primary);
        display: none;
        animation: spin-in 1s forwards;
        transform: rotate(720deg) scale(0);
    }
    @keyframes spin-in {
        50% {
            transform: none;
        }
        100% {
            transform: scale(125%, 200%);
        }
    }
    .nav-bar a:is(:hover, :focus-visible)::after {
        display: block;
    }
    header {
        font-size: 2.5vw;
        grid-column: span 2;
        height: 6vw;
        position: relative;
        text-align: center;
        user-select: none;
        font-family: 'Cousine', monospace;
    }
    #web {
        mix-blend-mode: difference;
        color: orange;
        z-index: 10;
        position: relative;
    }
    .header-half {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        color: white;
        background-image: linear-gradient(
            to bottom,
            #ffffff55,
            10%,
            transparent,
            90%,
            #00000055
        );
    }
    header::before,
    header::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        animation: fly-off 3s 0.5s cubic-bezier(0.4, 0.5, 0.4, 1) forwards;
        background-image: linear-gradient(
            to bottom,
            #ffffff55,
            10%,
            transparent,
            90%,
            #00000055
        );
        z-index: 8;
    }
    header::before {
        left: 100%;
        background-color: var(--color-opposite);
        transform: translateX(-150%);
    }
    header::after {
        right: 100%;
        background-color: var(--color-primary);
        transform: translateX(150%);
    }
    #header-dev {
        left: 0;
        color: var(--color-opposite);
        background-color: var(--color-primary);
    }
    .header-half span {
        position: absolute;
        width: max-content;
        bottom: 0;
    }
    #header-dev span {
        right: 55%;
    }
    #header-edu span {
        left: 55%;
    }
    #header-edu {
        right: 0;
        color: var(--color-primary);
        background-color: var(--color-opposite);
        z-index: 5;
    }
    footer {
        padding: 0 0.5em;
    }
    main {
        padding: 0 0.5em;
    }
    @keyframes fly-off {
        to {
            transform: none;
        }
    }
</style>
