function calculateMonthlyPayment(creditLimit, loanTerm, interestRate) {
    const monthlyInterestRate = interestRate / 12; // Assuming interest rate is an annual percentage
    const numberOfPayments = loanTerm * 12; // Convert loan term to number of months
    const power = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthlyPayment = (creditLimit * monthlyInterestRate * power) / (power - 1);
    return monthlyPayment.toFixed(2); // Return the monthly payment rounded to two decimal places
  }