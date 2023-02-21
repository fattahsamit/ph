const arr1 = [2, 10, 44];
const arr2 = [34, 81, 22];

const doMath = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  const maximum = Math.max(...arr);
  return maximum;
};

const math = doMath(arr1, arr2);
console.log(math);
