const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  console.log(number);
}

const products = [
  { id: 1, name: "Samsung A21", price: 27000 },
  { id: 2, name: "iphOne 17", price: 69000 },
  { id: 3, name: "Realme 2x", price: 22000 },
  { id: 4, name: "Faltu phone", price: 8000 },
  { id: 5, name: "Xiaomi Note 20", price: 26000 },
  { id: 6, name: "Zenfone 7", price: 19000 },
  { id: 7, name: "Nokia 1200 Phone", price: 2000 },
  { id: 8, name: "phONE1", price: 30000 },
];

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product.name);
    }
  }
  return matched;
}

const result = matchedProducts(products, "Phone");
console.log(result);
