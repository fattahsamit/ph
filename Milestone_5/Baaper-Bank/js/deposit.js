// Step 1: add click handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   Step 2: Get the deposit amount from the deposit input field
  //   For input field use .value to get the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  // Validation
  if (newDepositAmountString <= 0 || newDepositAmountString === "") {
    alert("Please enter a valid number");
  } else {
    const newDepositAmount = parseFloat(newDepositAmountString);
    //   console.log(typeof newDepositAmount);

    //   Step 3: Get the current deposit total amount
    //   For Non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    //   Convert String to Floating point number
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //   Step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //   Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step 5: Get Balance Current Total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //   Step 6: Calculate Current Total Balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //   Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //   Step 7: Clear the deposit field
    depositField.value = "";
  }
});
