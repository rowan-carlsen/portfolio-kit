<script>
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let visible = false;
    onMount(() => (visible = true));
</script>

<h2 id="about">About Me</h2>
{#if visible}
    <p in:fly={{ y: 100, duration: 500, delay: 500 }}>
        I create engaging and interactive educational content online, combining
        web design expertise with 10+ years of experience as a teacher and a
        manager for teachers. My goal is to integrate the learning design
        sensibilities of in-person teaching with the expansive possibilities
        afforded by modern web technology.
    </p>
{/if}

<style>
    p {
        margin: 0.5em 10%;
        font-size: 16pt;
    }
</style>
