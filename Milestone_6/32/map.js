const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

// function doubleIt(number) {
//   return number * 2;
// }

const doubleIt = (number) => number * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map((number) => number * 2);
const makeDoubleDirect2 = numbers.map((x) => x * 2);
const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);

console.log(getDoubles(numbers));

console.log(makeDouble);
console.log(makeDoubleDirect);
console.log(makeDoubleDirect2);
console.log(fiveTimes);
