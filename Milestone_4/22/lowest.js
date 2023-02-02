function minInArray(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  return lowest;
}

const numbers = [167, 190, 120, 165, 137, 69];
const lowest = minInArray(numbers);
console.log("Lowest Number:", lowest);
