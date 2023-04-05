import { setTodayDate, weekPreset, monthPreset } from './presets.js';
import { buttonsDisabling } from './buttonsDisabling.js';
import { getSelectedTypeOfTime, timeConverter } from './calculateByTimeType.js'
import { getSelectedTypeOfDays, typeOfDaysForMessage, calculateDateDiff } from './typeOfDays.js';

const startApp = () => {

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const todayDateBtn = document.getElementById('today-btn');
const presetWeekBtn = document.getElementById('preset-week-btn');
const presetMonthBtn = document.getElementById('preset-month-btn');
const calculateBtn = document.getElementById("calculate-btn");
const tableBody = document.querySelector("#results-table tbody");

// Remove disabling for second date picker and presents buttons
startDateInput.addEventListener('change', () => {
  buttonsDisabling(startDateInput, endDateInput, presetWeekBtn, presetMonthBtn);
});

// Set today date and remove disabling for second date picker and presents buttons
todayDateBtn.addEventListener('click', () =>{
  setTodayDate(startDateInput)
  buttonsDisabling(startDateInput, endDateInput, presetWeekBtn, presetMonthBtn)
}) 

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

  // Calculate difference by day types
  const numDays = calculateDateDiff(startDate, endDate, getSelectedTypeOfDays());

  // Converting to time type
  const numOfTime = timeConverter(numDays, getSelectedTypeOfTime())
  
  // Update the table with the result
  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = startDate.toLocaleDateString();
  cell2.innerHTML = endDate.toLocaleDateString();
  cell3.innerHTML = `${numOfTime} ${getSelectedTypeOfTime()} in ${numDays} ${typeOfDaysForMessage(getSelectedTypeOfDays())}`;
}

calculateBtn.addEventListener("click", calculateDateDifference);
};

document.addEventListener('DOMContentLoaded', startApp);

