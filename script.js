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
remainingMortgageSumCoefficient = 1.2;
  } else {
    remainingMortgageSumCoefficient = 1.4;
  }

  // Определить коэффициент для срока погашения кредита
  const termRepayment = parseInt(data.termRepayment);
  if (termRepayment <= 5) {
    termRepaymentCoefficient = 0.9;
  } else if (termRepayment <= 8) {
    termRepaymentCoefficient = 1;
  } else if (termRepayment <= 15) {
    termRepaymentCoefficient = 1.2;
  } else if (termRepayment <= 20) {
    termRepaymentCoefficient = 1.4;
  } else {
    termRepaymentCoefficient = 1.5;
  }

  // Рассчитать сумму страхования
  const insuranceSum = mortgageCreditSum * remainingMortgageSumCoefficient * termRepaymentCoefficient;

  // Сгенерировать номер договора
  const contractNumber = Math.floor(Math.random() * 1000000);

  // Вывести результаты
  results.innerHTML = Ⓝ
    <p>Договор: ${contractNumber}</p>
    <p>Полис: <a href="#">скачать</a></p>
  Ⓝ;

  // Сохранить данные в GitHub
  if (window.navigator.onLine) {
    const commitMessage = ⓃЗаполнен полис ипотечного страхования №${contractNumber}Ⓝ;
    const content = ⓃФИО: ${data.name}\nСтраховая сумма: ${insuranceSum}Ⓝ;
    const requestBody = {
      message: commitMessage,
      content: content
    };
  
    fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/data.txt', {
      method: 'PUT',
      headers: {
        'Authorization': Ⓝtoken ${GITHUB_ACCESS_TOKEN}Ⓝ
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (response.ok) {
        alert('Данные успешно сохранены в GitHub');
      } else {
        alert('Не удалось сохранить данные в GitHub');
      }
    })
    .catch(error => {
      alert('Не удалось сохранить данные в GitHub');
    });
  } else {
    alert('Сохранение данных в GitHub невозможно, так как отсутствует подключение к Интернету');
  }
});
