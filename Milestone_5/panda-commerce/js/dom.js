// 2
const headerElements = document.getElementsByTagName("h3");
for (const headerElement of headerElements) {
  headerElement.style.color = "lightblue";
}

// 3
document.getElementById("backpack").style.backgroundColor = "tomato";

// 4
// const cardElements = document.querySelectorAll(".card");
const cardElements = document.getElementsByClassName("card");
for (const cardElement of cardElements) {
  cardElement.style.borderRadius = "30px";
}

// 5
function message() {
  console.log("This is a Red bag");
}

// 6
const buyNowElements = document.getElementsByClassName("buy-now-button");
// const cardElements = document.getElementsByClassName("card");
for (let i = 0; i < buyNowElements.length; i++) {
  buyNowElements[i].addEventListener("click", function () {
    cardElements[i - 3].style.display = "none";
  });
}

// 7
document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    const emailValue = event.target.value;
    const submitButton = document.getElementById("btn-submit");
    if (emailValue === "email") {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", true);
    }
  });

// 8
const images = document.getElementsByTagName("img");
for (const image of images) {
  image.addEventListener("mouseenter", function () {
    image.src = "images/replaced-image.jpg";
  });
}

// 9
const subscribeSection = document.getElementById("subscribe");
subscribeSection.addEventListener("dblclick", function () {
  subscribeSection.style.backgroundColor = "#e8fcea";
});
