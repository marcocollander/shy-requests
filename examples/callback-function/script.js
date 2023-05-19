function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

function displayResult(result) {
  console.log('Wynik: ' + result);
}

// Wywołanie funkcji calculate z przekazaniem funkcji displayResult jako funkcji zwrotnej
calculate(5, 10, displayResult);
