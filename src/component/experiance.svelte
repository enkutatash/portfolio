<script>
    import store from "../store/store"
    import Card from "./experiancecard.svelte"
    const {Experiance} = store

</script>
<div class="experiance">
    <div class="experiance-header">
      Experiance
    </div>
    <div class="experiance-body">
        {#each $Experiance as experiance }
            <Card {experiance}/>
        {/each}
    </div>
</div>

<style>
    .experiance{
        width: 70%;
        margin: 10px auto;

    }
     .experiance-header{
        font-size: 50px;
        margin-bottom: 30px;
        color:#ffffff;
    }
    .experiance-body{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap:10px;
    }
</style>