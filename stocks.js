function addStock(stockId) {
  const inputElement = document.getElementById(stockId);
  const inputValue = parseInt(inputElement.value);
  if (!isNaN(inputValue) && inputValue > 0) {
      let currentStock = parseInt(localStorage.getItem(stockId)) || 0;
      currentStock += inputValue;
      localStorage.setItem(stockId, currentStock);
      alert(`Added ${inputValue} to ${stockId}. Current stock: ${currentStock}`);
      inputElement.value = ''; // Clear input field
  } else {
      alert('Please enter a valid positive number');
  }
}

function goBack() {
  window.location.href = 'index.html'; // Replace with your main HTML file name
}

window.onload = function() {
  document.getElementById('stock1').value = '';
  document.getElementById('stock2').value = '';
  document.getElementById('stock3').value = '';
  document.getElementById('stock4').value = '';
  document.getElementById('stock5').value = '';
  document.getElementById('stock6').value = '';
  document.getElementById('stock7').value = '';
  document.getElementById('stock8').value = '';
  document.getElementById('stock9').value = '';
  document.getElementById('stock10').value = '';
  document.getElementById('stock11').value = '';
  document.getElementById('stock12').value = '';
  document.getElementById('stock13').value = '';
  document.getElementById('stock14').value = '';
  document.getElementById('stock15').value = '';
  document.getElementById('stock16').value = '';
  document.getElementById('stock17').value = '';
  document.getElementById('stock18').value = '';
  document.getElementById('stock19').value = '';
  document.getElementById('stock20').value = '';
};
