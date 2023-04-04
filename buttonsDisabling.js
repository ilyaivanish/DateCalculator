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
  