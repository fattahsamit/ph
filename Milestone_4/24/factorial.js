function fact(n) {
  // Base Case
  if (n == 1) {
    return 1;
  }
  // Recursive Call
  const factorial = n * fact(n - 1);
  return factorial;
}

const input = 5;
const output = fact(input);
console.log(output);
