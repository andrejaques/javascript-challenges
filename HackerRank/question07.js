// Largest prime factor of a number;

function largest_prime_factor(number) {
  function isPrime(num) {
      for (let i = 2; i < num; i++) {
          if (num % i === 0) {
          return false;
          }
      }
      return num > 1;
  }
  
let largest = 0;
for (let i = 2; i < number; i++) {
  if (number % i === 0 && isPrime(i)) {
    largest = i;
  }
}
return largest;
}