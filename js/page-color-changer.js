// get the 3 range sliders from the HTML by their IDs
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// get the body element so we can change its background
const pageBody = document.body;

// this function updates the background color based on the slider values
function updateBackgroundColor() {
  // read the current values from each slider
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  // build the RGB color string (ex: "rgb(255, 100, 50)")
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  // apply it to the background color of the page
  pageBody.style.backgroundColor = rgbColor;

  // log the color in the console just to check it’s working
  console.log("Background color changed to:", rgbColor);
}
