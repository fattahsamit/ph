// 1*2*3*4*5*6*7*....n
// n! = 1*2*3*...*n
// 4! = 1*2*3*4

// function factorial(number) {
//   let result = 1;
//   for (let i = number; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// }

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

// const result = factorial(7);
console.log(factorial(7));
