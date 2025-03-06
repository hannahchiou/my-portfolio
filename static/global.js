// STEP 1 - Confirm JavaScript is running
console.log("IT’S ALIVE!");

// Utility function to select elements
function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// STEP 2 - Navigation Highlighting (Disabled in STEP 3)
// let navLinks = $$("nav a");
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
// if (currentLink) {
//     currentLink.classList.add("current");
// }

// STEP 3 - Dynamically Create Navigation Bar
let pages = [
    { url: ".", title: "Home" },
    { url: "projects", title: "Projects" },
    { url: "resume", title: "Resume" },
    { url: "contact", title: "Contact" },
    { url: "https://github.com/hannahchiou", title: "Github" }
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let a = document.createElement("a");
    a.href = p.url;
    a.textContent = p.title;
    nav.append(a);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host !== location.host) {
        a.target = "_blank";
    }
}

// STEP 4 - Insert Theme Selection Dropdown
// document.body.insertAdjacentHTML("afterbegin", `
//     <label class="color-scheme">
//         Theme:
//         <select>
//             <option value="auto">System settings</option>
//             <option value="dark">Dark mode</option>
//             <option value="light">Light mode</option>
//         </select>
//     </label>
// `);

// let select = document.querySelector("select");
// let html = document.documentElement;

// // Function to apply the selected theme
// function applyTheme(theme) {
//     console.log(`Applying theme: ${theme}`);

//     if (theme === "dark") {
//         html.classList.add("dark-mode");
//         html.classList.remove("light-mode");
//     } else if (theme === "light") {
//         html.classList.add("light-mode");
//         html.classList.remove("dark-mode");
//     } else {
//         html.classList.remove("dark-mode");
//         html.classList.remove("light-mode");
//     }

//     // Store theme selection in localStorage
//     if (theme !== "auto") {
//         localStorage.setItem("colorScheme", theme);
//     } else {
//         localStorage.removeItem("colorScheme");
//     }
// }

// // Function to load theme from localStorage or system preference
// function loadTheme() {
//     let savedTheme = localStorage.getItem("colorScheme");

//     if (savedTheme === "dark" || savedTheme === "light") {
//         select.value = savedTheme;
//         applyTheme(savedTheme);
//     } else {
//         select.value = "auto"; // Default to system preference
//         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//             applyTheme("dark");
//         } else {
//             applyTheme("light");
//         }
//     }
// }

// // Event listener for theme selection dropdown
// select.addEventListener("change", function (event) {
//     let chosenTheme = event.target.value;
//     console.log(`User selected theme: ${chosenTheme}`);

//     if (chosenTheme === "auto") {
//         localStorage.removeItem("colorScheme");
//         loadTheme();
//     } else {
//         localStorage.setItem("colorScheme", chosenTheme);
//         applyTheme(chosenTheme);
//     }
// });

// // Automatically apply the theme on page load
// loadTheme();



