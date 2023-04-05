export function setTodayDate(startDateInput) {
    const today = new Date();
    startDateInput.value = today.toISOString().slice(0,10);
}
  

export function weekPreset(startDateInput, endDateInput) {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(startDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    endDateInput.value = endDate.toISOString().slice(0, 10);
}

export function monthPreset(startDateInput, endDateInput) {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(startDate.getTime() + (30 * 24 * 60 * 60 * 1000));
    endDateInput.value = endDate.toISOString().slice(0, 10);
}
  

