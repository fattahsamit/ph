// Step 1: Add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //   Step 2: Get the email address inside the email input field
  //   always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   Step 3: Get password
  //        3.a: set id on the HTML element
  //        3.b: get the element
  //        3.a: set the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // DO NOT VERIFY email password on the Client Side!!!
  //   Step 4: Verify email and password and check whether valid user or not
  if (email === "pola@baap.com" && password === "secret") {
    window.location.href = "bank.html";
    // window.location = "bank.html";
    // window.location.assign("bank.html");
    // window.location.replace("bank.html");
  } else {
    alert("Invalid Credentials");
  }
});

function remember() {
  alert("E-mail = pola@baap.com\nPassword = secret");
}
