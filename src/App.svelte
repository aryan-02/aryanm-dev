<script lang="ts">
    const rows=5;
    const cols=9;

    let mx = 0;
    let my = 0;

    $: mousepos = "" + mx + "     " + my

    let windowWidth = 0;
    let windowHeight = 0;

    // $: windowCenterX = windowWidth / 2;
    // $: windowCenterY = windowHeight / 2;

    $: arrowWidth = windowWidth / cols;
    $: arrowHeight = windowHeight / rows;
    $: gap = Math.min(arrowWidth, arrowHeight) * 0.1; // 10% of the smaller dimension

    function handleMouseMove(event: any)
    {
        mx = event.clientX;
        my = event.clientY;
    }

    function getArrowPosition(i, j) {
        return {
            x: j * (arrowWidth + gap) + arrowWidth / 2,
            y: i * (arrowHeight + gap) + arrowHeight / 2
        };
    }

</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:mousemove={handleMouseMove} />

<main>
    <div role="banner" class="homeBanner">
        {#each Array(rows) as _, i}
            <div class="row">
                {#each Array(cols) as _, j}
                    <span class="material-symbols-outlined arrow" style="transform: rotate({Math.atan2((my - getArrowPosition(i, j).y), (mx - getArrowPosition(i, j).x))}rad) scaleX({1 + Math.sqrt(Math.pow((my - getArrowPosition(i, j).y), 2) + Math.pow(mx - getArrowPosition(i, j).x, 2)) / 3000})">arrow_right_alt</span>
                {/each}
            </div>
        {/each}
    </div>
</main>
<style>
.homeBanner {
	background: black;
	color: white;
	width: 100%;
	height: 100vh;
	margin: 0;
	overflow: hidden;
}
.row {
	display: flex;
	justify-content: space-evenly;
}
.arrow {
	font-size: 180px;
	color: gray;
	user-select: none;
}
</style>
