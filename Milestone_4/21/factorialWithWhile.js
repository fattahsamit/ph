// function factorial(number) {
//   let result = 1,
//     i = 1;

//   while (i <= number) {
//     result *= i;
//     i++;
//   }
//   return result;
// }

function factorial(number) {
  let result = 1,
    i = number;

  while (i >= 1) {
    result *= i;
    i--;
  }
  return result;
}

const number = 5;
const fact = factorial(number);
console.log("Factorial of", number, ":", fact);
