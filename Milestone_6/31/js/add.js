// function add(first, second) {
//   console.log(first, second);
//   //   second = second || 0;

//   //   if (second === undefined) {
//   //     second = 0;
//   //   }
//   const total = first + second;
//   return total;
// }

// Default Function Parameter
function add(first, second = 0) {
  const total = first + second;
  return total;
}

const result = add(10, 20);
console.log(result);

function fullName(first, last = "Ahmed") {
  const name = first + " " + last;
  return name;
}

const name = fullName("Mr.");
console.log(name);
