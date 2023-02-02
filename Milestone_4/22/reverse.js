function reverseString(text) {
  let reversed = [];
  for (let i = text.length - 1; i >= 0; i--) {
    // reversed.push(text[i]);
    reversed += text[i];
  }
  return reversed;
}

const myString = "I am Jack's complete lack of surprise";
const reversed = reverseString(myString);
console.log(reversed);
