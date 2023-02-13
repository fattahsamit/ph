document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
  1. Get the element by ID
  2. Get the value from the element 
  3. Convert string value to a number
  */
  const newDepositAmount = getInputFieldValueById("deposit-field");

  // // Validation
  if (inputValidation(newDepositAmount)) {
    return;
  }

  //   Get previous deposit total by ID
  const previousDepositTotal = getTextElementValueById("deposit-total");

  //   Calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //   Set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  //   Get previous balance total by ID
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
