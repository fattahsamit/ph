function milesToKm(m) {
  const km = m * 1.60934;
  return km;
}

const m = 2;
const km = milesToKm(m);
console.log("The distance in km:", km);
