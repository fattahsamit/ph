const student = {
  name: "Fattah Samit",
  id: 123,
  address: "Dhaka, Bangladesh",
  isSingle: true,
  friends: ["Rick", "John", "Morty", "Jack"],
  movies: [
    { name: "Inception", year: 2010 },
    { name: "The Dark Knight", year: 2008 },
  ],
  message: function () {
    console.log("Hello World!!!");
  },
  car: {
    brand: "Sprinter Trueno",
    model: "AE86",
    price: 10221,
    made: 1983,
    manufacturer: {
      name: "Toyota",
      ceo: "Akio Toyoda",
      country: "Japan",
    },
  },
};

console.log(student);
console.log(student.message);
student.message();
