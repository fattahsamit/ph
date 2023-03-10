// DRY (Do not Repeat Yourself)
/*
    1. Add withdraw button event handler
    2. Get withdraw amount by using getInputFieldValueById function
    3. Get previous withdraw amount by using getTextElementValueById function
    4. Calculate new withdraw total and
        set new withdraw total by using setTextElementValueById function
    5. Get previous balance amount by using getTextElementValueById function
    6. Calculate new balance total and
        set new balance total by using setTextElementValueById function
*/

// 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // 2
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  // // Validation
  if (inputValidation(newWithdrawAmount)) {
    return;
  }

  // 3
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  // 5
  const previousBalanceTotal = getTextElementValueById("balance-total");

  // Amount Validation
  if (amountValidation(newWithdrawAmount, previousBalanceTotal)) {
    return;
  }

  // 4
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  // 6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
