// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
	localStorage.getItem("color-theme") === "dark" ||
	(!("color-theme" in localStorage) &&
		window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
	document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute('data-theme', 'light');
}

// change src of img with id "github0" and "github1" depending on light/dark mode
const github0 = document.getElementById("github0");
const github1 = document.getElementById("github1");
if (localStorage.theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
	github0.src = "./media/github_dark.webp";
	github1.src = "./media/github_dark.webp";
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
	github0.src = "./media/github_white.webp";
	github1.src = "./media/github_white.webp";
}

// change switch id "ChangeTheme" depending on light/dark mode
const ChangeTheme = document.getElementById("ChangeTheme");
if (localStorage.theme === "dark") {
	ChangeTheme.checked = true;
} else {
	ChangeTheme.checked = false;
}

function changeIcons() {
	const ChangeTheme = document.getElementById("ChangeTheme");
	if (localStorage.theme === "dark") {
		localStorage.theme = "light";
        document.documentElement.setAttribute('data-theme', 'light');
		github0.src = "./media/github_dark.webp";
		github1.src = "./media/github_dark.webp";
	} else {
		localStorage.theme = "dark";
        document.documentElement.setAttribute('data-theme', 'dark');
		github0.src = "./media/github_white.webp";
		github1.src = "./media/github_white.webp";
	}
}
