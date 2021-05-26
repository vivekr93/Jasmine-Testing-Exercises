window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      updateMonthlyPayment();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = 0;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = 0;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = 0;
  updateMonthlyPayment();
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function monthlyFormula(values) {
  const monthlyRate = (values.rate *0.01) / 12;
  const n = values.years * 12
  const result = ((values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))).toFixed(2);
  return result;
}

// Get the current values from the UI
// Update the monthly payment
function updateMonthlyPayment() {
  const currentValues = getCurrentUIValues();
  showUpdatedMonthly(monthlyFormula(currentValues));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function showUpdatedMonthly(monthly) {
  const monthlyPaymentDisplayed = document.querySelector('#monthly-payment')
  monthlyPaymentDisplayed.innerText = "$" + monthly
}
