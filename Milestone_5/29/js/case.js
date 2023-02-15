/*
  1. Add event listener to the case plus button
  2. Get the value inside the case number field (input field)
  3. Convert the number to an integer
  4. Calculate the new case number
  5. Set the value to the case number field
*/

function updateCaseNumber(IsIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;

  // if (IsIncrease === true) {
  if (IsIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber(false);
  });
