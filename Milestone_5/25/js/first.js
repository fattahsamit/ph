console.log("first");

const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
secondSection.style.color = "white";
secondSection.style.backgroundColor = "steelblue";

// document.querySelectorAll (NodeList)
// document.querySelector (selects first match)
