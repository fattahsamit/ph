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
// console.log(table3);

function largerThan5(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 5) {
      count++;
    }
  }
  return count;
}

const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const bigger = largerThan5(numbers);
// console.log(bigger);

function largerReverse(name1, name2) {
  let longerName;
  if (name1.length > name2.length) {
    longerName = name1;
  } else {
    longerName = name2;
  }
  const reversedName = longerName.split("").reverse().join("");
  return reversedName;
}

const name1 = "Mofiz",
  name2 = "Hasan Masud";
const reverse = largerReverse(name1, name2);
// console.log(reverse);

function milliliterToLiter(ml) {
  const l = ml / 1000;
  return l;
}

const ml = 3500;
const liter = milliliterToLiter(ml);
// console.log(liter);

function smallestPerson(persons) {
  let smallestAge = persons[0].age;
  let smallest = persons[0].name;
  for (let i = 0; i < persons.length; i++) {
    const personAge = persons[i].age;
    const smallestPerson = persons[i].name;
    if (personAge < smallestAge) {
      smallestAge = personAge;
      smallest = smallestPerson;
    }
  }
  return smallest;
}

const persons = [
  { name: "sakib", age: 30 },
  { name: "samiul", age: 20 },
  { name: "sahid", age: 50 },
  { name: "samin", age: 10 },
];
const smallest = smallestPerson(persons);
console.log(smallest);
