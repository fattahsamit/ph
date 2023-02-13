/*
    1. Add event listener to the withdraw button
    2. Get withdraw amount from the withdraw input field
        -convert String withdraw amount to a number type
    3. Clear the withdraw input field after getting the value
    4. Get the previous withdraw total
    5. Calculate new withdraw total and set the value to the withdraw total
    6. Get current balance
    7. Calculate the new balance and set it to the balance total element
*/

//   Step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   Step 2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   Step 3
  withdrawField.value = "";

  //   Step 4
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //   Step 5
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  //   Step 6
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   Step 7
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
