const jim = 69;
const dela = 97;
const chinku = 99;

console.log("Highest Marks:", Math.max(jim, dela, chinku));
console.log("Lowest Marks:", Math.min(jim, dela, chinku));

function getMax(jim, dela, chinku) {
  if (jim > dela && jim > chinku) {
    return "Jim will get the cake";
  } else if (dela > jim && dela > chinku) {
    return "Dela will get the cake";
  } else {
    return "Chinku will get the cake";
  }
}

function max(jim, dela, chinku) {
  const max = Math.max(jim, dela, chinku);
  return max;
}
function min(jim, dela, chinku) {
  const min = Math.min(jim, dela, chinku);
  return min;
}

console.log(getMax(jim, dela, chinku));
console.log(max(jim, dela, chinku));
console.log(min(jim, dela, chinku));
