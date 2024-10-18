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
				setTimeout(blink, random = (Math.random() * (max - min) + min) * 1000);
			})(); // function blink
		},
		2500 // delay before starting function
	) // setTimeOut
);
