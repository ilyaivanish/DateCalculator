export function updateTable(tableBody, startDate, endDate, countOfDays, getSelectedTypeOfDays, countOfTime, getSelectedTypeOfTime, typeOfDaysForMessage) {
    if (tableBody.rows.length >= 10) {
        tableBody.deleteRow(-1);
    }

    const row = tableBody.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = startDate.toLocaleDateString();
    cell2.innerHTML = endDate.toLocaleDateString();

    if (getSelectedTypeOfTime() === 'days') {
        cell3.innerHTML = `${countOfDays} ${typeOfDaysForMessage(getSelectedTypeOfDays())}`;
    } else {
        cell3.innerHTML = `In ${countOfDays} ${typeOfDaysForMessage(getSelectedTypeOfDays())} ${countOfTime} ${getSelectedTypeOfTime()}`;
    }
}
  