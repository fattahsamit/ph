var numbers = [78, 45, 98, 85];
// Use push to add element to an array as thye last element of the array
numbers.push(69);
console.log(numbers);

var friends = ["Sam", "Eren", "Goku"];
friends.push("Luffy");
friends.push("Jake");
console.log(friends);

// Use pop to get rid of the last element
numbers.pop();
// The popped element stored in element variable
var element = numbers.pop();
console.log(numbers);
console.log(element);

// shift() to add element to the first index of an array
friends.shift();
console.log(friends);

// unshift() to remove the first element of an array
friends.unshift("Frank");
console.log(friends);
