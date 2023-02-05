/*
book1 ---> 100
book2 ---> 200
book3 ---> 300
function parameters: quantity1, quantity2, quantity3
output: total price
*/
function paperRequirements(quantity1, quantity2, quantity3) {
  const book1 = 100,
    book2 = 200,
    book3 = 300;
  book1Price = book1 * quantity1;
  book2Price = book2 * quantity2;
  book3Price = book3 * quantity3;
  const totalPrice = book1Price + book2Price + book3Price;
  return totalPrice;
}

const quantity1 = 2,
  quantity2 = 3,
  quantity3 = 1;
const totalPrice = paperRequirements(quantity1, quantity2, quantity3);
console.log("Total Price:", totalPrice);
