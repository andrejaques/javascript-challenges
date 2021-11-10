// Convert Fahrenheit to Celsius, fixed in 1 decimal place;

function fahrenheit_to_celsius(temp_fahrenheit) {
  const celsius = (temp_fahrenheit - 32) * 5 / 9;
  return Math.round(celsius).toFixed(1);
}