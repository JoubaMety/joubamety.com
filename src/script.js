const themeTextMap = new Map([
	["dark", "Catppuccin Mocha"],
	["light", "Catppuccin Latte"],
	["nord-dark", "Nord (Dark)"],
	["nord-light", "Nord (Light)"],
	["catppuccin-frappe", "Catppuccin Frappé"],
	["catppuccin-macchiato", "Catppuccin Macchiato"],
]);

function theme() {
	var storedTheme =
		localStorage.getItem("theme") ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");
	if (storedTheme) {
		document.documentElement.setAttribute("data-theme", storedTheme);
		changeThemeText(storedTheme);
		addSelectedTheme(storedTheme);
	}
}
theme();

function changeTheme(targetTheme, ambiance) {
	console.debug("change theme to " + targetTheme + " (" + ambiance + ")");
	if (ambiance == "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
	document.documentElement.setAttribute("data-theme", targetTheme);
	addSelectedTheme(targetTheme);
	localStorage.setItem("theme", targetTheme);
	changeThemeText(targetTheme);
}

function changeThemeText(targetTheme) {
	document.getElementById("SelectedTheme").textContent = themeTextMap.get(targetTheme);
}

// reset theme
function resetTheme() {
	localStorage.removeItem("theme");
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

// preload image
const preloadImage = (src) =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = resolve;
		image.onerror = reject;
		image.src = src;
	});

// blink, yoinked from https://github.com/sugoidogo/pngtube2/blob/master/v8/blink.html
preloadImage(
	getComputedStyle(document.body).getPropertyValue("--avatar_blink_img")
).then(
	setTimeout(
		() => {
			(function blink() {
				const style = getComputedStyle(document.body);
				const min = +style.getPropertyValue("--blink-min");
				const max = +style.getPropertyValue("--blink-max");
				const time = +style.getPropertyValue("--blink-time");
				document.getElementById("avatar").src =
					style.getPropertyValue("--avatar_blink_img");
				document.querySelector("link[rel*='icon']").href =
					style.getPropertyValue("--favicon_blink");
				setTimeout(() => {
					document.getElementById("avatar").src =
						style.getPropertyValue("--avatar_img");
					document.querySelector("link[rel*='icon']").href =
						style.getPropertyValue("--favicon");
				}, time * 1000);
				setTimeout(blink, (Math.random() * (max - min) + min) * 1000);
			})(); // function blink
		},
		2500 // delay before starting function
	) // setTimeOut
);
