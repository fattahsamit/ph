const fish = {
  name: "Hilsa",
  address: "chandpur",
  color: "silver",
  phone: "01352534523",
  price: 4000,
};

// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: "Robert", age: 45, profession: "Banker" };
console.log(age);

const { address } = fish;
console.log(address);

// Array Destructuring
const [first, another] = [44, 99, 34, 12];
console.log(first, another);

const actors = ["Chris", "Peter", "Brain"];
const [king, emperor, ace] = actors;
console.log(emperor);

function getNames() {
  return ["Peter", "Griffin"];
}

const [father, uncle] = getNames();
console.log(uncle, father);
