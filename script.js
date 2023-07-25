function showSummary() {
  const productType = document.querySelector(
    'input[name="productType"]:checked'
  ).value;
  const creditLimit = document.querySelector('input[name="creditLimit"]').value;
  const loanTerm = document.querySelector(
    'input[name="loanTerm"]'
  ).value;
  const features = [
    ...document.querySelectorAll('input[name="features"]:checked'),
  ]
    .map((input) => input.value)
    .join(", ");
  const comments = document.querySelector('textarea[name="comments"]').value;

  document.getElementById("summaryProductType").textContent = productType;
  document.getElementById("summaryCreditLimit").textContent = creditLimit;
  document.getElementById("summaryProductPurpose").textContent = loanTerm;
  document.getElementById("summaryProductFeatures").textContent = features;
  document.getElementById("summaryComments").textContent = comments;

  document.getElementById("questions").style.display = "none";
  document.getElementById("summary").style.display = "block";
}
