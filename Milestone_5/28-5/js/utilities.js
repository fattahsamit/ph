function getInputAmount(input) {
  const amount = document.getElementById(input);
  const amountString = amount.value;
  const amountNumber = parseFloat(amountString);

  amount.value = "";
  return amountNumber;
}

function getPreviousTotal(input) {
  const amount = document.getElementById(input);
  const amountString = amount.innerText;
  const amountNumber = parseFloat(amountString);

  return amountNumber;
}
