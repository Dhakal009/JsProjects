const body = document.body;
const btn = document.querySelector("button");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
}

function getSystemTheme() {
    return mediaQuery.matches ? "dark" : "light";
}

// Initial load
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || getSystemTheme());

// Listen for system changes (only if no manual override)
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

// Toggle button
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});