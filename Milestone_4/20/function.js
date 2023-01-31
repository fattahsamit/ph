// Function Declaration
function functionName(money) {
  console.log("HELLO WORLD!!!");
  console.log("I have", money, "Taka");
}
// Function Call
let taka = 200;
functionName(taka);

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const total1 = add(2, 3);
const total2 = add(6, 15);
const totalFinal = add(total1, total2);
console.log(totalFinal);

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

let dollar = 200;
let amountOfFood = buyFood(dollar);
console.log("Amount:", amountOfFood);

function avg(a1, a2, a3) {
  const total = a1 + a2 + a3;
  const avg = total / 3;
  return avg;
}

const a1m = 50,
  a2m = 40,
  a3m = 45;
let getAvg = avg(a1m, a2m, a3m);
console.log("Average marks:", getAvg);

function square(n) {
  return n * n;
}
let num = 4;
const makeSquare = square(num);
console.log("Square of", num, ":", makeSquare);
