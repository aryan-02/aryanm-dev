<script lang="ts">
    import BannerContent from "./BannerContent.svelte";
    import ProjectCard from "./ProjectCard.svelte";
    import Section from './Section.svelte'; 
    import type {Project} from './types' 
    import pathPlanner from './assets/pathplanner.gif' 
    import {projects} from './projects'

    const rows:number = 5;
    const cols:number = 9;

    let darkTheme:boolean = true;

    const date = new Date();
    let year =  date.getFullYear();

    $: pageBackground = (darkTheme) ? "#2f3438" : "white";
    $: pageTextColor = (darkTheme) ? "white" : "black";

    $: bannerGradient = (darkTheme) ? "linear-gradient(315deg, #2b4162 0%, #12100e 74%)" : "linear-gradient(to right, #00b4db, #0083b0)";///"linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)";

    $: arrowColor = (darkTheme) ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)";

    $: socialIconColor = (darkTheme) ? "#eee" : "#222";

    $: accentColor = (darkTheme) ? "salmon": "#26c9fc";

    function toggleTheme()
    {
        darkTheme = !darkTheme;
    }

    let mx = 0;
    let my = 0;

    let windowWidth = 0;
    let windowHeight = 0;

	let arrows = Array(rows).fill(undefined).map(() => Array(cols).fill(undefined));
    console.log(arrows);

    function handleMouseMove(event: any)
    {
        mx = event.clientX;
        my = event.clientY;
    }

    
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} on:mousemove={handleMouseMove} />

<main>
    <div role="banner" class="homeBanner" style="background: {bannerGradient};">
        {#each Array(rows) as _, i}
            <div class="row">
                {#each Array(cols) as _, j}
				    <span bind:this={arrows[i][j]} class="material-symbols-outlined arrow" style="color: {arrowColor}; transform: rotate({Math.atan2((my - (arrows[i][j] && arrows[i][j].getBoundingClientRect().top + arrows[i][j].getBoundingClientRect().height / 2)), (mx - (arrows[i][j] && arrows[i][j].getBoundingClientRect().left + arrows[i][j].getBoundingClientRect().width / 2)))}rad) scaleX({1 + Math.hypot(my - (arrows[i][j] && arrows[i][j].getBoundingClientRect().top + arrows[i][j].getBoundingClientRect().height / 2), mx - (arrows[i][j] && arrows[i][j].getBoundingClientRect().left + arrows[i][j].getBoundingClientRect().width / 2)) / 4000});">remove</span>
                {/each}
            </div>
        {/each}
    </div>
	<BannerContent color={pageTextColor} iconColor={socialIconColor} />
    <div class="theme-toggle-container">
        <button style="color: {pageTextColor}" class="material-symbols-outlined theme-toggle" on:click={toggleTheme}>
            {#if darkTheme}
            light_mode
            {:else}
                dark_mode
            {/if}
        </button>
    </div>
	<Section color="{pageTextColor}" bg="{pageBackground}">
        <div class="container">
            <div class="text-content" style="flex: 1;">
                <h1>Hi! 👋</h1>
                <p>I am a junior undergraduate student at the <strong><a href="https://uta.edu/" target="_blank">University of Texas at Arlington</a></strong>, where I major in <strong>Computer Science</strong>.</p>
                <p>I currently work as a Teaching Assistant at UTA for <strong><a href="https://ranger.uta.edu/~alex/courses/3318/" target="_blank">CSE 3318: Algorithms and Data Structures</a></strong>.</p>
            </div>
        </div>
    </Section>
    <Section color="{pageTextColor}" bg="{pageBackground}">
        <h1>Projects 💻</h1>
        <!-- <p>Coming soon!</p> -->
        {#each projects as project}
            <ProjectCard {project} {accentColor} background={pageBackground} textColor={pageTextColor}></ProjectCard>
        {/each}
    </Section>
    <footer style="padding: 2rem; text-align: center;">
        <p>&copy; {year} Aryan Mediratta</p>
        <p>Made with <i class="material-symbols-outlined">coffee</i> and <i class="material-symbols-outlined">code</i></p>
    </footer>
	
</main>

<style>
.homeBanner {
	/* background: linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%); */
    background-color: #2b4162;

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

.theme-toggle-container {
    position: absolute;
    bottom: 5rem;
    display: flex;
    justify-content: center;
    width: 100%;
}

.theme-toggle {
    padding: 1rem;
    font-size: 4rem;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.5s;
}

.theme-toggle:hover {
    transform: scale(1.1);
}

.theme-toggle:active {
    transform: rotate(45deg) scale(1.1);
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
