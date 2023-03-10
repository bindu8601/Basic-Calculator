// Define variables
let input = document.getElementById('result');
let clear = false;

// Function to insert values into input field
function insert(val) {
  if (clear) {
    input.value = '';
    clear = false;
  }
  input.value += val;
}

// Function to clear input field
function clearInput() {
  input.value = '';
}

// Function to calculate result
function calculate() {
  let result = eval(input.value);
  input.value = result;
  clear = true;
}
