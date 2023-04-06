// Function that remove disabling for preset buttons and second date picker

export function buttonsDisabling(startDateInput, endDateInput, presetWeekBtn, presetMonthBtn) {
    if (startDateInput.value) {
      endDateInput.removeAttribute('disabled');
      presetWeekBtn.removeAttribute('disabled');
      presetMonthBtn.removeAttribute('disabled');
    } else {
      endDateInput.setAttribute('disabled', true);
      presetWeekBtn.setAttribute('disabled', true);
      presetMonthBtn.setAttribute('disabled', true);
    }
}

export function radioBtnsDisabling(endDateInput, radioBtns) {
  if (endDateInput.value) {
    for (let i = 0; i < radioBtns.length; i++) {
      radioBtns[i].removeAttribute('disabled');
    }
  } else {
    for (let i = 0; i < radioBtns.length; i++) {
      radioBtns[i].setAttribute('disabled', 'true');
    }
  }
}


// Function that remove disabling for calculate button

export function calculateButtonDisabling(endDateInput, calculateBtn) {
  if (endDateInput.value) {
    calculateBtn.removeAttribute('disabled');
  } else {
    calculateBtn.setAttribute('disabled', true);
  }
}
  