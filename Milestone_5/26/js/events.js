console.log("Separate JS file");

// Option 1 Directly set on the HTML element
{
  /* <button onclick="document.body.style.backgroundColor='yellow'"> */
}

// Option 2 Add onClick Function on the HTML element
{
  /* <button onclick="makeRed()">Make Red</button> */
}
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

// Option 4
const purpleButton = document.getElementById("make-purple");
purpleButton.addEventListener("click", makePurple);
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", function makePink() {
  document.body.style.backgroundColor = "pink";
});

document.getElementById("make-orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
