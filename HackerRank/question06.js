// Nth prime number

function nth_prime(n) {
  let count = 0;
  let num = 2;
  
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
        }
    }
        return num > 1;
  }

  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}