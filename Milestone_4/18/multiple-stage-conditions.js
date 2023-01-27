var money = 10;
var cakePrice = 45;
var rutiPrice = 35;
var biscuitPrice = 20;
var teaPrice = 10;

if (cakePrice <= money) {
  console.log("I can eat Cake");
} else if (rutiPrice <= money) {
  console.log("I can eat Ruti");
} else if (biscuitPrice <= money) {
  console.log("I can eat Biscuit");
} else if (teaPrice <= money) {
  console.log("I can drink tea");
} else {
  console.log("I cannot eat anything");
}
