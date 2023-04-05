import { weekPreset, monthPreset } from './presets.js';
import { buttonsDisabling } from './buttonsDisabling.js';
import { calculateTimeDiff, getSelectedRadioValue } from './calculateByTimeType.js'

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
  // const timeDiff = endDate.getTime() - startDate.getTime();
  // console.log(timeDiff)

  function getSelected1RadioValue() {
    const radioContainer = document.getElementById('dayTypesOptions');
    const selectedRadio = radioContainer.querySelector('input[name="filterdayTypes"]:checked');
    return selectedRadio.id;
  }
  console.log(getSelected1RadioValue())

function calculateDateDiff(startDate, endDate, selection) {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const totalDays = Math.ceil(1 + (timeDiff / (1000 * 60 * 60 * 24)));
  let workingDays = 0;
  let weekends = 0;
  
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      weekends++;
    } else {
      workingDays++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }


  if (selection === 'allDays') {
    return totalDays;
  } else if (selection === 'weekends') {
    return weekends;
  } else if (selection === 'workingDays') {
    return workingDays;
  } 
  console.log(totalDays, weekends)
  // console.log(totalDays, workingDays, weekends)
  // return { totalDays, workingDays, weekends };
}
  
const numDays = calculateDateDiff(startDate, endDate, getSelected1RadioValue());
console.log(numDays)


  // Calculate the number of days, minutes,seconds
  // const numDays = calculateDateDiff(timeDiff, getSelectedRadioValue());
  console.log(numDays, getSelectedRadioValue())

  // Update the table with the result
  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = startDate.toLocaleDateString();
  cell2.innerHTML = endDate.toLocaleDateString();
  cell3.innerHTML = `${numDays} ${getSelectedRadioValue()}`;
}

calculateBtn.addEventListener("click", calculateDateDifference);
};

document.addEventListener('DOMContentLoaded', startApp);

