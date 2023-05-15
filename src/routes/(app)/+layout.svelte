<script>
    import Contact from '$lib/Contact.svelte';
    import Resume from '$lib/Resume.svelte';
    import { page } from '$app/stores';
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
    ];
</script>

<svelte:head>
    <title>Rowan Carlsen: Educational Developer and Tech Liaison</title>
</svelte:head>
<header>
    <nav class="nav-bar">
        {#each navLinks as { name, href }}
            <a
                {href}
                class="nav-link"
                class:current={$page.route.id
                    .replace('(app)', '')
                    .endsWith(href)}>{name}</a>
        {/each}
    </nav>
    <Resume />
</header>
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
        display: flex;
        padding: 0.5em 0;
        margin-left: 1em;
        gap: 2em;
    }
    .nav-bar a {
        width: max-content;
        position: relative;
        display: block;
        color: white;
        text-decoration: none;
    }
    .nav-bar a:first-of-type {
        justify-self: end;
    }
    .nav-bar a::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 2px;
        background: white;
        transform-origin: left;
        transform: scale(0);
    }

    .nav-bar a:is(:hover, :focus-visible, .current)::after {
        transform: none;
        transition: transform 0.5s;
    }
    header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        user-select: none;
        font-family: 'Cousine', monospace;
        overflow: hidden;
        background: black;
        padding: 0.5em 0;
    }

    footer {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    main {
        padding: 1em 1em;
    }
    :global(body) {
        min-height: 100vh;
        position: relative;
        /* background-color: var(--color-light); */
        /* background-image: linear-gradient(to bottom, #ffffff99, transparent); */
        background-repeat: repeat-y;
        background-image: linear-gradient(#a5adfbf5, #a5adfbf5),
            url('./images/web-dev-bg3.jpeg');
        background-position: 0% 0%, 0% 0%;
        background-size: 100% 100%, 100%;
    }
</style>
