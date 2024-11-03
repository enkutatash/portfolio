<script>
    export let skill; // Assuming skill has image and link properties
</script>

<div class="skill">
    <a href={skill.link} target="_blank" rel="noopener noreferrer" class="skill-link">
        <img src={skill.image} alt={skill.title} class="skill-image" />
    </a>
</div>

<style>
    .skill {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skill-link {
        text-decoration: none; 
    }

    .skill-image {
        width: 50px;
        height: 50px; 
        border-radius: 50%;
        object-fit: cover; 
        transition: transform 0.3s; 
    }

    .skill-image:hover {
        transform: scale(1.1); 
    }
</style>
