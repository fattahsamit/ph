var shoppingItems = ["books", "sunglass", "keyboard", "mouse", "pen", "shoes"];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
  rahim: 12,
  karim: 45,
  jamil: 78,
  kuddus: 12,
  abdur: 32,
  sharif: 14,
};

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
  var value = shoppingCart[propertyName];
  console.log(propertyName, value);
}
