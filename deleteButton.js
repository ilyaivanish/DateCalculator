// Enable Delete button if we load some rows from local storage
export function enableDeleteButton(table, deleteBtn) {
    if (table.getElementsByTagName('td').length > 0) {
      deleteBtn.style.display = 'block';
    } else {
      deleteBtn.style.display = 'none';
    }
  }
  
  // Remove the tableData from localStorage and disable delete button after confirmation
  export function deleteSavedData(table, deleteBtn) {
    const confirmed = confirm('Delete all saved dates calculations?');
  
    if (confirmed) {
      localStorage.removeItem('tableData');
  
      const rows = table.querySelectorAll('tbody tr');
  
      rows.forEach(function(row) {
        row.remove();
      });
      deleteBtn.style.display = 'none';
    }
  }