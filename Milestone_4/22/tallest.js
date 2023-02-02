function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log("Tallest Person:", tallest);
