// var i = 1;
// while (i < 20) {
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

for (var i = 1; i < 20; i++) {
  if (i > 10) {
    break;
  }
  console.log(i);
}

var items = ["ant", "mouse", "cat", "dog", "elephant"];
for (var i = 0; i < items.length; i++) {
  if (items[i] == "dog") {
    break;
  }
  console.log(items[i]);
}

var numbers = [45, 87, 89, 32, 52, 23, 144, 10, 188, 69];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 100) {
    break;
  }
  console.log(numbers[i]);
}
