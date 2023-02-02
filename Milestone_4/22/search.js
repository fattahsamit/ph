const lyrics =
  "I got a long way to go And a long memory I ve been searching for an answer Always just out of reach Blood on the floor Sirens repeat I ve been searching for the courage To face my enemies";

const doesExist = lyrics.toLowerCase().includes("memory");
console.log(doesExist);

// ==============================================================================================================

// indexOf
console.log(lyrics.indexOf("way"));

if (lyrics.indexOf("out") !== -1) {
  console.log("Exists inside the string");
} else {
  console.log("Can't find it");
}

// startsWith
console.log(lyrics.startsWith("We"));

// endsWith
console.log(lyrics.endsWith("enemies"));

const fileName = "mybook.pdf";
const otherFile = "mypic.jpg";
console.log(fileName.endsWith(".pdf"));
console.log(otherFile.endsWith(".jpg"));
