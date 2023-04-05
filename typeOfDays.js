// get selected type of days
export function getSelectedTypeOfDays() {
  const radioContainer = document.getElementById('dayTypesOptions');
  const selectedRadio = radioContainer.querySelector('input[name="filterdayTypes"]:checked');
  return selectedRadio.id;
}

export function calculateDateDiff(startDate, endDate, selection) {
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
}