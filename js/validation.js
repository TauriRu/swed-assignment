function validateQuestionOne() {
  const productTypeRadios = document.querySelectorAll('input[name="productType"]');
  for (const radio of productTypeRadios) {
    if (radio.checked) {
      showQuestion(2);
      return;
    }
  }
  document.getElementById("errorQuestion1").textContent = "Please select a product type.";
}

function validateQuestionTwo() {
  const creditLimit = parseInt(document.querySelector('input[name="creditLimit"]').value);
  if (isNaN(creditLimit) || creditLimit < 1000 || creditLimit > 10000) {
    document.getElementById("errorQuestion2").textContent = "Please enter a valid credit limit between 1000 and 10000.";
    return;
  }
  showQuestion(3);
}

function validateQuestionThree() {
  const loanTerm = parseInt(document.querySelector('select[name="loanTerm"]').value);
  if (isNaN(loanTerm) || loanTerm < 1 || loanTerm > 10) {
    document.getElementById("errorQuestion3").textContent = "Please choose a valid loan term between 1 and 10.";
    return;
  }
  showQuestion(4);
}

function validateQuestionFour() {
  const featureCheckboxes = document.querySelectorAll('input[name="loanPurpose"]');
  for (const checkbox of featureCheckboxes) {
    if (checkbox.checked) {
      document.getElementById("errorQuestion4").textContent = "";
      showQuestion(5);
      return;
    }
  }
  document.getElementById("errorQuestion4").textContent = "Please select at least one loan purpose.";
}

function validateQuestionFive() {
  const comments = document.querySelector('textarea[name="comments"]').value;
  if (comments.trim() === "") {
    document.getElementById("errorQuestion5").textContent = "Please provide comments.";
    return;
  }
  if (comments.length > 200) {
    document.getElementById("errorQuestion5").textContent = "Comments should not exceed 200 characters.";
    return;
  }
  document.getElementById("errorQuestion5").textContent = "";
  
  showSummary();
}