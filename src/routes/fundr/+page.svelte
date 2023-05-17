<script>
    import Phone from './Phone.svelte';
    import Logo from './Logo.svelte';
    import App from './App.svelte';
    let loading = true;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/bvr5qif.css" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/wm-venture/profile-pic.jpeg" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/wm-venture/galv-logo-01.png" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/wm-venture/insight-logo.png" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/wm-venture/spp-logo.png" />
    <link
        rel="preload"
        as="image"
        href="https://cdn.precollegeprograms.org/wm-venture/lc-logo.png" />
    <script src="./scripts/iframeResizer.contentWindow.min.js"></script>
</svelte:head>
<div id="container">
    <Phone />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="screen" on:click={() => (loading = false)}>
        {#if loading}
            <h3 id="app-name">fundr</h3>
            <Logo />
            <div id="continue">Continue</div>
        {:else}
            <App />
        {/if}
    </div>
</div>

<style>
    #container {
        position: relative;
        width: max-content;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
    }
    #screen {
        align-items: center;
        background-color: var(--primary);
        display: flex;
        flex-flow: column;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        padding-left: 5px;
    }
    #continue,
    #app-name {
        font-family: 'proxima-soft', sans-serif;
    }
    #continue {
        color: white;
        font-size: 1.5rem;
        position: absolute;
        bottom: 30%;
        left: 50%;
        transform: translateX(-50%);
        animation: blink 1s alternate infinite;
        user-select: none;
        cursor: pointer;
    }
    #app-name {
        animation: fade-in 1s forwards;
        color: var(--secondary);
        font-size: 5vw;
        font-style: normal;
        font-weight: 700;
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 10%;
        transform: translateX(-50%);
    }
    @keyframes fade-in {
        to {
            opacity: 1;
        }
    }
    @keyframes blink {
        50% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    #container {
        --primary: #115740;
        --secondary: #b9975b;
        --tertiary: #00b388;
        --quaternary: #84344e;
        --quinary: #64ccc9;
    }

    @font-face {
        font-family: 'Lato Extended';
        font-style: normal;
        font-weight: 400;
        src: url(https://du11hjcvx0uqb.cloudfront.net/br/dist/fonts/lato/extended/Lato-Regular-bd03a2cc27.woff2)
            format('woff2');
        font-display: auto;
    }
    @font-face {
        font-family: 'Lato Extended';
        font-style: normal;
        font-weight: 700;
        src: url(https://du11hjcvx0uqb.cloudfront.net/br/dist/fonts/lato/extended/Lato-Bold-cccb897485.woff2)
            format('woff2');
        font-display: auto;
    }
    #container {
        font-family: 'Lato Extended', Lato, sans-serif;
        background: transparent;
    }
</style>
