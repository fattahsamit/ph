const today = new Date();
console.log(today);

const date1 = new Date("1971-03-26");
const date2 = new Date("1971-12-16");

// Date compare
if (date1.getTime() < date2.getTime()) {
  console.log("March was before December");
} else {
  console.log("March was not before December");
}

// https://momentjs.com/
