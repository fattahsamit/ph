function radianToDegree(radian) {
  const toDegree = radian * (180 / Math.PI);
  const degree = parseFloat(toDegree.toFixed(2));

  return degree;
}

const radian = 10;
const degree = radianToDegree(radian);
console.log(degree);
