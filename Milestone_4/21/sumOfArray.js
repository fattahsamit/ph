function sumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const sumOfNumbers = sumOfArray(myNumbers);
console.log(sumOfNumbers);
