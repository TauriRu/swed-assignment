function showSummary() {
 
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => (errorMessage.textContent = ""));
  
  const productType = document.querySelector(
    'input[name="productType"]:checked'
  ).value;
  const creditLimit = parseFloat(
    document.querySelector('input[name="creditLimit"]').value
  );
  const loanTerm = parseFloat(
    document.querySelector('select[name="loanTerm"]').value
  );
  const interestRate = 0.05; // Hard-coded interest rate of 5%
  const loanPurpose = [
    ...document.querySelectorAll('input[name="loanPurpose"]:checked'),
  ]
    .map((input) => input.value)
    .join(", ");
  const comments = document.querySelector('textarea[name="comments"]').value;

  // Calculate the monthly payment using the provided credit limit, loan term, and interest rate
  const monthlyPayment = calculateMonthlyPayment(
    creditLimit,
    loanTerm,
    interestRate
  );

  // Display the summary information
  document.getElementById("summaryProductType").textContent = productType;
  document.getElementById("summaryCreditLimit").textContent = creditLimit;
  document.getElementById("summaryLoanTerm").textContent = loanTerm;
  document.getElementById("summaryInterestRate").textContent =
    interestRate + "%";
  document.getElementById("summaryMonthlyPayment").textContent =
    "€" + monthlyPayment;
  document.getElementById("summaryProductFeatures").textContent = loanPurpose;
  document.getElementById("summaryComments").textContent = comments;

  document.getElementById("questions").style.display = "none";
  document.getElementById("summary").style.display = "block";
}

// refresh page if clicked on logo
function clearURL() {
  // Clear the query parameters from the URL
  history.replaceState({}, document.title, window.location.pathname);
}

function refreshPage() {
  clearURL(); // Clear the URL first
  document.location.reload(); // Reload the page
}
