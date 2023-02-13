document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputAmount("deposit-field");
  const previousDepositTotal = getPreviousTotal("deposit-total");
  const previousBalanceTotal = getPreviousTotal("balance-total");

  if (numberValidation(newDepositAmount)) {
    return;
  }

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setNewTotal("deposit-total", newDepositTotal);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setNewTotal("balance-total", newBalanceTotal);
});
