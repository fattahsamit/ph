// Function declaration
function add(first, second) {
  const total = first + second;
  return total;
}

//  Function Expression
const add1 = function add1(first, second) {
  const total = first + second;
  return total;
};

// Function Expression with Anonymous function
const add2 = function (first, second) {
  const total = first + second;
  return total;
};

function add4(first, second) {
  return first + second;
}

const add5 = function (first, second) {
  return first + second;
};

// Arrow Function
const add6 = (first, second) => first + second;

// Function Call
const result = add6(10, 20);
console.log(result);
