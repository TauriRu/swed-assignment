function showQuestion(questionNumber) {
  const totalQuestions = 5;

  for (let i = 1; i <= totalQuestions; i++) {
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
    creditLimitOutput.textContent = creditLimitSlider.value + "€";
    creditLimitSlider.addEventListener("input", () => {
      creditLimitOutput.textContent = creditLimitSlider.value + "€";
    });
  }
}
