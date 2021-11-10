// calc the difference between the square of the sum and the sum of the squares;

function sum_square_difference(n) {
  function squareOfSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum * sum;
  }

  function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i * i;
    }
    return sum;
  }
  
  return squareOfSum(n) - sumOfSquares(n);
}