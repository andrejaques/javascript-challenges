// Return the sum of the multiples of 3 or 5 below the roof

function multiples_of_3_or_5(roof) {
  let sum = 0;
  for (let i = 0; i < roof; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
      }
  }
  return sum;
}