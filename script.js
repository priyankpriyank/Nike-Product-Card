// const container = document.querySelector(".container");
// const color1 = document.querySelector(".color-1");
// const color2 = document.querySelector(".color-2");
// const color3 = document.querySelector(".color-3");

// color2.addEventListener("click", () => {
// 	container.classList.add("change");
// 	container.style.backgroundImage =
// 		"linear-gradient(to right, rgb(225, 202, 210), rgb(255, 148, 114))";
// });

// color1.addEventListener("click", () => {
// 	container.classList.remove("change");
// 	container.style.backgroundImage =
// 		"linear-gradient(to right, #b6fbff, #83a4d4)";
// });
// color3.addEventListener("click", () => {
// 	container.classList.add("change");
// 	container.style.backgroundImage =
// 		"linear-gradient(360deg, #dee1e1 10%, #f4f4f4 360%)";
// });

const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const sizeButtons = document.querySelectorAll(".sizes span");
const priceDisplay = document.querySelector(".price span:last-child");
const circlePosition = document.querySelector(".circle-position");

let basePrice = 79.99; // Default price for the first shoe
let selectedSize = 9; // Default size

// Function to update price based on shoe color and size
const updatePrice = () => {
	let price = basePrice;

	// Adjust price for size selection, e.g., add $5 for size > 9
	if (selectedSize > 9) {
		price += (selectedSize - 9) * 5;
	}

	priceDisplay.textContent = price.toFixed(2);
};

// Color 1 (Blue Shoe) selection
color1.addEventListener("click", () => {
	container.classList.remove("change");
	basePrice = 79.99;
	updatePrice();
});

// Color 2 (Red Shoe) selection
color2.addEventListener("click", () => {
	container.classList.add("change");
	basePrice = 89.99;
	updatePrice();
});

// Size selection event
sizeButtons.forEach((sizeBtn) => {
	sizeBtn.addEventListener("click", () => {
		selectedSize = parseInt(sizeBtn.textContent);
		sizeButtons.forEach((btn) => btn.classList.remove("selected"));
		sizeBtn.classList.add("selected");
		updatePrice();
	});
});


sizeButtons.forEach((sizeBtn) => {
	sizeBtn.addEventListener("click", () => {
		// Get size button position relative to parent .sizes container
		const sizeBtnRect = sizeBtn.getBoundingClientRect();
		const sizesRect = document.querySelector(".sizes").getBoundingClientRect();
		const offsetLeft = sizeBtnRect.left - sizesRect.left;

		// Position the circle-position to the selected size button
		circlePosition.style.left = `${offsetLeft}px`;

		// Update price based on selected size
		updatePrice();
	});
});