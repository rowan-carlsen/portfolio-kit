<script>
    import { fade, fly } from 'svelte/transition';
    class Profile {
        constructor(name, bio, attributes, imgPath, feedback) {
            this.name = name;
            this.bio = bio;
            this.attributes = attributes;
            this.imgPath = imgPath;
            this.selected = false;
            if (feedback !== undefined) {
                this.feedback = feedback;
            }
        }
    }
    const founder = new Profile(
        'Your Profile',
        `Hey there! I’m Shana, the founder of XRsize, a body-positive athleisure company. All bodies are made to move, so we make comfortable, fashionable clothing for bodies to look good while feeling good. We are looking to partner with a firm that sees the value in fashion-forward clothing for healthy bodies.`,
        [
            {
                cat: 'Industry',
                content: 'Clothing, Retail',
            },
            { cat: 'Funding Stage', content: 'Series A' },
            {
                cat: 'Value Prop',
                content: `We believe that all bodies are made to move, so we make comfortable, fashionable clothing designed for that purpose.`,
            },
            {
                cat: 'Seeking',
                content: `$10 million to ramp up production and invest in new marketing`,
            },
        ],
        'https://cdn.precollegeprograms.org/wm-venture/profile-pic.jpeg'
    );
    const matchProfiles = [
        founder,
        new Profile(
            'Galvanize Ventures',
            `We want to connect a unique group of founders, executives, and investors. Can’t wait to learn how your business plans to deliver great returns while creating value for everyone in our network.`,
            [
                { cat: 'Fund Size', content: '$3B' },
                {
                    cat: 'Typical Industry Investments',
                    content: 'Retail, Consumer Goods, Advertising, E-commerce',
                },
                {
                    cat: 'Other Benefits',
                    content:
                        'Marketing expertise in both physical and online retail',
                },
            ],
            'https://cdn.precollegeprograms.org/wm-venture/galv-logo-01.png',
            `The VC was able to use its expertise to expand your footprint of physical retail stores and establish a dominant online sales presence. After a successful and professional collaboration, the investors opened their networks to help you secure series B funding for further product expansion.`
        ),
        new Profile(
            'Innovation Insight',
            `We work tirelessly to invest in the best founders. We want to hear what makes you the best!`,
            [
                { cat: 'Fund Size', content: '$25B' },
                {
                    cat: 'Typical Industry Investments',
                    content: 'Technology, Healthcare, Consumer Goods',
                },
                {
                    cat: 'Other Benefits',
                    content: 'Track record of successful public launches',
                },
            ],
            'https://cdn.precollegeprograms.org/wm-venture/insight-logo.png',
            `You got off to an amiable partnership, but three years in they were underwhelmed with your progress and you were exhausted by their oversight. When the board started pushing for stronger leadership, you’d had enough. Focused on a new management direction, they bought you out of your own business.`
        ),
        new Profile(
            'StartUp Plus Partners',
            `We want to inspire high-growth founders to dream bigger by supporting and investing in them. We’d love to hear what you dream of accomplishing and how we can help you pay it forward.`,
            [
                { cat: 'Fund Size', content: '$17B' },
                {
                    cat: 'Typical Industry Investments',
                    content:
                        'Consumer Internet, Marketing, Analytics, Food and Beverage',
                },
                {
                    cat: 'Other Benefits',
                    content:
                        'Access to networking and mentorship opportunities',
                },
            ],
            'https://cdn.precollegeprograms.org/wm-venture/spp-logo.png',
            `When you made your pitch, everyone on the team just clicked. You had reservations about their industry expertise, but the unexpected synergy sparked new ideas for cross-industry expansion. You grew your clothing line, and with their connections in the Food and Beverage Industry, you expanded into nutritional smoothies, energy drinks, and protein bars. The additional product lines accelerated growth and after two further rounds of funding, you were able to take your company public.`
        ),
        new Profile(
            'Legendary Capital',
            `Through trust and collaboration, we stay attuned to the needs of growth-minded entrepreneurs. Tell us how you operate with integrity and plan to achieve our mutual success.`,
            [
                { cat: 'Fund Size', content: '$9.5B' },
                {
                    cat: 'Typical Industry Investments',
                    content: 'Finance, Real Estate, IT, Clean Technology',
                },
                { cat: 'Other Benefits', content: 'International reach' },
            ],
            'https://cdn.precollegeprograms.org/wm-venture/lc-logo.png',
            `You were interested in their guiding values and hoped they’d see your potential as a mature leader, but they opted out of making you an offer. They didn’t feel your business was in line with their industry experience.`
        ),
    ];
    const nullFeedback = `Without capital, XRsize faltered. You had to dramatically cut your budget. You thought you could still release your next season of gear without a marketing campaign, but when revenue didn’t add up you made the tough call to shutter the business. It’s helpful to be critical of available investment options to avoid a bad match, but founders have to carefully weigh their options against the reality that building a business demands capital.`;
    let index = 0,
        currFeedback = null;
    $: currProfile = matchProfiles[index];
</script>

<div class="app">
    {#if index < matchProfiles.length}
        <div id="profile-holder">
            {#key currProfile.name}
                <div
                    class="profile"
                    in:fly={{
                        x: 200,
                        duration: 750,
                    }}>
                    <img
                        src={currProfile.imgPath}
                        alt="{currProfile.name} picture/logo" />
                    <div class="text">
                        <h4>{currProfile.name}</h4>
                        {#each currProfile.attributes as att}
                            <div><strong>{att.cat}:</strong> {att.content}</div>
                        {/each}
                        <div><strong>Bio:</strong> {currProfile.bio}</div>
                    </div>
                </div>
            {/key}
        </div>

        <div id="button-holder">
            {#if currProfile === founder}
                <button
                    type="button"
                    class="btn"
                    id="next"
                    on:click={() => index++}>&#10142;</button>
            {:else}
                <button
                    type="button"
                    id="reject"
                    class="btn"
                    on:click={() => index++}>X</button>
                <button
                    type="button"
                    id="heart"
                    class="btn"
                    class:liked={currProfile.selected === true}
                    on:click={() => {
                        currProfile.selected = true;
                        setTimeout(() => index++, 750);
                    }}>&#10084;</button>
            {/if}
        </div>
    {:else}
        <h4 in:fade={{ duration: 500, delay: 550 }}>Explore Your Matches:</h4>
        <div id="results" in:fade={{ duration: 500, delay: 550 }}>
            {#if !matchProfiles.some((m) => m.selected === true)}
                <h4 style="margin: 0;">No matches...</h4>
                <div class="feedback">
                    {nullFeedback}
                </div>
            {:else}
                <div id="matches">
                    {#each matchProfiles.filter((m) => m.selected === true) as match}
                        <button
                            type="button"
                            class="match btn"
                            class:currButton={currFeedback === match}
                            on:click={() => (currFeedback = match)}>
                            {match.name}
                        </button>
                    {/each}
                </div>
                {#key currFeedback}
                    <div class="feedback" in:fade>
                        {#if currFeedback}
                            {currFeedback.feedback}
                        {/if}
                    </div>
                {/key}
            {/if}
            <button
                type="reset"
                class="btn"
                id="reset"
                on:click={() => window.location.reload()}>Restart</button>
        </div>
    {/if}
</div>

<style>
    .app {
        height: 100%;
        width: 100%;
        padding: 0 4%;
        margin: 13% 0;
        overflow: hidden;
        background-color: #ffffffcc;
        display: flex;
        flex-flow: column;
    }
    #profile-holder {
        height: 80%;
        flex-grow: 1;
        position: relative;
    }
    .profile {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
    }
    .text {
        padding: 0 0.5em;
        overflow: auto;
    }
    .text > * {
        margin: 0.5em 0;
    }
    h4 {
        font-size: 1.1em;
        text-align: center;
    }
    img {
        width: auto;
        max-width: 80%;
        height: auto;
        max-height: 270px;
        display: block;
        margin: 0 auto;
    }
    #results {
        display: flex;
        flex-flow: column;
        gap: 1em;
        width: 100%;
        height: 100%;
    }
    #matches {
        display: flex;
        flex-flow: column;
        width: max-content;
        margin: 0 auto;
        gap: 0.5em;
    }
    .btn.match {
        background-color: var(--primary);
        font-size: 1.1em;
        transition: background-color 0.2s, color 0.2s;
    }
    .match.currButton {
        background-color: var(--secondary);
        color: black;
    }
    #button-holder {
        display: flex;
        justify-content: center;
    }
    .btn {
        width: 100%;
        margin: 0;
        border: none;
        background: var(--secondary);
    }
    #heart {
        background: #ea3c53;
        position: relative;
    }
    #heart.liked::after {
        content: '\2764';
        position: absolute;
        color: #ea3c53;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: none;
        animation: float-up 0.75s linear forwards;
    }
    #reject {
        background: #333;
    }
    #reset {
        margin-top: auto;
    }
    .feedback {
        padding: 0 0.5em;
    }
    @keyframes float-up {
        50% {
            opacity: 1;
        }
        to {
            transform: translateY(-50px) scale(2);
            opacity: 0;
        }
    }
</style>
