import { setTodayDate, weekPreset, monthPreset } from './presets.js';
import { secondDateButtonsEnabling, calculateButtonEnabling, radioBtnsEnabling } from './buttonsEnabling.js';
import { getSelectedTypeOfTime, timeConverter } from './calculateByTimeType.js'
import { getSelectedTypeOfDays, typeOfDaysForMessage, calculateDateDiff } from './typeOfDays.js';
import { saveTableResultsToLocalStorage, loadTableResultsFromLocalStorage, enableDeleteButton, deleteSavedData } from './localStorage.js';

const startApp = () => {

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const todayDateBtn = document.getElementById('today-btn');
const presetWeekBtn = document.getElementById('preset-week-btn');
const presetMonthBtn = document.getElementById('preset-month-btn');
const radioBtns = document.getElementsByClassName('radio-buttons');
const calculateBtn = document.getElementById("calculate-btn");
const table = document.getElementById('results-table');
const tableBody = table.querySelector('tbody');
const deleteBtn = document.getElementById('delete-data-btn');

loadTableResultsFromLocalStorage()
enableDeleteButton(table, deleteBtn)

// Set the minimum date for the end date input field to be the same as the start date
startDateInput.addEventListener('change', function() {
  endDateInput.setAttribute('min', startDateInput.value);
});

// Set today date and remove disabling for second date picker and presents buttons
todayDateBtn.addEventListener('click', () =>{
  setTodayDate(startDateInput);
  secondDateButtonsEnabling(startDateInput, endDateInput, presetWeekBtn, presetMonthBtn);
  endDateInput.setAttribute('min', startDateInput.value);
}) 

// Remove disabling for second date picker and presents buttons
startDateInput.addEventListener('change', () => {
  secondDateButtonsEnabling(startDateInput, endDateInput, presetWeekBtn, presetMonthBtn);
});

// Calculating for presets and remove disabling for calculate button
presetWeekBtn.addEventListener('click', () => {
  weekPreset(startDateInput, endDateInput);
  calculateButtonEnabling(endDateInput, calculateBtn);
  radioBtnsEnabling(endDateInput, radioBtns)
});

presetMonthBtn.addEventListener('click', () => {
  monthPreset(startDateInput, endDateInput);
  calculateButtonEnabling(endDateInput, calculateBtn);
  radioBtnsEnabling(endDateInput, radioBtns)
});

// Remove disabling for calculate button if second date picker recieved date
endDateInput.addEventListener('change', () => {
  calculateButtonEnabling(endDateInput, calculateBtn);
  radioBtnsEnabling(endDateInput, radioBtns)
})

function calculateDateDifference() {
  // Get the input values
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  // Calculate difference by day types
  const countOfDays = calculateDateDiff(startDate, endDate, getSelectedTypeOfDays());

  // Converting to time type
  const countOfTime = timeConverter(countOfDays, getSelectedTypeOfTime())
  
  // Remove the last row if table already have 10
  if (tableBody.rows.length >= 10) {
    tableBody.deleteRow(-1);
  }

  // Update the table with the result
  const row = tableBody.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = startDate.toLocaleDateString();
  cell2.innerHTML = endDate.toLocaleDateString();

  // If we select Day for time type we change message for easy understanding
  if (getSelectedTypeOfTime() === 'days') {
    cell3.innerHTML = `${countOfDays} ${typeOfDaysForMessage(getSelectedTypeOfDays())}`;
  } else {
    cell3.innerHTML = `In ${countOfDays} ${typeOfDaysForMessage(getSelectedTypeOfDays())} ${countOfTime} ${getSelectedTypeOfTime()}`;
  }

}

calculateBtn.addEventListener('click', calculateDateDifference);
calculateBtn.addEventListener('click', saveTableResultsToLocalStorage);
calculateBtn.addEventListener('click', () => {
  deleteBtn.style.display = 'block';
});
deleteBtn.addEventListener('click', deleteSavedData);
};


document.addEventListener('DOMContentLoaded', startApp);

