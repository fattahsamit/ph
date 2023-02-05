function feetToInch(feet) {
  const inch = feet * 12;
  return inch;
}

const feet = 5.5;
const inch = feetToInch(feet);
console.log(feet, "feet =", inch, "inches");
