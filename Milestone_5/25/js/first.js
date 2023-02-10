console.log("first");

const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
// secondSection.getAttribute("id");
secondSection.setAttribute("title", "Tooltip set by JavaScript");
secondSection.style.color = "white";
secondSection.style.textAlign = "center";
secondSection.style.backgroundColor = "steelblue";

// document.querySelectorAll (NodeList)
// document.querySelector (selects first match)

// querySelector
const firstLi = document.querySelector("#third-section-list li");
console.log(firstLi.innerText);
// querySelectorAll
const someLi = document.querySelectorAll(".third-section li");
console.log(someLi);
for (const li of someLi) {
  console.log(li.innerText);
}
