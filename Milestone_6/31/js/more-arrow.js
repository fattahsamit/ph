const add = (first, second) => first + second;
const getFullName = (first, last) => first + " " + last;
const multiply = (a, b) => a * b;

const result = multiply(5, 3);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// No parameter arrow function
const getPi = () => 3.14;

// One parameter
const doubleIt = (num) => num * 2;
// One parameter (Simple Version)
// const fiveTimes = num => num * 5;

// Multi-line Arrow Function
// If you want to return something, use return
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
};
