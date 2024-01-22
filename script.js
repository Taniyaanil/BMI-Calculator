function appendToInput(value, inputId) {
    var activeInput = document.getElementById(inputId);
    activeInput.value += value;
  }
  
  function clearInput(inputId) {
    var activeInput = document.getElementById(inputId);
    var currentValue = activeInput.value;
  
    if (currentValue.length > 0) {
      activeInput.value = currentValue.slice(0, -1);
    }
  }
  
  function clearAllInputs() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
  }
  
  function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Please enter both height and weight values.');
      return;
    }
  
    var bmi = weight / Math.pow(height / 100, 2);
    var bmiCategory = getBMICategory(bmi);
  
    displayResult(`Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`);
    
    updateChart(bmiCategory);
  }
  
  function displayResult(message) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${message}</p>`;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }
  
  function updateChart(bmiCategory) {
    
  }
  