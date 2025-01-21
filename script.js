const contractDateInput = document.getElementById("contract-date");
const incidentDateInput = document.getElementById("incident-date");
const submitButton = document.getElementById("submit-button");

const oneDayInMilliseconds = 86400000;
const oneYearInMilliseconds = 31557600000;

let contractDate;
let incidentDate;

submitButton.addEventListener("click", () => {
  contractDate = new Date(contractDateInput.value);
  incidentDate = new Date(incidentDateInput.value);

  if (incidentDate < new Date(contractDate.getTime() + oneDayInMilliseconds) || incidentDate > new Date(contractDate.getTime() + oneYearInMilliseconds)) {
    console.log("Срок полиса истек или не вступил в силу, проверьте правильность заполнения даты");
  } else {
    console.log("Страховой случай проверен");
  }
});
