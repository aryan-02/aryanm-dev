<script lang="ts">
    export let bg : String = "white";
    export let color : String = "black"
</script>

<section style="background-color: {bg}; color: {color}">
    <slot>
        <div class="container">
            <div class="text-content">
                <h1>Heading 👋</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis molestias mollitia temporibus ducimus aliquam amet vel ea et, animi illo consequatur, quasi aspernatur minima maiores excepturi cum quod repudiandae.</p>
            </div>
            
        </div>
    </slot>
</section>

<style>

    section {
        display: block;
        padding: 2rem 20vw;
        font-size: 1.5rem;
    }
    h1 {
        font-size: 2em;
        margin-bottom: 0.5rem;
    }

</style>