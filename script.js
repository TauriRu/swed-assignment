function showQuestion(questionNumber) {
  document.getElementById("questions").style.display = "block";
  document.getElementById("summary").style.display = "none";

  for (let i = 1; i <= 5; i++) {
    document.getElementById("question" + i).style.display =
      i === questionNumber ? "block" : "none";
  }
}

function showSummary() {
  const productType = document.querySelector(
    'input[name="productType"]:checked'
  ).value;
  const creditLimit = document.querySelector('input[name="creditLimit"]').value;
  const productPurpose = document.querySelector(
    'select[name="productPurpose"]'
  ).value;
  const features = [
    ...document.querySelectorAll('input[name="features"]:checked'),
  ]
    .map((input) => input.value)
    .join(", ");
  const comments = document.querySelector('textarea[name="comments"]').value;

  document.getElementById("summaryProductType").textContent = productType;
  document.getElementById("summaryCreditLimit").textContent = creditLimit;
  document.getElementById("summaryProductPurpose").textContent = productPurpose;
  document.getElementById("summaryProductFeatures").textContent = features;
  document.getElementById("summaryComments").textContent = comments;

  document.getElementById("questions").style.display = "none";
  document.getElementById("summary").style.display = "block";
}

function showQuestion(questionNumber) {
  // Rest of the showQuestion function (unchanged)

  // For Question 2 (creditLimit slider)
  if (questionNumber === 2) {
    const creditLimitSlider = document.querySelector(
      'input[name="creditLimit"]'
    );
    const creditLimitOutput = document.querySelector(
      'output[for="creditLimit"]'
    );
    creditLimitOutput.textContent = creditLimitSlider.value;
    creditLimitSlider.addEventListener("input", () => {
      creditLimitOutput.textContent = creditLimitSlider.value;
    });
  }
}
