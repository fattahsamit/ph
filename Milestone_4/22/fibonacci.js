// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
/*
    fibo[3] = fibo[2] + fibo[1];
    fibo[4] = fibo[3] + fibo[2];
    fibo[60] = fibo[59] + fibo[58];

    fibo[n] = fibo[n-1] + fibo[n-2];
    fibo[i] = fibo[i-1] + fibo[i-2];
*/

function fibo(num) {
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

const num = 12;
const fibonacci = fibo(num);
console.log(fibonacci);
