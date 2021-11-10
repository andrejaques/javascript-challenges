// the biggest palindrome product of two 2-digit numbers is 9009 = 91 × 99.
// found the biggest palindrome product of two n digits numbers

function isPalindrome(n) {
  let str = n.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

function largestPalindromeProduct(n) {
  let max = Math.pow(10, n) - 1;
  let min = Math.pow(10, n - 1);
  let largest = 0;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      let product = i * j;
      if (product > largest && isPalindrome(product)) {
        largest = product;
      }
    }
  }
  return largest;
};

console.log(largestPalindromeProduct(2));