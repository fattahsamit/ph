function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  const dieselPerLiter = 114,
    petrolPerLiter = 130,
    octanePerLiter = 135;
  const dieselPrice = dieselPerLiter * dieselQuantity;
  const petrolPrice = petrolPerLiter * petrolQuantity;
  const octanePrice = octanePerLiter * octaneQuantity;
  const totalPrice = dieselPrice + petrolPrice + octanePrice;
  return totalPrice;
}

const diesel = 30,
  petrol = 20,
  octane = 10;
const price = oilPrice(diesel, petrol, octane);
console.log(price);
