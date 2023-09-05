<div>
    <h2 id="contact">Contact</h2>

    <ul>
        <li style="--customIcon: url('/logos/github-mark.svg')">
            <a
                href="https://github.com/rowan-carlsen"
                target="_blank"
                rel="noreferrer">GitHub</a>
        </li>

        <li style="--customIcon: url('/logos/li-logo.svg')">
            <a
                href="https://www.linkedin.com/in/rowan-carlsen-464a35195"
                target="_blank"
                rel="noreferrer">LinkedIn</a>
        </li>
        <li style="--customIcon: url('/logos/mastodon-logo.svg')">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://fosstodon.org/@rowan_c">Mastodon</a>
        </li>
    </ul>
</div>

<style>
    h2 {
        margin-top: 0;
    }
    ul {
        padding-left: 0;
        list-style-position: inside;
        list-style-type: none;
        margin: 0;
    }
    div {
        background-color: var(--color-analogous2);
        padding: 1em 1.5em;
        color: #ced3fd;
        border-radius: 0.5em 0 0 0;
    }
    a {
        color: inherit;
        display: flex;
        align-items: center;
    }
    li {
        margin-bottom: 0.5em;
    }
    a::before {
        content: '';
        background-image: var(--customIcon);
        background-size: 100%;
        width: 2em;
        height: 2em;
        display: inline-block;
        margin-right: 0.5em;
    }
</style>
