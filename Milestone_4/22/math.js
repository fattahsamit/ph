const result = Math.pow(2, 3);
console.log(result);

const num1 = 25,
  num2 = 45;
const gap = Math.abs(num1 - num2);
console.log("gap:", gap);

if (gap < 5) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

const number1 = 2.49,
  number2 = 2.5;
const fullNumber1 = Math.round(number1);
console.log(fullNumber1);
const fullNumber2 = Math.round(number2);
console.log(fullNumber2);

console.log(Math.ceil(3.00001));
console.log(Math.floor(3.9999));

// Random
console.log(Math.random());
console.log(Math.round(Math.random() * 100));

console.log("Rolling the dice 20 times:");
for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
