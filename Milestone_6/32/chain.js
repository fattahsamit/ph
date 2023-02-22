const users = [{ id: 1, name: "Rock", job: "doctor" }];
// console.log(users[0].name);

const data = {
  count: 5000,
  data: [
    { id: 1, name: "abul", job: "leader" },
    { id: 2, name: "babul", job: "leader" },
  ],
};

const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
  id: 6001,
  name: "Zaraki Kenpachi",
  address: {
    street: {
      first: "24/A, Sheorapara",
      second: "third floor",
      third: "right side",
    },
    postOffice: "Mirpur 12",
    city: "Dhaka",
  },
};

const userFloor = user.address?.stret?.third;
console.log(userFloor);
