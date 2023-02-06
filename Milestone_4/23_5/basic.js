function add(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const sum = add(9);
// console.log(sum);

function tableOf3(n) {
  let table = [];
  for (let i = 1; i <= n; i++) {
    const mul = 3 * i;
    table.push(mul);
  }
  return table;
}

const table3 = tableOf3(10);
console.log(table3);
