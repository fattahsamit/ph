function publicBusFare(people) {
  if (typeof people !== "number" || people < 50) {
    return "Provide valid input of people";
  }
  const busCapacity = 50,
    microCapacity = 11;
  let remaining = 0;
  remaining = people % busCapacity;

  remaining = remaining % microCapacity;
  const price = 250;
  const cost = remaining * price;
  return cost;
}

const people = 112;
const fare = publicBusFare(people);
console.log(fare);
