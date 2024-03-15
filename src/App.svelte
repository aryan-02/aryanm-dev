<script lang="ts">
    import BannerContent from "./BannerContent.svelte";

    

    const rows=5;
    const cols=9;

    let mx = 0;
    let my = 0;

    let windowWidth = 0;
    let windowHeight = 0;

	let arrows = Array(rows).fill().map(() => Array(cols).fill());

    function handleMouseMove(event: any)
    {
        mx = event.clientX;
        my = event.clientY;
    }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:mousemove={handleMouseMove} />

<main>
    <div role="banner" class="homeBanner">
        {#each Array(rows) as _, i}
            <div class="row">
                {#each Array(cols) as _, j}
				<span bind:this={arrows[i][j]} class="material-symbols-outlined arrow" style="transform: rotate({Math.atan2((my - (arrows[i][j] && arrows[i][j].getBoundingClientRect().top + arrows[i][j].getBoundingClientRect().height / 2)), (mx - (arrows[i][j] && arrows[i][j].getBoundingClientRect().left + arrows[i][j].getBoundingClientRect().width / 2)))}rad) scaleX({1 + Math.hypot(my - (arrows[i][j] && arrows[i][j].getBoundingClientRect().top + arrows[i][j].getBoundingClientRect().height / 2), mx - (arrows[i][j] && arrows[i][j].getBoundingClientRect().left + arrows[i][j].getBoundingClientRect().width / 2)) / 4000});">remove</span>
                {/each}
            </div>
        {/each}
    </div>
	<BannerContent />
	<h2>Hello World</h2>
	
</main>

<style>
.homeBanner {
	background: #262A33;
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
	color: rgba(255, 255, 255, 0.2);
	user-select: none;
}
</style>
