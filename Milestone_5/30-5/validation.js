const number = 24;
// string, number, boolean
if (typeof number === "number") {
  console.log("value is a number");
} else {
  console.log("value is not a number");
}

const numbers = [3, 15, 22, 69];
const student = { name: "Mr. Smith", age: 44 };
// console.log(typeof numbers);
console.log(Array.isArray(numbers));
console.log(typeof student);

// NaN
console.log(isNaN(2));
console.log(isNaN("2"));
console.log(isNaN("2a"));
console.log(isNaN("ab"));
console.log(isNaN({}));
// https://www.youtube.com/watch?v=1Z9yy0t2RGQ
