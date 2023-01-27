// (a)
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
var bananaIndex = fruits.indexOf("Banana");
fruits[bananaIndex] = "Mango";
console.log(fruits);

// (b)
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);
