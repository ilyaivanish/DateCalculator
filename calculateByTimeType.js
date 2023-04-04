// check what label selected
export function getSelectedRadioValue() {
    const radioContainer = document.getElementById('countOptions');
    const selectedRadio = radioContainer.querySelector('input[name="filter"]:checked');
return selectedRadio.id;
}

// Calculate days, hours, minutes or seconds
export function calculateTimeDiff(timeDiff, selectedRadioValue) {
  let result = null;

  if (selectedRadioValue === 'days') {
    result = Math.floor(timeDiff / (1000 * 3600 * 24));
  } else if (selectedRadioValue === 'hours') {
    result = Math.floor(timeDiff / (1000 * 3600));
  } else if (selectedRadioValue === 'minutes') {
    result = Math.floor(timeDiff / (1000 * 60));
  } else if (selectedRadioValue === 'seconds') {
    result = Math.floor(timeDiff / 1000);
  }

  return result;
}
