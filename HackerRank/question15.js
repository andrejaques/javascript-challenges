// calculate if a text is a polygram or not. In case it is polygram, return the radical of the polygram otherwise return "";
// example: "bbabab" is a polygram with radical "bba" because it is the concat of "bba" and "bab";

function isPolygram(word) {
  if (word.length % 2) return "";

  const half = word.slice(0, word.length / 2);
  
  if ([...half].every(w => w === half[0])) return "";
  
  return half;
}

console.log(isPolygram("bbabab"));