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

// blink, yoinked from https://github.com/sugoidogo/pngtube2/blob/master/v8/blink.html
setTimeout(
	()=>{
		(function blink(){
			const style=getComputedStyle(document.body)
			const min=+style.getPropertyValue('--blink-min')
			const max=+style.getPropertyValue('--blink-max')
			const time=+style.getPropertyValue('--blink-time')
			document.getElementById("avatar").src = style.getPropertyValue("--avatar_blink_img");
			document.querySelector("link[rel*='icon']").href = style.getPropertyValue("--favicon_blink");
			setTimeout(()=>{
				document.getElementById("avatar").src = style.getPropertyValue("--avatar_img");
				document.querySelector("link[rel*='icon']").href = style.getPropertyValue("--favicon");
			},time*1000)
			setTimeout(blink, (Math.random() * (max - min) + min)*1000)
		})() // function blink
	},2500 // delay before starting function
) // setTimeOut
