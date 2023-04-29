// get selected type of days
export function getSelectedTypeOfDays() {
  const radioContainer = document.getElementById('dayTypesOptions');
  const selectedRadio = radioContainer.querySelector('input[name="filterdayTypes"]:checked');
  return selectedRadio.id;
}

// calculate days by types
export function calculateDateDiff(startDate, endDate, selectedRadio1Value) {
  const timeDiff = endDate.getTime() - startDate.getTime();
  
  if (selectedRadio1Value === 'allDays') {
    const totalDays = Math.ceil(1 + (timeDiff / (1000 * 60 * 60 * 24)));
    return totalDays;
  }

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

  if (selectedRadio1Value === 'weekends') {
    return weekends;
  } else if (selectedRadio1Value === 'workingDays') {
    return workingDays;
  } 
}