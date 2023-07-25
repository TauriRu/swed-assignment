function showQuestion(questionNumber) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById("question" + i).style.display =
      i === questionNumber ? "block" : "none";
  }

  // hide the intro if button is clicked
  if (questionNumber === 1) {
    const intro = document.getElementById("intro");
    intro.style.display = "none";
  }
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

  // For Question 3 (loanTerm slider)
  if (questionNumber === 3) {
    document.addEventListener("DOMContentLoaded", function () {
      const loanTermSlider = document.querySelector('select[name="loanTerm"]');
      const loanTermOutput = document.querySelector('output[for="loanTerm"]');
      loanTermOutput.textContent = loanTermSlider.value;
      loanTermSlider.addEventListener("change", () => {
        loanTermOutput.textContent = loanTermSlider.value;
      });
    });
  }
}
