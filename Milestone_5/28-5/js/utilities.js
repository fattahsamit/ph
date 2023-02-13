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

function setNewTotal(id, newAmount) {
  const amount = document.getElementById(id);
  amount.innerText = newAmount;
}

function numberValidation(amount) {
  if (amount <= 0 || isNaN(amount)) {
    alert("Please enter a valid number");
    return true;
  }
}

function withdrawValidation(amount, fund) {
  if (amount > fund) {
    alert("Insufficient Funds\nCurrent Balance: " + fund + "$");
    return true;
  }
}
