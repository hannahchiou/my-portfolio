<script>
    export let data = {};
    export let hLevel = 2;
  </script>

<article>
    <svelte:element this={"h" + hLevel}>{data.title}</svelte:element>
    <img src={data.image} alt="">
    <p> {data.description}</p>
    <div class="project-year">Created: {data.year}</div>
</article>


<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

:root {
  --color-bg: #f2eee9;
  --color-text: #2a2727;
  --color-card: #e8e4dd;
  --color-accent: #e85234;
  --color-primary: #42478f;
  --color-border: #ccc;
}

.dark-mode {
  --color-bg: #16120d;
  --color-text: #d8d5d5;
  --color-card: #211d17;
  --color-accent: #ca3416;
  --color-primary: #7075bd;
  --color-border: #555;
}

.light-mode {
  --color-bg: #f2eee9;
  --color-text: #2a2727;
  --color-card: #e8e4dd;
  --color-accent: #e85234;
  --color-primary: #42478f;
  --color-border: #ccc;
}

html {
  color-scheme: light dark; 
  accent-color: var(--color-accent);
}

h1, h2, h3, h4, h5, h6, section, ul, ol, li, p, nav, label, button {
  font-family: 'Inter', sans-serif; /* Apply to all major elements, including buttons */
}

body {
  font: 150%;
  background-color: var(--color-bg);
  color: var(--color-text);
  max-width: 125ch;
  margin: 0 auto;
  padding: 5%;
  line-height: 1.5em;
}

/* Headings */
h1, h2, h3 {
  color: var(--color-primary);
}

h1 {
  font-size: 400%;
  font-weight: bold;
}

h2 {
  font-size: 250%;
  font-weight: bold;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.1;
  text-wrap: balance;
}

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

/* Forms */
form {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
}

label {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
}

input,
textarea,
button, select {
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-card);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

button {
  font: inherit;
  padding: 0.7em;
  font-weight: bold;
  cursor: pointer;
  grid-column: 1 / -1;
  background-color: var(--color-accent);
  color: var(--color-text);
  border: none;
}

button:hover {
  background-color: var(--color-accent-dark);
}


/* Home Section */
.home {
  display: flex;
  align-items: center;
  gap: 1em;
}

.text-box {
  max-width: 50%;
  flex-shrink: 0;
}

.home img {
  max-width: 30%;
  height: auto;
}

/* Resume Section */
.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1em 0;
  flex-wrap: wrap;
  gap: 1em;
}

.resume-header h1 {
  margin: 0;
  font-size: 400%;
  flex: 1;
  min-width: 200px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  text-align: right;
  flex: 1;
  min-width: 250px;
}

.contact-info h2 {
  margin: 0.15em 0;
  font-size: 150%;
}

/* Resume Layout */
.resume-container {
  display: flex;
  gap: 2em;
  padding: 2em 0;
}

/* Resume Title */
.resume-title {
  flex: 0 0 20%;
  text-align: left;
  font-size: 250%;
  font-weight: bold;
  color: var(--color-primary);
  border-right: 5px solid var(--color-primary);
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Vertical separator */
.resume-container::before {
  content: "";
  flex: 0 0 9px;
  background-color: var(--color-primary);
  height: 100%;
}

/* Resume Side Content */
.resume-side {
  display: flex;
  flex-direction: column;
}

/* Resume Info Box */
.resume-info {
  flex: 1;
  background-color: var(--color-card);
  padding: 1.5em;
  border-radius: 12px;
  border: 2px solid var(--color-border);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-bottom: 2em;
  display: block;
  margin: 5px;
}

.resume-info:hover {
  background-color: var(--color-bg);
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
}

/* Resume Text Styling */
.resume-info h3 {
  margin: 0 0 0.5em;
  color: var(--color-primary);
  font-size: 200%;
}

.resume-info h4 {
  margin: 0 0 1em;
  color: var(--color-primary);
}

.resume-info ul {
  padding-left: 1.5em;
}

.resume-info li {
  margin-bottom: 0.5em;
}

.resume-info i {
  font-style: italic;
}

/* Ensure all text inside resume-info uses the same font */
.resume-info,
.resume-info time,
.resume-info i {
  font-family: 'DM Sans', sans-serif;
  font-size: 100%;
  color: var(--color-text);
}

/* Slightly adjust <time> for better readability */
.resume-info time {
  font-weight: bold;
}

.color-scheme{
  position: absolute;
  top: 9rem;
  right: 15rem;
  display: inline-flex;
  gap: 4px;
  font-size: 80%;
}


/* Projects Grid */
/* .projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 1em;
}

.projects article {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  gap: 0.75em;
}

.projects h2 {
  margin: 0;
} */

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 1em;
}

.projects article {
  display: grid;
  grid-template-rows: auto 1fr auto; /* Adjusted for dynamic content */
  gap: 0.75em;
}

.projects h2 {
  margin: 0;
}

/* Style for the Project Year */
.project-year {
  font-family: 'Inter';
  font-style: italic;
  color: var(--color-text);
  opacity: 0.7;
  align-self: start; 
  margin-top: 11rem;
}

</style>