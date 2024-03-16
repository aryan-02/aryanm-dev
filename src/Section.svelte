<script>
    export let bg = "white";
    export let color = "black"
</script>

<section style="background-color: {bg}; color: {color}">
    <slot>
        <div class="container">
            <div class="text-content">
                <h1>Hi 👋</h1>
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