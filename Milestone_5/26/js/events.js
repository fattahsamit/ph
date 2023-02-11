console.log("Separate JS file");

// Option 1 Directly set on the HTML element

// Option 2 Add onClick Function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};
