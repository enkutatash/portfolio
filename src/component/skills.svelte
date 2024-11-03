<script>
    import Card from "./skillcard.svelte";
    import store from "../store/store";
    const { Skills } = store;
</script>

<div class="skill">
    <div class="skill-header">
       I am currently looking to join a cross-functional team 
    </div>
    <div class="skill-body">
        <div class="row">
            {#each $Skills.slice(0, 5) as skill}
                <Card {skill} />
            {/each}
        </div>
        <div class="row">
            {#each $Skills.slice(5, 8) as skill}
                <Card {skill} />
            {/each}
        </div>
        <div class="row">
            {#each $Skills.slice(8) as skill}
                <Card {skill} />
            {/each}
        </div>
    </div>
</div>

<style>
    .skill {
        width: 70%;
        margin: auto auto;
        text-align: center; /* Center text in the skill container */
        align-items: center;
        justify-content: center;
    }

    .skill-header {
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
        color: #ffffff;
    }

    .skill-body {
        display: flex;
        flex-direction: column; /* Stack rows vertically */
        gap: 10px; /* Space between rows */
    }

    .row {
        display: grid;
        gap: 5px; /* Space between items */
        justify-items: center; /* Center items within the grid */
    }

    /* First row with 5 items */
    .row:nth-child(1) {
        grid-template-columns: repeat(5, 0.1fr); /* 5 items */
        justify-content: center;
    }

    /* Second row with 3 items */
    .row:nth-child(2) {
        grid-template-columns: repeat(3, 0.1fr); /* 3 items */
        justify-content: center;
    }

    /* Third row with 1 item */
    .row:nth-child(3) {
        grid-template-columns: repeat(1, 0.1fr); /* 1 item */
        justify-content: center;
    }
</style>
