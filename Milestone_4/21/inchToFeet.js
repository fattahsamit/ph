function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const myInches = 66;
const myFeet = inchToFeet(myInches);
console.log("My Height:", myFeet);

const dadaInches = 78;
const dadaFeet = inchToFeet(dadaInches);
console.log("Dada's Height:", dadaFeet);

const nanaInches = 69;
const nanaFeet = inchToFeet(nanaInches);
console.log("Nana's Height:", nanaFeet);
