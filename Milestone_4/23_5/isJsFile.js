function isJavaScriptFile(file) {
  if (file.includes(".js", 9)) {
    return true;
  } else {
    return false;
  }
}

const fileName = "app.js";
const jsOrNot = isJavaScriptFile(fileName);
console.log(jsOrNot);
