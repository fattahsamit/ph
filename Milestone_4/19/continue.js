var numbers = [45, 87, 89, 32, 52, 23, 144, 10, 188, 69];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    continue;
  }
  console.log(numbers[i]);
}
