/*
    Array of numbers as input parameter for the function
    return only positive numbers
    if negative number is found then terminate the loop
*/
function onlyPositive(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number >= 0) {
      positiveNumbers.push(number);
    } else {
      break;
    }
  }
  return positiveNumbers;
}

numbers = [12, 6, 0, 99, 132, -41, 77, 552, -5, 24, 15];
const positive = onlyPositive(numbers);
console.log(positive);
