document.addEventListener('DOMContentLoaded', function() {
    const eidiForm = document.getElementById('eidiForm');
    const totalAmountSpan = document.getElementById('totalAmount');
    const sendButton = document.getElementById('sendButton');
    const resetButton = document.getElementById('resetButton');
  
    function calculateTotalAmount() {
      const selectedNotes = document.querySelectorAll('.notes input[type="checkbox"]:checked');
      let totalAmount = 0;
      selectedNotes.forEach(function(note) {
        totalAmount += parseInt(note.value);
      });
      totalAmountSpan.textContent = totalAmount;
    }
  
    eidiForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const yourName = document.getElementById('yourName').value;
      const receiverName = document.getElementById('receiverName').value;
      const totalAmount = parseInt(totalAmountSpan.textContent);
  
      if (yourName.trim() === '' || receiverName.trim() === '') {
        alert('Please enter both your name and receiver\'s name.');
        return;
      }
  
      if (totalAmount <= 0) {
        alert('Please select at least one currency note.');
        return;
      }
  
      alert(`Eidi of ${totalAmount} PKR sent successfully to ${receiverName}.`);
    });
  
    resetButton.addEventListener('click', function() {
      document.getElementById('yourName').value = '';
      document.getElementById('receiverName').value = '';
      totalAmountSpan.textContent = '0';
      const selectedNotes = document.querySelectorAll('.notes input[type="checkbox"]:checked');
      selectedNotes.forEach(function(note) {
        note.checked = false;
        note.closest('label').querySelector('img').classList.remove('selected-note');
      });
    });
  
    const checkboxes = document.querySelectorAll('.notes input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        calculateTotalAmount();
        if (this.checked) {
          this.closest('label').querySelector('img').classList.add('selected-note');
        } else {
          this.closest('label').querySelector('img').classList.remove('selected-note');
        }
      });
    });
  });
  