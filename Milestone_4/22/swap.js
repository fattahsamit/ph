let first = 5,
  second = 7;
console.log("Before Swapping:", first, second);

let temp = first;
first = second;
second = temp;

console.log("After Swapping:", first, second);

// Destructuring approach
[first, second] = [second, first];
console.log("After Swapping again:", first, second);
