<script>
    export let button = "Visit";
    export let type = 'third';
    export let link;
</script>

<a href={link} class="link" target="_blank" rel="noopener noreferrer">
    <button class={type}>
        {button}
    </button>
</a>

<style>
    /* Remove default link styling */
    .link {
        text-decoration: none;
    }

    button {
        margin: 5px auto;
        border: 0;
        border-radius: 10px;
        width: 100px;
        cursor: pointer;
        border: 2px solid  rgb(134, 133, 133);
    }

    .third {
        background: #271047;
        color: white;
    }

    .link:visited, .link:active {
        color: inherit;
    }
</style>
