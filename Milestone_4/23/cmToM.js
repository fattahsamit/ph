function centimeterToMeter(cm) {
  const meter = cm / 100;
  return meter;
}

const cm = 550;
const cmToM = centimeterToMeter(cm);
console.log(cm, "centimeter (cm) =", cmToM, "meter (m)");
