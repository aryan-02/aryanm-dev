<script lang="ts">
    import BannerContent from "./BannerContent.svelte";
    import Section from './Section.svelte';   

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
	<Section color="white" bg="#2f3438">
        <div class="container">
            <div class="text-content" style="flex: 1;">
                <h1>Hi! 👋</h1>
                <p>I am a junior undergraduate student at the <strong><a href="https://uta.edu/" target="_blank">University of Texas at Arlington</a></strong>, where I major in <strong>Computer Science</strong>.</p>
            </div>
        </div>
    </Section>
    <Section color="white" bg="#2f3438">
        <h1>Projects 💻</h1>
        <p></p>
    </Section>
	
</main>

<style>
.homeBanner {
	/* background: linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%); */
    background-color: #2b4162;
    background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);

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
.container {
    display: flex;
}

h1 {
        font-size: 2.5em;
        margin-bottom: 0.5rem;
    }
    strong {
        border-bottom: 3px solid transparent;
        transition: border 0.5s;
    }
    strong:hover {
        border-bottom: 3px solid salmon;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }

</style>
