const numbers = [12, 56, 87, 44];
const half = numbers.map((n) => n / 2);
const third = numbers.map((n) => n / 3);
// console.log(half);
// console.log(third);

const friends = ["Tom Cruise", "Tom Hanks", "Thomas Shelby", "Tommy Montana"];
const firstLetters = friends.map((friends) => friends[0]);
// console.log(firstLetters);
const nameLength = friends.map((friends) => friends.length);
// console.log(nameLength);

const products = [
  { id: 1, name: "laptop", price: 65000 },
  { id: 2, name: "mobile", price: 90000 },
  { id: 3, name: "watch", price: 5000 },
  { id: 4, name: "tablet", price: 23000 },
];

const items = products.map((product) => product.name);
const prices = products.map((p) => p.price);

console.log(items);
console.log(prices);
