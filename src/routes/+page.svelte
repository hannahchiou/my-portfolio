
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

{#await fetch("https://api.github.com/users/hannahchiou")}
  <p>Loading...</p>
{:then response}
  {#await response.json()}
    <p>Decoding...</p>
  {:then data}
  	<section class="github-stats">
	<h2>My GitHub Stats</h2>
	<dl>
	  <div class="stat-box">
		<dt>Followers:</dt>
		<dd>{data.followers}</dd>
	  </div>
	  <div class="stat-box">
		<dt>Following:</dt>
		<dd>{data.following}</dd>
	  </div>
	  <div class="stat-box">
		<dt>Public Repositories:</dt>
		<dd>{data.public_repos}</dd>
	  </div>
	</dl>
  </section>
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
  {/await}
{:catch error}
  <p class="error">Something went wrong: {error.message}</p>
{/await}


<h2> Latest Projects </h2>
<div class="projects">
	{#each projects.slice(0, 3) as p}
	<Project data={p} hLevel="3" />
	{/each}
</div>

<style>
	.github-stats {
    text-align: left;
    margin: auto;
	width: 100%;
    max-width: 125ch; /* Matches body max-width */
  }

  .github-stats dl {
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }

  .stat-box {
    flex: 1;
    background-color: var(--color-card);
    padding: 1.5em;
    border-radius: 12px;
    border: 2px solid var(--color-border);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .stat-box:hover {
    background-color: var(--color-bg);
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
  }

  dt {
    font-weight: bold;
	font-size: 150%;
    color: var(--color-primary);
  }

  dd {
    font-size: 1.5em;
    color: var(--color-text);
    margin: 1em;
  }
</style>


