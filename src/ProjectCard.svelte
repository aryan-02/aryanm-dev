<script lang="ts">
    import type {Project} from './types'
    export let project: Project;

    export let background: string = "white";
    export let textColor: string = "black";
    export let accentColor: string = "salmon";
</script>

<div class="project-card" style="--background: {background}; --text-color: {textColor}; --accent-color: {accentColor}">
    <div class="project-header">
        <h2 class="project-title">{project.title}</h2> <div class="project-status">{project.status}</div>
    </div>
    <p class="tags">
        {#each project.tags as tag}
            <div class="tag">{tag}</div>
        {/each}
    </p>
    {#if 'yt_embed' in project}
        <iframe class="youtube-video" title="YouTube" src="https://www.youtube.com/embed/{project.yt_embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    {/if}
    {#if 'image' in project}
        <img src="{project.image}" alt="Project" style="max-width: 80%; height: auto;">
    {/if}
    <p>{project.description}</p>
    <p class="links">
        {#if 'links' in project && project.links}
            {#each project.links as link}
                <a href="{link.url}" target="_blank">{link.name}</a>
            {/each}
        {/if}
    </p>
</div>


<style>
    .project-card {
        max-width: 100%;
        background: var(--background);
        color: var(--text-color);
        padding: 1rem 2rem;
        border-radius: 1rem;
        margin-top: 1.5rem;
        font-size:1rem;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .project-header {
        display: flex;
        align-items: center;
    }
    .project-title {
        margin-bottom: 1rem;
        display: inline-block;
        flex-basis: 100%;
    }
    .project-status {
        align-self: center;
        text-align: right;
        flex-basis: 20%;
    }
    .tags {
        margin-bottom: 2rem;
    }
    .tag {
        display: inline-block;
        font-size: 0.8rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: 2px solid var(--accent-color);
        margin-right: 1rem;
    }
    .links {
        padding-top: 1rem;
    }
    .links a {
        display: inline-block;
        padding: 1.2rem;
        margin-right: 1rem;
        text-decoration: inherit;
        color: var(--text-color);
        background: var(--accent-color);
        border-radius: 0.5rem;
        /* border: 2px solid var(--accent-color); */
        transition: transform 0.5s;
    }
    .links a:hover {
        transform: scale(0.9);
    }
    .youtube-video {
        aspect-ratio: 16 / 9;
        width: 70%;
    }
    @media screen and (width < 490px) {
        .youtube-video {
            width: 100%;
        }
    }

</style>