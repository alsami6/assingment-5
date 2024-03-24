function seat(){
    showElementById("pay-t");
}

// Get all buttons
var buttons = document.querySelectorAll('button');

// Add click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the value of the clicked button
    var value = button.textContent;
    
    // Get the output div
    var outputDiv = document.getElementById('output');
    
    // Create a new span element for the value
    var valueSpan = document.createElement('span');
    valueSpan.textContent = value;
    
    // Create a delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      // Remove the value span and delete button when clicked
      valueSpan.remove();
      deleteButton.remove();
    });
    
    // Append the value span and delete button to the output div
    outputDiv.appendChild(valueSpan);
    outputDiv.appendChild(deleteButton);
  });
});