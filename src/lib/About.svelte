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
    h2,
    div {
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        width: 60rem;
    }
    h2 {
        margin-top: 0;
    }
    div {
        display: flex;
        margin: 0.5em auto;
        gap: 5%;
        align-items: flex-start;
        animation: fly-in 1s 0.25s forwards;
        opacity: 0;
        transform: translateY(50px);
    }
    img {
        max-width: 248px;
        width: 10vw;
        height: auto;
        clip-path: ellipse(100% 100% at center);
        animation: lens 1s 1.25s forwards;
    }
    p {
        width: 85%;
        margin: 0;
        font-size: 14pt;
    }
    @media (max-width: 600px) {
        p {
            font-size: 12pt;
        }
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
