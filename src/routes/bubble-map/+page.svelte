<script>
    import Bubblemap from './Bubblemap.svelte';
    let imageData = '',
        imageLink;
    function downloadSVG() {
        const svgCopy = document.querySelector('svg').cloneNode(true);
        svgCopy.querySelectorAll('foreignObject').forEach((el) => el.remove());
        const svgData = svgCopy.outerHTML;
        imageData = `data:image/svg+xml;utf8,${svgData}`;
        imageLink.href = imageData;
        imageLink.click();
    }
</script>

<svelte:head>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/Draggable.min.js"></script>
    <script
        src="https://cdn.precollegeprograms.org/iframe-resizer/iframeResizer.contentWindow.min.js"></script>
</svelte:head>
<main>
    <Bubblemap />
    <button type="button" class="btn" on:click={downloadSVG}>Download</button>
    <br />
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a
        id="copy-link"
        bind:this={imageLink}
        href="#"
        title="image copy"
        download="My Bubble Map">Image</a>
</main>

<style>
    main {
        --primary: #115740;
        --secondary: #b9975b;
        --tertiary: #00b388;
        --quaternary: #84344e;
        --quinary: #64ccc9;
        margin: 1em auto 0 auto;
    }
    #copy-link {
        visibility: hidden;
        position: absolute;
    }
    button {
        display: block;
        margin: 1em auto 0em auto;
    }
    .btn {
        background: var(--primary);
    }
</style>
