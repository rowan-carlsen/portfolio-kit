<script>
    let headerPct = 51;
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
    <a href="#about" class="nav-link">About Me</a>
    <a href="#portfolio" class="nav-link">Portfolio</a>
    <a href="#resume" class="nav-link">Resume</a>
    <a href="#contact" class="nav-link">Contact</a>
</nav>
<slot />

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
    .nav-bar {
        display: flex;
        justify-content: center;
        gap: 1em;
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
    }
    header span {
        position: absolute;
        bottom: 0;
        color: white;
    }
    #header-dev {
        right: 55%;
        color: var(--color-opposite);
    }
    #header-edu {
        left: 55%;
        color: var(--color-primary);
    }
</style>
