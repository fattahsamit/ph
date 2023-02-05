const shoppingCart = [
  { name: "shoe", phone: 1200 },
  { name: "shirt", phone: 2200 },
  { name: "pant", phone: 3700 },
  { name: "belt", phone: 600 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum += product.phone;
  }
  return sum;
}

const expense = totalCost(shoppingCart);
console.log("Total Expense:", expense);
