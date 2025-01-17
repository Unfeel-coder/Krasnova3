const form = document.getElementById('form');
const results = document.getElementById('results');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Рассчитать сумму страхования
  const coefficients = document.querySelectorAll('#coefficients ul li');
  const remainingMortgageSum = data.remainingMortgageSum;
  const mortgageCreditSum = data.mortgageCreditSum;
  let remainingMortgageSumCoefficient = 0;
  let termRepaymentCoefficient = 0;

  // Определить коэффициент для оставшейся суммы кредита
  if (remainingMortgageSum <= 1000000) {
    remainingMortgageSumCoefficient = 0.9;
  } else if (remainingMortgageSum <= 2000000) {
    remainingMortgageSumCoefficient = 1;
  } else if (remainingMortgageSum <= 4000000) {
