const arr = [2, 3, 4];
const doMath = (arr) => {
  let sum = 0;
  let count = 0;
  for (const i of arr) {
    sum += i * i;
    count++;
  }
  const avg = sum / count;
  return avg;
};

const math = doMath(arr);
console.log(math);
