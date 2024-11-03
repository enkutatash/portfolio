<script>
    export let project;
    
    let currentImageIndex = 0;

    // Change image every 10 seconds
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % project.images.length;
    }, 10000);
</script>

<div class="project-section">
  {#if project.images.length > 0}
    <div class="project-image">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={project.images[currentImageIndex]} alt="Project Image" />
    </div>
  {/if}
  <div class="project-content {project.images.length === 0 ? 'full-width' : ''}">
    <div class="featured-label">{project.task}</div>
    <h2 class="project-title">{project.title}</h2>
    <p class="project-description">
      {project.description}
    </p>
  </div>
  <div class="icons">
    <div class="icon">
      <a href={project.link} target="_blank" aria-label="Project Link"></a>
    </div>
  </div>
</div>

<style>
  .project-section {
    background-color: #1d1033;
    border-radius: 8px;
    padding: 20px;
    max-width: 600px; /* You can also adjust this if needed */
    display: flex;
    gap: 20px;
    align-items: center;
    position: relative;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
  }

  .project-image {
    width: 600px; /* Increased width */
    height: 200px;
    border-radius: 8px;
    overflow: hidden; /* Ensure image doesn't overflow the container */
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio of the image */
  }

  .project-content {
    max-width: 400px; /* Default width */
  }

  .project-content.full-width {
    flex: 1; /* Allow content to take up available space */
    max-width: none; /* Remove max-width restriction */
  }

  .featured-label {
    color: #aa83ff;
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .project-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #e5e5ff;
    margin: 0;
  }

  .project-description {
    margin-top: 10px;
    font-size: 0.95em;
    color: #ddd;
    line-height: 1.6;
    word-wrap: break-word; /* Break long words */
    overflow-wrap: break-word; /* Wrap overflowing content */
    overflow: hidden; /* Hide overflow text */
    white-space: nowrap; /* Prevent text from wrapping */
    text-overflow: ellipsis; /* Add ellipsis for overflow text */
    max-width: 100%; /* Prevent description from exceeding the container */
  }

  .icons {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
  }

  .icon {
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .icon a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-decoration: none; /* Removes underline */
    color: inherit; /* Inherit color if any icon symbol is added */
  }

  .icon::before {
    content: '🔗';
    font-size: 16px;
    color: #1d1033;
  }
</style>
