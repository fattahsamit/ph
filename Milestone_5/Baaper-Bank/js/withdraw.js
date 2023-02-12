/*
    1. Add event handler with the withdraw button
    2. Get the withdraw amount from the withdraw input field
        -For input field use .value to get the value inside the input field
        -make sure to convert the input into a number by using parseFloat()
    3. Get the previous withdraw total
        -For Non-input use innerText to get the text
    4. Calculate total withdraw amount (Add the previous and the new amount)
        -Set total withdraw amount
    5. Get the previous balance total
    6. Calculate new balance total
        -Set the new balance total
    7. Clear the input field
*/

// Step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // Step-3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // Step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // Step-5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Step-6
  const currentBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
  balanceTotalElement.innerText = currentBalanceTotal;

  // Step-7
  withdrawField.value = "";
});
