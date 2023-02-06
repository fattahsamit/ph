function isBestFriend(friend1, friend2) {
  if (friend1.name == friend2.friend && friend2.name == friend1.friend) {
    return true;
  } else {
    return false;
  }
}

const friend1 = { name: "doe", friend: "alex" };
const friend2 = { name: "john", friend: "doe" };
const isFriend = isBestFriend(friend1, friend2);
console.log(isFriend);
