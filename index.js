function convertTemperature() {
  const tempInput = document.getElementById('tempInput').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (fromUnit === toUnit) {
    document.getElementById('result').textContent =
      'Result: ' + tempInput + ' ' + toUnit;
    return;
  }

  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    const result = (tempInput * 9) / 5 + 32;
    document.getElementById('result').textContent =
      'Result: ' + result.toFixed(2) + ' ' + toUnit;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    const result = ((tempInput - 32) * 5) / 9;
    document.getElementById('result').textContent =
      'Result: ' + result.toFixed(2) + ' ' + toUnit;
  }
}
