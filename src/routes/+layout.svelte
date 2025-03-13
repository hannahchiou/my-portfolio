<script>
    import { page } from "$app/stores";

    let pages = [
        { url: ".", title: "Home" },
        { url: "projects", title: "Projects" },
        { url: "resume", title: "Resume" },
        { url: "contact", title: "Contact" },
        { url: "https://github.com/hannahchiou", title: "Github" }
    ];
    let root = globalThis?.document?.documentElement;
    $: root?.style.setProperty("color-scheme", colorScheme);
    let localStorage = globalThis.localStorage ?? {};

    let colorScheme = "auto";

    if (localStorage.colorScheme) {
    colorScheme = localStorage.colorScheme;
    }
    $: localStorage.colorScheme = colorScheme;

</script>

<nav>
    {#each pages as p}
        <a
            href={p.url}
            class:current={$page.route.id === p.url}
            target={p.url.startsWith("http") ? "_blank" : null}
        >
            {p.title}
        </a>
    {/each}
</nav>

<label class="color-scheme">
    Theme:
    <select bind:value={colorScheme}>
        <option value="auto">System settings</option>
        <option value="dark">Dark mode</option>
        <option value="light">Light mode</option>
    </select>
</label>


<style>
    /* Links */
    a {
        color: var(--color-accent);
        text-decoration: none;
    }

    a:hover, a:focus {
        color: var(--color-accent);
        opacity: 0.8;
    }

    /* Navigation */
    nav {
        color: var(--color-primary);
        display: flex;
        margin-bottom: 2em;
        border-bottom: 3px solid var(--color-primary);
    }

    nav a {
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: inherit;
        padding: 0.75em 0.5em;
    }

    nav a.current {
        font-weight: bold;
        border-bottom: 0.3em solid var(--color-primary);
        padding-bottom: 0.3em;
    }

    nav a:hover {
        border-bottom: 0.4em solid var(--color-accent);
        background-color: color-mix(in --color-bg, var(--color-accent), canvas 20%);
    }

    :root {
        color-scheme: light dark;
        --color-bg: light-dark(#f2eee9,#16120d);
        --color-text: light-dark(#2a2727, #d8d5d5);
        --color-card: light-dark(#e8e4dd, #211d17);
        --color-accent: light-dark(#e85234, #ca3416);
        --color-primary: light-dark(#42478f, #7075bd);
        --color-border: light-dark(#ccc, #555);
    }
 
    * {
        background-color: var(--color-bg);
        color: var(--color-text);
        accent-color: var(--color-accent);
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    /* .light-mode {
        --color-bg: #f2eee9;
        --color-text: #2a2727;
        --color-card: #e8e4dd;
        --color-accent: #e85234;
        --color-primary: #42478f;
        --color-border: #ccc;
    } */

    @media(prefers-color-scheme: dark) {
        :root {
        --color-bg: #16120d;
        --color-text: #d8d5d5;
        --color-card: #211d17;
        --color-accent: #ca3416;
        --color-primary: #7075bd;
        --color-border: #555;
        } 
    }

</style>

<slot />


