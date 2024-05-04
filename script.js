document.addEventListener("DOMContentLoaded", function() {
  const generateButton = document.getElementById('generateGraph');
  const inputNumberField = document.getElementById('inputNumber');
  const errorMessage = document.getElementById('errorMessage');

  generateButton.addEventListener('click', function() {
    const graphContainer = document.querySelector('.graph-container');
    const inputNumber = inputNumberField.value.replace(/\D/g,''); // Remove non-digit characters
    const digits = inputNumber.toString().split('').map(Number);
    const percentages = [];

    // Validate input
    if (digits.length === 0 || digits.length > 10) {
      errorMessage.textContent = "Please enter 10 mobile numbers.";
      return;
    }

    // Calculate percentages for each digit pair
    for (let i = 0; i < digits.length - 1; i += 2) {
      const percentage = parseInt(`${digits[i]}${digits[i + 1]}`, 10);
      percentages.push(percentage);
    }

    // Remove error message
    errorMessage.textContent = "";

    // Remove existing bars and labels
    while (graphContainer.firstChild) {
      graphContainer.removeChild(graphContainer.firstChild);
    }

    // Add new bars and labels with animation
    percentages.forEach((percentage, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar', 'bg-primary', 'position-relative');
      bar.classList.add()
      bar.style.height = '0'; // Start with height 0 for animation
      setTimeout(() => {
        bar.style.height = `${percentage}%`; // Set the height after a delay for animation
      }, index * 100); // Delay increases with each bar
      const label = document.createElement('div');
      label.classList.add('percentage-label','position-absolute');
      label.textContent = `${percentage}%`;

      bar.appendChild(label);
      graphContainer.appendChild(bar);
    });
  });
});
