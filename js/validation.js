function validateQuestionOne() {
  const productTypeRadios = document.querySelectorAll(
    'input[name="productType"]'
  );
  for (const radio of productTypeRadios) {
    if (radio.checked) {
      return true;
    }
  }
  alert("Please select a product type.");
  return false;
}

function validateQuestionTwo() {
  const creditLimit = parseInt(
    document.querySelector('input[name="creditLimit"]').value
  );
  if (isNaN(creditLimit) || creditLimit < 1000 || creditLimit > 10000) {
    alert("Please enter a valid credit limit between 1000 and 10000.");
    return false;
  }
  return true;
}

function validateQuestionThree() {
  const loanTerm = parseInt(
    document.querySelector('input[name="loanTerm"]').value
  );
  if (isNaN(loanTerm) || loanTerm < 1 || loanTerm > 10) {
    alert("Please choose a valid loan term between 1 and 10.");
    return false;
  }
  return true;
}

function validateQuestionFour() {
  const featureCheckboxes = document.querySelectorAll('input[name="features"]');
  for (const checkbox of featureCheckboxes) {
    if (checkbox.checked) {
      return true;
    }
  }
  alert("Please select at least one product feature.");
  return false;
}

function validateQuestionFive() {
  const comments = document.querySelector('textarea[name="comments"]').value;
  if (comments.length > 200) {
    alert("Please limit your comments to a maximum of 200 characters.");
    return false;
  }
  return true;
}
