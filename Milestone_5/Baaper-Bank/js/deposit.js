// Step 1: add click handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   Step 2: Get the deposit amount from the deposit input field
  //   For input field use .value to get the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;

  //   Step 3: Get the current deposit total amount
  //   For Non-input(element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  let depositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText = depositAmount;
  console.log(depositTotal);
});
