const names = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "ebul",
  "babul",
  "abul",
  "kabul",
  "gabul",
  "cabul",
  "babul",
  "abul",
  "abul",
];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    if (unique.includes(names[i]) === false) {
      unique.push(names[i]);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
