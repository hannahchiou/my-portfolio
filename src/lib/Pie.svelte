<script>
    import * as d3 from 'd3';
    export let data = []; 
    export let selectedIndex = -1;

    // let data = [
	// { value: 1, label: "apples" },
	// { value: 2, label: "oranges" },
	// { value: 3, label: "mangos" },
	// { value: 4, label: "pears" },
	// { value: 5, label: "limes" },
	// { value: 5, label: "cherries" }
    // ];

    let arcData;
    let arcs;

    $: {
        let sliceGenerator = d3.pie().value(d => d.value);
        let arcGenerator = d3.arc().innerRadius(0).outerRadius(50); // Arc generator
		// Reactively calculate arcData and arcs the same way we did before with sliceGenerator and arcGenerator
		arcData = sliceGenerator(data);
		arcs = arcData.map(d => arcGenerator(d));
    }

    let colors = d3.scaleOrdinal(d3.schemeSet2);

</script>

<div class="container">
    <svg viewBox="-50 -50 100 100">
        {#each arcs as arc, index}
        <path d={arc} 
              fill={colors(index)} 
              class:selected={selectedIndex === index} 
              on:click={e => selectedIndex = selectedIndex === index ? -1 : index} />
        {/each}
    </svg>
    
    <!-- Box around legend with improved swatch and layout -->
    <div class="legend-box">
        <ul class="legend">
            {#each data as d, index}
                <li style="--color: { colors(index) }" 
                    class:selected={selectedIndex === index}
                    on:click={() => selectedIndex = selectedIndex === index ? -1 : index}>
                    <span class="swatch"></span>
                    {d.label} <em>({d.value})</em>
                </li>
            {/each}
        </ul>
    </div>
</div>


<style>

    svg {
        max-width: 20em;
        margin-block: 2em;
        overflow: visible; /* Do not clip shapes outside the viewBox */
    }

    svg:has(path:hover) path:not(:hover) {
	    opacity: 50%;
    }

    path{
        transition: 300ms;
    }

   /* Swatch styling */
   .swatch {
        display: inline-block;
        width: 1em; /* Make it a square */
        height: 1em; /* Make it a square */
        background-color: var(--color); /* Set background color from inline style */
        border-radius: 0.25em; /* Rounded corners for swatches */
        margin-right: 0.5em; /* Space between swatch and text */
    }

    /* List item styling */
    li {
        display: flex;
        align-items: center; 
        gap: 0.5em; 
    }

    /* Grid layout for the legend */
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8em, 1fr)); /* Responsive grid */
        gap: 1em; /* Space between items */
        padding: 0.5em;
        margin: 0.5em;
        list-style: none;
    }

    /* Container for the entire legend */
    .legend-box {
        flex: 1; 
        border: 1px solid var(--color-border); /* Border around the legend */
        padding: 1em;
        background-color: var(--color-card); /* Background color for the legend box */
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
        margin-top: 5em; 
        margin-bottom: 2em;
        transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        border-radius: 8px;
    }

    .container {
        display: flex;
        gap: 4em; /* Space between chart and legend */
        align-items: flex-start; /* Ensure they are aligned properly */
    }

    .legend-box:hover{
        background-color: var(--color-bg);
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
    }

    svg:has(.selected) path:not(.selected) {
        opacity: 50%;
    }

    .selected {
        --color: oklch(60% 45% 0) !important;
        
        &:is(path) {
            fill: var(--color) !important;
        }
        
        &:is(li) {
            color: var(--color);
        }
    }

    ul:has(.selected) li:not(.selected) {
        color: gray;
    }

    path:hover {
	    opacity: 100% !important;
    }
    
    path {
        cursor: pointer;
    }

</style>
