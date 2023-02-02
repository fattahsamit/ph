const userName = "linkinPark";
const userInput = "LinkinParK";
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("Valid User");
} else {
  console.log("Invalid User");
}
