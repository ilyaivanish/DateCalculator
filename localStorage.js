export function loadTableResultsFromLocalStorage(tableBody) {

  // Load data from local storage
  const results = JSON.parse(localStorage.getItem('tableData'));

  // Check if we have some data in storage 
  if (!results) return;

  results.forEach(result => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = result.startDate;
    cell2.innerHTML = result.endDate;
    cell3.innerHTML = result.result;
  });
}
  
export function saveTableResultsToLocalStorage() {
    // Get the table element
    const table = document.getElementById('results-table');
  
    // Get the table rows
    const rows = table.getElementsByTagName('tr');
  
    // Initialize an empty array to store the table data
    const tableData = [];
  
    // Loop through the table rows (skip the header row)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
  
      // Get the cell values for the current row
      const startDate = row.cells[0].innerText;
      const endDate = row.cells[1].innerText;
      const result = row.cells[2].innerText;
  
      // Create an object to represent the table row
      const rowData = { startDate, endDate, result };
  
      // Add the row data to the table data array
      tableData.push(rowData);
    }
  
    // Convert the table data to a JSON string
    const tableDataJson = JSON.stringify(tableData);
  
    // Save the JSON string to localStorage
    localStorage.setItem('tableData', tableDataJson);
}  

