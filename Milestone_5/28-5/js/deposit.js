document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputAmount("deposit-field");
  const previousDepositTotal = getPreviousTotal("deposit-total");
  const previousBalanceTotal = getPreviousTotal("balance-total");

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
});
