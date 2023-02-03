const country = "Bangladesh";
const age = 35;
const isIndependent = true;
const student = {
  id: 12,
  class: 9,
  name: "Sam",
};
const friends = [43, 54, 13, 75, 32, 12, 53, 23, 98];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// Check Array using Array.isArray()
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(69));
console.log(friends.includes(13));

if (friends.indexOf(32) !== -1) {
  console.log("True");
}

const newFriendsAge = [21, 18, 14, 16];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
