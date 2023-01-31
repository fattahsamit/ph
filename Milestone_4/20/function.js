// Function Declaration
function functionName(money) {
  console.log("HELLO WORLD!!!");
  console.log("I have", money, "Taka");
}
// Function Call
let taka = 200;
functionName(taka);

function add(num1, num2) {
  console.log(num1, "+", num2, "=", num1 + num2);
}
add(2, 3);

function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  let sum = a + b + c + d + e;
  return sum;
}
let total = sum(34, 52, 62, 89, 3);
console.log("Total:", total);

function buyFood(money) {
  let foodPrice = 10;
  let quantity = money / foodPrice;
  return quantity;
}
// Function Call
let dollar = 200;
let amountOfFood = buyFood(dollar);
console.log("Amount:", amountOfFood);
