const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32 GB",
    price: 36000,
    color: "Silver",
  },
  {
    name: "OnePlus",
    camera: 5,
    storage: "32 GB",
    price: 22000,
    color: "Silver",
  },
  {
    name: "iphone",
    camera: 64,
    storage: "32 GB",
    price: 82000,
    color: "Silver",
  },
  {
    name: "Xiaomi",
    camera: 8,
    storage: "32 GB",
    price: 52000,
    color: "Silver",
  },
  {
    name: "Oppo",
    camera: 32,
    storage: "32 GB",
    price: 20000,
    color: "Silver",
  },
  {
    name: "Nokia",
    camera: 16,
    storage: "32 GB",
    price: 44000,
    color: "Silver",
  },
  {
    name: "HTC",
    camera: 12,
    storage: "32 GB",
    price: 62000,
    color: "Silver",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
