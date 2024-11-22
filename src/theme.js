const themeTextMap = new Map([
	["dark", "Catppuccin (Mocha)"],
	["light", "Catppuccin (Latte)"],
	["nord-dark", "Nord (Polar Night)"],
	["nord-light", "Nord (Snow Storm)"],
	["catppuccin-frappe", "Catppuccin (Frappé)"],
	["catppuccin-macchiato", "Catppuccin (Macchiato)"],
    ["tango-dark", "Tango (Dark)"],
    ["tango-light", "Tango (Light)"],
	["halloween", "Halloween"],
	["gruvbox-light", "gruvbox (Light)"],
	["gruvbox-dark", "gruvbox (Dark)"],
	["dracula-dark", "Dracula (Dark)"],
	["dracula-light", "Dracula (Light)"],
]);

function earlyTheme() {
	var storedTheme =
		localStorage.getItem("data-theme") ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");
	if (storedTheme) {
		document.documentElement.setAttribute("data-theme", storedTheme);
		if (localStorage.getItem("theme") == "dark") {
			document.documentElement.classList.add("dark");
		}
	}
}

function theme() {
	var storedTheme =
	localStorage.getItem("data-theme") ||
	(window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light");
	if (storedTheme) {
		document.documentElement.setAttribute("data-theme", storedTheme);
		if (localStorage.getItem("theme") == "dark" ||
		((localStorage.getItem("theme") == null) && storedTheme == "dark")
		) {
			document.documentElement.classList.add("dark");
		} else if (localStorage.getItem("theme") == "light" ||
		((localStorage.getItem("theme") == null) && storedTheme == "light")
		) {
			document.documentElement.classList.remove("dark");
		}
		changeThemeText(storedTheme);
		addSelectedTheme(storedTheme);
	}	
}

function changeTheme(targetTheme, ambiance) {
	console.info("change theme to " + targetTheme + " (" + ambiance + ")");
	if (ambiance == "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
	document.documentElement.setAttribute("data-theme", targetTheme);
	addSelectedTheme(targetTheme);
	localStorage.setItem("data-theme", targetTheme);
	localStorage.setItem("theme", ambiance);
	changeThemeText(targetTheme);
}

function changeThemeText(targetTheme) {
	document.getElementById("SelectedTheme").textContent = themeTextMap.get(targetTheme);
}

// reset theme
function resetTheme() {
    console.info("reset theme to default");
	localStorage.removeItem("theme");
	localStorage.removeItem("data-theme");
	document.documentElement.removeAttribute("data-theme");
	document.documentElement.classList.remove("dark");
	theme();
}


function addSelectedTheme(targetTheme) {
	// remove all dropdown-active classes
	const dropdowns = document.getElementsByClassName("dropdown-item");
	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove("dropdown-active");
	}
	document.getElementById("select-" + targetTheme).classList.add("dropdown-active");
}