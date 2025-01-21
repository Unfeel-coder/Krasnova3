const contractDateInput = document.getElementById("contract-date");
const incidentDateInput = document.getElementById("incident-date");
const submitButton = document.getElementById("submit-button");

contractDateInput.addEventListener("change", () => {
  const contractDate = new Date(contractDateInput.value);

  // Установить минимальную допустимую дату для даты страхового случая
  const minIncidentDate = new Date(contractDate);
  incidentDateInput.min = minIncidentDate.toISOString().slice(0, 10);

  // Установить максимальную допустимую дату для даты страхового случая (один год после даты договора)
const contractDateInput = document.getElementById("contract-date");
const incidentDateInput = document.getElementById("incident-date");
const submitButton = document.getElementById("submit-button");

const oneDayInMilliseconds = 86400000;
const oneYearInMilliseconds = 31557600000;

submitButton.addEventListener("click", () => {
  const contractDate = new Date(contractDateInput.value);
  const incidentDate = new Date(incidentDateInput.value);

  if (incidentDate < new Date(contractDate.getTime() + oneDayInMilliseconds) || incidentDate > new Date(contractDate.getTime() + oneYearInMilliseconds)) {
    console.log("Срок полиса истек или не вступил в силу, проверьте правильность заполнения даты");
  } else {
    console.log("Страховой случай проверен");
  }
});



