<script>
    class Circle {
        constructor() {
            this.x = 500;
            this.y = 500;
            this.text = '';
            this.radius = 150;
            this.transform = '';
        }
    }

    const transforms = [
            '-375px, -125px',
            '-375px, 125px',
            '375px, -125px',
            '375px, 125px',
        ],
        colors = [
            'rgb(255, 156, 238)',
            'rgb(167, 154, 255)',
            'rgb(201, 235, 239)',
            'rgb(255, 212, 129)',
            'rgb(148, 223, 255)',
        ];
    let circles = [],
        mySVG,
        vAxisTop = '[Custom Label]',
        vAxisBot = '[Custom Label]';
    function addCircle() {
        if (transforms.length === 0) {
            return;
        }
        const currCircle = new Circle();
        circles = [...circles, currCircle];
    }
    function dragMe(node, params) {
        Draggable.create(node, {
            type: 'x,y',
            bounds: mySVG,
            onClick: (e) => {
                node.querySelector('input').focus();
            },
        });
    }
</script>

<div id="container">
    <svg
        id="svg-image"
        bind:this={mySVG}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000">
        <defs>
            <style>
                circle {
                    stroke: black;
                    stroke-width: 5px;
                }
                g {
                    transform-box: fill-box;
                    transition: transform 0.5s;
                }
                text {
                    font-size: 22px;
                    font-family: sans-serif;
                }
                polyline {
                    fill: none;
                    stroke: black;
                    stroke-width: 2px;
                }
            </style>
        </defs>
        <polyline
            points="25 475 0 500 25 525 0 500 1000 500 975 475 1000 500 975 525" />
        <polyline
            points="475 25 500 0 525 25 500 0 500 1000 475 975 500 1000 525 975" />
        <text x="30" y="495">Informal</text>
        <text text-anchor="end" x="970" y="495">Formal</text>
        <text x="510" y="40" dominant-baseline="hanging">{vAxisTop}</text>
        <text x="510" y="960">{vAxisBot}</text>
        <foreignObject x="505" y="35" width="220" height="30">
            <input bind:value={vAxisTop} type="text" maxlength="15" />
        </foreignObject>
        <foreignObject x="505" y="940" width="220" height="30">
            <input bind:value={vAxisBot} type="text" maxlength="15" />
        </foreignObject>
        {#each circles as circle, i}
            <g use:dragMe style="transform: translate({circle.transform});">
                <ellipse
                    cx={circle.x}
                    cy={circle.y}
                    rx={circle.radius}
                    ry={circle.radius / 2}
                    fill={colors[i]} />
                <text
                    text-anchor="middle"
                    dominant-baseline="middle"
                    x={circle.x}
                    y={circle.y}>{circle.text}</text>
                <foreignObject
                    x={circle.x - circle.radius + 5}
                    y={circle.y - 12}
                    width={circle.radius * 2 - 10}
                    height="30">
                    <input
                        bind:value={circle.text}
                        type="text"
                        xmlns="http://www.w3.org/1999/xhtml"
                        maxlength="25" />
                </foreignObject>
            </g>
        {/each}
    </svg>
    <button type="button" id="adder" class="btn" on:click={addCircle}>+</button>
</div>

<style>
    #container {
        position: relative;
        width: 100%;
        max-width: 700px;
        display: flex;
        margin: 0 auto;
        background: white;
    }
    svg {
        width: 100%;
        height: auto;
        border: 1px solid black;
    }
    #adder {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
    }
    input {
        width: 100%;
        height: 100%;
        font-size: 24px;
        background: transparent;
        border: none;
        text-align: center;
        color: transparent;
    }
    input:focus {
        background: white;
        border: 1px solid black;
        color: black;
    }
    text {
        user-select: none;
    }
    .btn {
        background: var(--primary);
    }
</style>
