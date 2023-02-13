/*
    1. Add event listener to the deposit button
    2. Get deposit amount from the deposit input field
        -convert String deposit amount to a number type
    3. Clear the deposit input field after getting the value
    4. Get the previous deposit total
    5. Calculate new deposit total and set the value to the deposit total
    6. Get current balance
    7. Calculate the new balance and set it to the balance total element
*/

//   Step 1
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   Step 2
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //   Step 3
  depositField.value = "";

  // Validation
  if (newDepositAmount <= 0 || isNaN(newDepositAmount)) {
    alert("Please enter a valid number");
    return;
  }

  //   Step 4
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //   Step 5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  //   Step 6
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   Step 7
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
