<script>
    import store from "../store/store";
    import Card from "./projectcard.svelte";

    const { Projects } = store;
</script>

<div class="project">
    <div class="project-header">
        Projects
    </div>
    <div class="project-body">
        {#each $Projects as project }
            <Card {project}/>
        {/each}
    </div>
</div>

<style>
    .project {
        width: 70%;
        margin: 10px auto;
    }

    .project-header {
        font-size: 50px;
        margin-bottom: 30px;
        color: #ffffff;
    }

    .project-body {
    display: grid;
    grid-template-rows: 1fr 1fr; /* Two rows */
    grid-auto-flow: column; /* Enables horizontal scrolling */
    gap: 10px;
    overflow-x: auto; /* Enable horizontal scroll */
    white-space: nowrap;
    width: 100%;
    height: 85%;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none; /* Hide scrollbar in Internet Explorer and Edge */
    scrollbar-width: none; /* Hide scrollbar in Firefox */
}

/* Hide scrollbar in WebKit browsers (Chrome, Safari) */
.project-body::-webkit-scrollbar {
    display: none;
}


    /* Optional: Style to make sure each card has a fixed width and height */
    .project-body :global(.card) {
        width: 200px;
        height: 100%;
        background-color: #4a4a4a;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        scroll-snap-align: start;
    }
</style>
