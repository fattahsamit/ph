function getInputAmount(input) {
  const amount = document.getElementById(input);
  const amountString = amount.value;
  const amountNumber = parseFloat(amountString);

  amount.value = "";
  return amountNumber;
}
