import { weekPreset, monthPreset } from './presets.js';
import { buttonsDisabling } from './buttonsDisabling.js';
import { calculateTimeDiff } from './calculateByTimeType.js'

const startApp = () => {

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

const presetWeekBtn = document.getElementById('preset-week-btn');
const presetMonthBtn = document.getElementById('preset-month-btn');

const calculateBtn = document.getElementById("calculate-btn");

const tableBody = document.querySelector("#results-table tbody");

// Remove disabling for second date picker and presents buttons
startDateInput.addEventListener('change', () => {
  buttonsDisabling(startDateInput, endDateInput, presetWeekBtn, presetMonthBtn);
});


// Calculating for presets
presetWeekBtn.addEventListener('click', () => {
  weekPreset(startDateInput, endDateInput);
});

presetMonthBtn.addEventListener('click', () => {
  monthPreset(startDateInput, endDateInput);
});

// Set the minimum date for the end date input field to be the same as the start date
startDateInput.addEventListener("change", function() {
  endDateInput.setAttribute("min", startDateInput.value);
});

function calculateDateDifference() {
  // Get the input values
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  // Calculate the time difference in milliseconds
  const timeDiff = endDate.getTime() - startDate.getTime();
  console.log(timeDiff)

  // check what label selected
  function getSelectedRadioValue() {
    const radioContainer = document.getElementById('countOptions');
    const selectedRadio = radioContainer.querySelector('input[name="filter"]:checked');
    return selectedRadio.id;
  }
  const selectedRadioValue = getSelectedRadioValue();
  console.log(getSelectedRadioValue())
  
  
  // Calculate the number of days
  const numDays = calculateTimeDiff(timeDiff, selectedRadioValue);
  console.log(numDays, selectedRadioValue)

  // Update the table with the result
  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = startDate.toLocaleDateString();
  cell2.innerHTML = endDate.toLocaleDateString();
  cell3.innerHTML = `${numDays} ${selectedRadioValue}`;
}

calculateBtn.addEventListener("click", calculateDateDifference);
};

document.addEventListener('DOMContentLoaded', startApp);
