/*
    find the longest name in an array containing names string
*/
function bestFriend(names) {
  let longName = names[0];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length > longName.length) {
      longName = name;
    } else {
      continue;
    }
  }
  return longName;
}

const friends = [
  "John Smith",
  "Frankey",
  "The Rock",
  "Dave Batista",
  "Cristiano Ronaldo",
  "Ikhtiar Uddin Muhammad Bin Bakhtiyar Khilji",
  "Emma Stone",
  "Sam",
  "David Bhai",
];

const longestName = bestFriend(friends);
console.log("The Person with the longest name:");
console.log(longestName);
