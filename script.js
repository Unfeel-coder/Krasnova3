const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Получение значений из формы
  const loanAmount = Number(document.getElementById('loan-amount').value);
  const propertyType = document.getElementById('property-type').value;
  const propertyCondition = document.getElementById('property-condition').value;
  const propertyAge = document.getElementById('property-age').value;
  const borrowerAge = Number(document.getElementById('borrower-age').value);
  const borrowerGender = document.getElementById('borrower-gender').value;

  // Определение коэффициентов
  let propertyTypeCoefficient = 1;
  if (propertyType === 'дом') {
    propertyTypeCoefficient = 1;
  }

  let propertyConditionCoefficient = 1;
  if (propertyCondition === 'новостройка') {
    propertyConditionCoefficient = 0.7;
  }

  let propertyAgeCoefficient = 1;
  if (propertyCondition === 'вторичный-фонд') {
    switch (propertyAge) {
      case '25-35':
        propertyAgeCoefficient = 1;
        break;
      case '36-50':
        propertyAgeCoefficient = 1.1;
        break;
      case '51+':
        propertyAgeCoefficient = 1.2;
        break;
    }
  }

  let borrowerAgeCoefficient = 1;
  if (borrowerAge >= 18 && borrowerAge <= 45) {
    borrowerAgeCoefficient = 0.7;
  } else if (borrowerAge >= 46 && borrowerAge <= 55) {
    borrowerAgeCoefficient = 1;
  } else if (borrowerAge >= 56 && borrowerAge <= 70) {
    borrowerAgeCoefficient = 1.1;
  } else if (borrowerAge >= 71) {
    borrowerAgeCoefficient = 1.2;
  }

  let borrowerGenderCoefficient = 1;
  if (borrowerGender === 'мужчина') {
    borrowerGenderCoefficient = 1.1;
  }

  // Расчет страховой премии
  const premium = 0.01 * propertyTypeCoefficient * propertyConditionCoefficient * propertyAgeCoefficient * borrowerAgeCoefficient * borrowerGenderCoefficient * loanAmount;

  // Вывод результата
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = ⓃСтраховая премия: ${premium.toFixed(2)} рублейⓃ;
});
