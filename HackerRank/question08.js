// process entries that the n numbers are presented and sum the valid numbers. 
// If the number is 0, remove the last number from the array.

function caixa(values) {
  let result = [];

  for (let i = 0 ; i < values.length; i++) {
    if (values[i] !== 0) {
      result.push(values[i]);
    } else {
      result.pop();
    }
  }
  return result.reduce(((a, b) => a + b), 0);
}