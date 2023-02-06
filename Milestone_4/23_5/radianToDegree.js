function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Enter valid input!";
  }

  const toDegree = radian * (180 / Math.PI);
  const degree = parseFloat(toDegree.toFixed(2));

  return degree;
}

const radian = 25;
const degree = radianToDegree(radian);
console.log(degree);
