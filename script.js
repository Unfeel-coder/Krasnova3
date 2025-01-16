const form = document.getElementById('policy-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    passportNumber: formData.get('passport-number'),
    address: formData.get('address'),
    mortgageBalance: formData.get('mortgage-balance'),
    propertyType: formData.get('property-type'),
    gender: formData.get('gender'),
  };

  // Здесь можно сохранить данные в базу данных или отправить их на сервер

  alert('Данные сохранены');
});
