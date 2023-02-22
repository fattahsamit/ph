const numbers = [12, 5, 24, 45, 11, 18, 9, 55, 61, 2];
const bigNums = numbers.filter((number) => number > 20);
// console.log(bigNums);

const tinyNums = numbers.filter((n) => n < 10);
// console.log(tinyNums);

const even = numbers.filter((e) => e % 2 === 0);
// console.log(even);

const products = [
  { id: 1, name: "laptop", price: 65000 },
  { id: 2, name: "mobile", price: 90000 },
  { id: 3, name: "watch", price: 5000 },
  { id: 4, name: "tablet", price: 23000 },
];

const expensive = products.filter((product) => product.price > 50000);
console.log(expensive);
