document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputAmount("withdraw-field");
  const previousWithdrawTotal = getPreviousTotal("withdraw-total");
  const previousBalanceTotal = getPreviousTotal("balance-total");

  if (numberValidation(newWithdrawAmount)) {
    return;
  }
  if (withdrawValidation(newWithdrawAmount, previousBalanceTotal)) {
    return;
  }

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setNewTotal("withdraw-total", newWithdrawTotal);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setNewTotal("balance-total", newBalanceTotal);
});
