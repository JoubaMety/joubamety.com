var style = getComputedStyle(document.body)

// preload image
const preloadImage = (src) =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = resolve;
		image.onerror = reject;
		image.src = src;
	});

var random = 0.0
// blink, yoinked from https://github.com/sugoidogo/pngtube2/blob/master/v8/blink.html
preloadImage(
	// get the image from the CSS variable --avatar_blink_img
	style.getPropertyValue("--avatar_blink_img")
).then(
	//getComputedStyle(document.body).getPropertyValue("--avatar_blink_img")
	setTimeout(
		() => {
			(function blink() {
				const style = getComputedStyle(document.body);
				const min = +style.getPropertyValue("--blink-min");
				const max = +style.getPropertyValue("--blink-max");
				const time = +style.getPropertyValue("--blink-time");
				console.info("blink! (min: " + min + " s, max: " + max + " s, duration: " + time + " s, random: " + Math.round(random) / 1000 + " s)");
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
				if (style.getPropertyValue("--avatar_img").includes("halloween")) {
					document.getElementById("avatar-span").setAttribute("data-tooltip", "Spooky Ame-chan by @Nyalra on Twitter (currently \"X\")");
				} else {
					document.getElementById("avatar-span").setAttribute("data-tooltip", "French-ified Ame-chan from NEEDY GIRL OVERDOSE, edited by me, original by @Nyalra on Twitter (currently \"X\")");
				}
				setTimeout(blink, random = (Math.random() * (max - min) + min) * 1000);
			})(); // function blink
		},
		2500 // delay before starting function
	) // setTimeOut
);


const hoverableElement = document.querySelectorAll(".tooltip");

hoverableElement.forEach(function(element) {
	if (
		!element.classList.contains("tooltip-left") && 
		!element.classList.contains("tooltip-right") && 
		!element.classList.contains("tooltip-top") && 
		!element.classList.contains("tooltip-bottom")
	) {
	element.addEventListener('mouseover', function() { 
		var parent = window.getComputedStyle(element,':before');
		height = parseFloat(parent.height.match(/\d+/)[0]);
		width = parseFloat(parent.width.match(/\d+/)[0]);
		var top = parseFloat(this.getBoundingClientRect().top);
		var left = parseFloat(this.getBoundingClientRect().left);
		var right = parseFloat(this.getBoundingClientRect().right);
		var top = top - height;
		var left = left - width;
		var right = right + width;
		var padding = 16;
		if (left <= padding) {
			this.classList.remove("tooltip-left", "tooltip-right", "tooltip-top", "tooltip-bottom");
			this.classList.add("tooltip-right");
		} else if (right <= padding) {
			this.classList.remove("tooltip-left", "tooltip-right", "tooltip-top", "tooltip-bottom");
			this.classList.add("tooltip-left");
		} else if(top <= padding){
			this.classList.remove("tooltip-top", "tooltip-bottom", "tooltip-left", "tooltip-right");
			this.classList.add("tooltip-bottom");
		} else {
			this.classList.remove("tooltip-top", "tooltip-bottom", "tooltip-left", "tooltip-right");
			this.classList.add("tooltip-top");
		}
		});
	}
});

(function localTime() {
	let tZ = "Europe/Bratislava"; // duh my timezone
	let date = new Date()
	let currentTime = date.toLocaleTimeString("en-UK", {
		timeZone: tZ,
		timeZoneName: "long",
		hour: "2-digit",
		minute: "2-digit",
	}).split(" ")
	let time = currentTime[0];
	// get long name of timezone
	let timeZone = currentTime.slice(1).join(" ");
	let timeZoneOffset = date.toLocaleTimeString("en-UK", {
		timeZone: tZ,
		timeZoneName: "longOffset",
	}).split(" ")[1].slice(3);
	// yeet seconds
	if (timeZoneOffset.includes(":00")) {
		timeZoneOffset = timeZoneOffset.slice(0,3);
	}
	document.getElementById("currentTime").innerHTML = time;
	document.getElementById("currentTimeZoneOffset").innerHTML = "UTC" + timeZoneOffset;
	document.getElementById("currentTimeZoneOffset").setAttribute("data-tooltip", timeZone);
	setTimeout(localTime, 5000);
})();

function copyText(input) {
	 // Copy the text inside the text field
	navigator.clipboard.writeText(input);
  
	// Alert the copied text
	console.info("Copied the text: " + input);
	notificationAlert(
		"success",
		2500,
		"Copy Text Success!",
		"&quot;<span class=\"font-bold\">" + input + "</span>&quot; was sucessfully copied!"
	);
}

function notificationAlert(type, duration, title, description) {
	const notification = document.getElementById("notification");
	const ntfc_title = document.getElementById("notification-title");
	const ntfc_desc = document.getElementById("notification-description");
	ntfc_title.innerHTML = title;
	ntfc_desc.innerHTML = description;
	notification.classList.add("show");
	setTimeout(
		function() {
			notification.classList.remove("show");
		},
		duration
	);
}

(async function replaceDiscordStatus(interval = 30){
	const url = "https://api.joubamety.com/v1/joubamety.com/discord"
	fetch(url)
	.then((response) => {
		return response.text();
	})
	.then((html) => {
		let element = document.getElementById("discord-status-card")
		if (html == "" || html == "   ") {
			if(!element.classList.contains("hidden")) {
				element.classList.add("hidden")
			}
		} else {
			if (element.innerHTML != html) {
				element.innerHTML = html  
				console.info("discord status update")
				if(element.classList.contains("hidden")) {
					element.classList.remove("hidden")
				}
				setTimeout( () => {
					fetch(url + "/emote.webp")
					fetch(url + "/albumArt.webp")
					fetch(url + "/gameArt.webp")
				}, 1000);
			}
		}
	});
	setTimeout(replaceDiscordStatus, interval*1000)
})();

// preload halloween avatars
(() => {
	preloadImage("./media/avatar__halloween.webp");
	preloadImage("./media/avatar__halloween_blink.webp")
})();