var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

// When you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// console.log(penCount2);
// Alternative:
// When you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart["keyboard"];
// console.log(penCount2);

var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

// Set Object Property values
shoppingCart.mouse = 10;
console.log(shoppingCart);
shoppingCart["mouse"] = 11;
console.log(shoppingCart);
shoppingCart[propertyName] = 12;
console.log(shoppingCart);
