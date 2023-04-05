<script>
    import { fly } from 'svelte/transition';
</script>

<h2 id="about">About Me</h2>
<div>
    <img src="profile-pic.jpg" alt="My face!" width="248" height="283" />
    <p>
        I create engaging and interactive educational content online, combining
        web design expertise with 10+ years of experience as a teacher and a
        manager for teachers. My goal is to integrate the learning design
        sensibilities of in-person teaching with the expansive possibilities
        afforded by modern web technology.
    </p>
</div>

<style>
    div {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        animation: fly-in 1s 0.25s forwards;
        opacity: 0;
        transform: translateY(50px);
        margin: 0.5em 0;
    }
    img {
        max-width: 248px;
        width: 10%;
        height: auto;
    }
    p {
        width: 80%;
        margin: 0;
        font-size: 14pt;
    }
    @keyframes fly-in {
        to {
            opacity: 1;
            transform: none;
        }
    }
</style>
