<script>
    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";
</script>

<svelte:head>
  <title>Course Assignments</title>
</svelte:head>

<h1> Projects</h1>

<div class="projects">
    {#each projects as p} 
        <Project data={p} />
    {/each}
</div>