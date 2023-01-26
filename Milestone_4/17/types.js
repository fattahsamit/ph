// Check Data type
var price = 100;
// console.log(typeof price);

price = "100";
// console.log(typeof price);

price = true;
// console.log(typeof price);

var disco;
// console.log(typeof disco);

// 0.1 + 0.2 returns 0.30000000000000004 whereas it should've returned 0.3
// To solve this issue we use toFixed() method to specify the number of digits after the dot
// But it returns a string. So we just convert it into float data type by using parseFloat() function
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);
