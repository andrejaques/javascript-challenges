// Calc the sum of even numbers below the roof that are fibonacci numbers;

function even_fibonacci_numbers(roof) {
  let sum = 0;
  let fibonacci = [1, 2];
  let i = 1;
  while ((fibonacci[i] + fibonacci[i - 1])  < roof) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    i++;
  }
  for (let j = 0; j < fibonacci.length; j++) {
    if (fibonacci[j] % 2 === 0) {
      sum += fibonacci[j];
    }
  }
  return sum;
};