const contractDateInput = document.getElementById("contract-date");
const incidentDateInput = document.getElementById("incident-date");
const submitButton = document.getElementById("submit-button");

contractDateInput.addEventListener("change", () => {
  const contractDate = new Date(contractDateInput.value);

  // Установить минимальную допустимую дату для даты страхового случая
  const minIncidentDate = new Date(contractDate);
  incidentDateInput.min = minIncidentDate.toISOString().slice(0, 10);

  // Установить максимальную допустимую дату для даты страхового случая (один год после даты договора)
  const maxIncidentDate = new Date(contractDate);
  maxIncidentDate.setFullYear(maxIncidentDate.getFullYear() + 1);
  incidentDateInput.max = maxIncidentDate.toISOString().slice(0, 10);
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Отменить отправку формы по умолчанию

  const incidentDate = new Date(incidentDateInput.value);
  const contractDate = new Date(contractDateInput.value);

  // Проверить, соблюдены ли временные сроки
  if (incidentDate < contractDate || incidentDate > maxIncidentDate) {
    alert("Срок полиса истек или не вступил в силу, проверьте правильность заполнения даты");
  } else {
    // Выполнить действия по отправке формы (например, отправить данные на сервер)
    alert("Форма отправлена");
  }
});

