// (a)
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// (b)
var triangle1 = 9;
var triangle2 = 8;
var triangle3 = 9;

if (
  triangle1 == triangle2 ||
  triangle2 == triangle3 ||
  triangle3 == triangle1
) {
  console.log("Isosceles");
} else {
  console.log("Not Isosceles");
}
