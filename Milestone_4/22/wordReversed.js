function reverseWords(str) {
  const words = str.split(" ");
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  const reversedJoined = reversed.join(" ");
  return reversedJoined;
}

const myString = "I am Jack's complete lack of surprise";
const reversed = reverseWords(myString);
console.log(reversed);
