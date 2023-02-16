<script>
    import Contact from './Contact.svelte';

    let headerPct = 50;
    function slideHeader(e) {
        headerPct = (e.clientX / this.offsetWidth) * 100;
    }
</script>

<header
    style="background-image: linear-gradient(to right, var(--color-primary) {headerPct}%, var(--color-opposite) {headerPct}%);"
    on:mousemove={slideHeader}>
    <div>WEB</div>
    <span id="header-edu">EDU</span>
    <span id="header-dev">DEV</span>
</header>
<nav class="nav-bar">
    <a href="/" class="nav-link">Home</a>
    <a href="/portfolio" class="nav-link">Portfolio</a>
    <a href="/resume" class="nav-link">Resume</a>
</nav>
<slot />
<footer>
    <Contact />
</footer>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
    .nav-bar {
        display: flex;
        justify-content: center;
        gap: 1em;
        position: sticky;
        top: 0;
    }
    header {
        font-size: 4vw;
        grid-column: span 2;
        height: 10vw;
        position: relative;
        text-align: center;
        user-select: none;
    }
    header div {
        mix-blend-mode: difference;
        color: orange;
        z-index: 100;
        position: relative;
    }
    header span {
        position: absolute;
        bottom: 0;
        color: white;
        z-index: 5;
    }
    header::before,
    header::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        animation: fly-off 3s 0.5s forwards;
    }
    header::before {
        left: 100%;
        background: var(--color-opposite);
        transform: translateX(-150%);
    }
    header::after {
        right: 100%;
        background: var(--color-primary);
        transform: translateX(150%);
    }
    #header-dev {
        right: 55%;
        color: var(--color-opposite);
    }
    #header-edu {
        left: 55%;
        color: var(--color-primary);
    }
    @keyframes fly-off {
        to {
            transform: none;
        }
    }
</style>
