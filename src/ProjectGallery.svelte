<script lang="ts">
    import Tags from 'svelte-tags-input'
    import type {Project} from './types' 
    import {projects} from './projects'
    import ProjectCard from "./ProjectCard.svelte";
    export let accentColor: string;
    export let pageBackground: string;
    export let pageTextColor: string;
    const allTags:string[] = Array.from(new Set(projects.reduce((tagsList: string[], project:Project) => tagsList.concat(project.tags), [])));
    console.log(allTags);
    console.log(typeof allTags);
    let tags:string[] = [];
</script>

<div class="project-gallery" style="--accent-color: {accentColor}; --page-background: {pageBackground}; --text-color: {pageTextColor}">
    <div id="filterContainer">
        <Tags bind:tags={tags} placeholder="Filter by tags" autoComplete={allTags} onlyAutocomplete={true} onlyUnique={true} />
    </div>
    <p>{tags}</p>
    {#each projects as project}
        {#if tags.every(tag => project.tags.includes(tag))}
            <ProjectCard {project} {accentColor} background={pageBackground} textColor={pageTextColor}></ProjectCard>
        {/if}
    {/each}
</div>

<style>
#filterContainer :global(.svelte-tags-input-tag) {
	background: var(--accent-color);
    font-size: 1.3rem;
    padding: 0 0.9rem;
    border-radius: 1rem;
}
#filterContainer :global(.svelte-tags-input-layout) {
	background: var(--page-background);
    color: var(--text-color);
}
#filterContainer :global(.svelte-tags-input) {
    font-family: inherit;
    cursor: text;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    color: var(--text-color);
}
#filterContainer :global(.svelte-tags-input-matchs), #filterContainer :global(.svelte-tags-input-matchs li) {
    color: var(--text-color);
    background: var(--page-background);
}
#filterContainer :global(.svelte-tags-input-matchs li):hover, #filterContainer :global(.svelte-tags-input-matchs li.focus) {
    color: var(--text-color);
    background: var(--accent-color);
}

</style>