// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//   sum += i;
// }
// console.log(sum);

function sum(i) {
  // Base Case
  if (i == 1) {
    return 1;
  }
  // Recursive Call
  return i + sum(i - 1);
}
const result = sum(5);
console.log(result);
