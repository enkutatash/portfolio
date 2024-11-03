<script>
   import Button from "./button.svelte"
   export let experiance;
  </script>
  
  <div class="holder">
    <div class="container">
      <div class="images">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={experiance.image} alt={experiance.company}/>
      </div>
      <div class="text-part">
        <div class="title">{experiance.title}</div>
        <div class="company">{experiance.company}</div>
        <div class="description">{experiance.description}</div>
        <Button link = {experiance.link}></Button>
      </div>
    </div>
  </div>
  
  <style>
    .holder {
      background: linear-gradient(45deg,#11071f,#2b1252,#371962,#2d1454);
      border-radius: 6px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
      padding: 15px;
      color: white;
    }
  
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 10px;
      align-items: center;
    }
  
    .images img {
      width: 100px;
      height: 100px; 
      border-radius: 50%;
      object-fit: cover;
    }
  
    .text-part {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  
    .title {
      font-size: 1.5em; 
      
    }
  
   .description{
    font-size: 1em; 
   }
  
    
   
  </style>
  