const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "128 GB",
    price: 36000,
    color: "Silver",
  },
  {
    name: "Realme",
    camera: 5,
    storage: "32 GB",
    price: 22000,
    color: "Black",
  },
  {
    name: "iphone",
    camera: 32,
    storage: "32 GB",
    price: 82000,
    color: "White",
  },
  {
    name: "Xiaomi",
    camera: 8,
    storage: "32 GB",
    price: 16000,
    color: "Navy",
  },
  {
    name: "Oppo",
    camera: 32,
    storage: "32 GB",
    price: 20000,
    color: "Black",
  },
  {
    name: "Nokia",
    camera: 32,
    storage: "32 GB",
    price: 44000,
    color: "Blue",
  },
  {
    name: "Pixel",
    camera: 64,
    storage: "128 GB",
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

function bestCamera(phones) {
  let bestcamera = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.camera > bestcamera.camera) {
      bestcamera = phone;
    }
  }
  return bestcamera;
}

const mySelection = cheapestPhone(phones);
console.log("Cheapest Phone:", mySelection);

const mySelection2 = bestCamera(phones);
console.log("Phone with the best camera:", mySelection2);
