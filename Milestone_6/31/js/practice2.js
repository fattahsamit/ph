// a
const friends = ["Dan", "John", "Amy", "Brad", "Anthony"];
const getEven = (friends) => {
  const result = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      result.push(friend);
    }
  }
  return result;
};

const evenNames = getEven(friends);
console.log(evenNames);
