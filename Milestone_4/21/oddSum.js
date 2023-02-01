function sumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function getoddNumbers(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getoddNumbers(myNumbers);
const oddSum = sumOfArray(oddNumbers);
console.log(oddSum);
