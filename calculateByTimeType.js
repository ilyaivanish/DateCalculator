// check what label selected
export function getSelectedTypeOfTime() {
    const radioContainer = document.getElementById('countOptions');
    const selectedRadio = radioContainer.querySelector('input[name="filter"]:checked');
  return selectedRadio.id;
}

// const selectedRadioValue = getSelectedRadioValue();

// Calculate days, hours, minutes or seconds
export function timeConverter(timeDiff, selectedRadio2Value) {
  
  let result = null;

  if (selectedRadio2Value === 'days') {
    result = timeDiff;
  } else if (selectedRadio2Value === 'hours') {
    result = Math.floor(timeDiff * 24);
  } else if (selectedRadio2Value === 'minutes') {
    result = Math.floor(timeDiff * (24 * 60));
  } else if (selectedRadio2Value === 'seconds') {
    result = Math.floor(timeDiff * (24 * 60 * 60));
  }

  return result;
}
