
<script>
    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1> Hannah Chiou </h1>

<div class="home">
	<img src="images/my-notion-face-transparent.png" alt="A headshot of Hannah Chiou" width="500px">
	<div class="text-box">
		<h2>Hello!</h2>
		<p>Hannah Chiou is a Wellesley College senior majoring in data science. Special interests include film, math, & running. </p>
	</div>
</div>

<h2> Latest Projects </h2>
<div class="projects">
	{#each projects.slice(0, 3) as p}
	<Project data={p} hLevel="3" />
	{/each}
</div>
