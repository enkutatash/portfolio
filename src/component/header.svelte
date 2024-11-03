<script>
    export let tabs = [];
    export let active;
    import {createEventDispatcher} from "svelte"
    let dispatcher = createEventDispatcher()
</script>
<div class="header-container">
    <ul>
      {#each tabs as tab }
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class:active = {tab === active} on:click = {()=>dispatcher('onChangeTab',tab)}>{tab}</li>
      {/each}
    </ul>
</div>

<style>
  .header-container {
    background: linear-gradient(45deg,#4a2c74,#794cc2,#664594,#2d1454);
		width: 80%;
		padding: 20px;
		margin: 0 auto; 
        border-radius: 10px;
	}

	ul {
		display: flex;
		justify-content: center; 
		gap: 180px;
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
		color: rgb(134, 133, 133);
        
	}
    li:hover{
        color:rgb(184, 174, 174);
    }
    .active{
       
        color:white;

    }
    /* .icon {
    width: 20px; 
    height: auto;
} */

</style>