function isJavaScriptFile(file) {
  if (file.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

const fileName = "image.js.png";
const jsOrNot = isJavaScriptFile(fileName);
console.log(jsOrNot);
