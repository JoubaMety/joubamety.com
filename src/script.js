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
if (localStorage.theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
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
	} else {
		localStorage.theme = "dark";
        document.documentElement.setAttribute('data-theme', 'dark');
	}
}
