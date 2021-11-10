// Return a count_down function that takes a number as an argument and returns a string that counts down from that number to 0.

function count_down(x) {
  let result = "";
  for (let i = x; i > 0; i--) {
      result += i + "...";
  }
  return result + "0!!!";
};