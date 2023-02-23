const person = {
  name: "James Bond",
  age: 27,
  lovers: { wife: "Amy", gf: "Lucy" },
  car: "BMW",
};
console.log(person);
const stringified = JSON.stringify(person);
console.log(stringified);
const parsed = JSON.parse(stringified);
console.log(parsed);
