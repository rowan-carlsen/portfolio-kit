<script>
    import { fly } from 'svelte/transition';
</script>

<h2 id="about">About Me</h2>
<div>
    <img src="profile-pic.jpg" alt="My face!" width="248" height="283" />
    <p>
        I create engaging and interactive educational content online, combining
        web design expertise with 10+ years of experience as a teacher and an
        educational manager. My goal is to integrate the learning design
        sensibilities of in-person teaching with the expansive possibilities
        afforded by modern web technology.
    </p>
</div>

<style>
    div {
        display: flex;
        margin: 0.5em 0;
        gap: 5%;
        align-items: flex-start;
        animation: fly-in 1s 0.25s forwards;
        opacity: 0;
        transform: translateY(50px);
    }
    img {
        max-width: 248px;
        width: 10%;
        height: auto;
        clip-path: ellipse(100% 100% at center);
        animation: lens 1s 1.25s forwards;
    }
    p {
        width: 85%;
        margin: 0;
        font-size: 14pt;
        max-width: 30em;
    }
    @keyframes fly-in {
        to {
            opacity: 1;
            transform: none;
        }
    }
    @keyframes lens {
        to {
            clip-path: ellipse(50% 50% at center);
        }
    }
</style>
