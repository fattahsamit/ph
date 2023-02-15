document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const caseNumber = parseInt(caseNumberString);

  const newCaseNumber = caseNumber + 1;

  caseNumberField.value = newCaseNumber;
});
