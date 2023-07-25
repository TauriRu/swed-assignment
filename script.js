function showSummary() {
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
  const features = [
    ...document.querySelectorAll('input[name="features"]:checked'),
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
  document.getElementById("summaryProductFeatures").textContent = features;
  document.getElementById("summaryComments").textContent = comments;

  document.getElementById("questions").style.display = "none";
  document.getElementById("summary").style.display = "block";
}
// refresh page if clicked on logo
function refreshPage() {
  window.location.reload();
}
