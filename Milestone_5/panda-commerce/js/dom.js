const headerElements = document.getElementsByTagName("h3");
for (const headerElement of headerElements) {
  headerElement.style.color = "lightblue";
}

document.getElementById("backpack").style.backgroundColor = "tomato";

// const cardElements = document.querySelectorAll(".card");
const cardElements = document.getElementsByClassName("card");
for (const cardElement of cardElements) {
  cardElement.style.borderRadius = "30px";
}

function message() {
  console.log("This is a Red bag");
}

const buyNowElements = document.getElementsByClassName("buy-now-button");
// const cardElements = document.getElementsByClassName("card");
for (let i = 0; i < buyNowElements.length; i++) {
  buyNowElements[i].addEventListener("click", function () {
    cardElements[i - 3].style.display = "none";
  });
}

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

const subscribeSection = document.getElementById("subscribe");
subscribeSection.addEventListener("dblclick", function () {
  subscribeSection.style.backgroundColor = "#e8fcea";
});
