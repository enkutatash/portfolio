<script>
	import Header from "./component/header.svelte"
	import Mainpage from "./component/mainpage.svelte";
	import Experiance  from "./component/experiance.svelte";
	import SkillTab from "./component/skills.svelte"
	import Project from "./component/projects.svelte"
	import Contact from "./component/contact.svelte";
	let tabs = ["Home","Experiance","Skill","Project","Contact"]
	let active = "Home"
	const onChangeTab = (e) => {
    active = e.detail;
  };
</script>

<body>
	
		<Header {active} {tabs} on:onChangeTab={onChangeTab}/>
		{#if active==="Home"}
		<Mainpage/>
		{:else if active === "Experiance"}
		<Experiance/>
		{:else if active === "Skill"}
		
		<SkillTab/>
		{:else if active === "Project"}
		<Project/>
		{:else}
		<Contact/>
			
		{/if}
</body>

<style>
body {
	background: linear-gradient(45deg,#11071f,#2b1252,#371962,#2d1454);
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>