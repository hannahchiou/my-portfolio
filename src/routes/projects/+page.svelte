<script>

    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";
    import Pie from '$lib/Pie.svelte';

    let query = "";

    $: filteredProjects = projects.filter(project => {
	let values = Object.values(project).join("\n").toLowerCase();
	return values.includes(query.toLowerCase());
    });

    let selectedYearIndex;
    $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;

    $: filteredByYear = filteredProjects.filter(project => {
        if (selectedYear) {
            return project.year === selectedYear;
        }

        return true;
    });

    import * as d3 from 'd3';

    let pieData;

    $: {
		// Initialize to an empty object every time this runs
        pieData = {};
        
		// Calculate rolledData and pieData based on filteredProjects here
        let rolledData = d3.rollups(filteredProjects, v => v.length, d => d.year);

		// We don't need 'let' anymore since we already defined pieData
        pieData = rolledData.map(([year, count]) => {
            return { value: count, label: year };
        });
    }

</script>

<svelte:head>
  <title>Course Assignments</title>
</svelte:head>

<h1> {filteredByYear.length} Projects</h1>

<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />

<input type="search" bind:value={query}
       aria-label="Search projects" placeholder="🔍 Search projects…" />


<div class="projects">
    {#each filteredByYear as p} 
         <Project data={p} />
    {/each}
</div>

<style>
    input{
        width: 100%;
        font-family: 'Inter', sans-serif;
        padding: 1em;
        margin-top: 3em;
        margin-bottom: 3em;
        border-radius: 15px;
    }
</style>
