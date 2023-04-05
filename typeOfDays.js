// get selected type of days
export function getSelectedTypeOfDays() {
  const radioContainer = document.getElementById('dayTypesOptions');
  const selectedRadio = radioContainer.querySelector('input[name="filterdayTypes"]:checked');
  return selectedRadio.id;
}

// Set type of days in the end of message in table
export function typeOfDaysForMessage(selectedRadio1Value) {
if (selectedRadio1Value === 'allDays') {
  return 'days';
} else if (selectedRadio1Value === 'weekends') {
  return 'weekends';
} else if (selectedRadio1Value === 'workingDays') {
  return 'working days';
} }


// calculate days by types
export function calculateDateDiff(startDate, endDate, selectedRadio1Value) {
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

  if (selectedRadio1Value === 'allDays') {
    return totalDays;
  } else if (selectedRadio1Value === 'weekends') {
    return weekends;
  } else if (selectedRadio1Value === 'workingDays') {
    return workingDays;
  } 
}