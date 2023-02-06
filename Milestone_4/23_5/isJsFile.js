function isJavaScriptFile(file) {
  if (typeof file !== "string" || file.length == 0) {
    return "Enter valid input!";
  }

  if (file.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

const fileName = "image.js.png";
const jsOrNot = isJavaScriptFile(fileName);
console.log(jsOrNot);
