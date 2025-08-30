const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let longest = "";
  for (let word of stringList) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Prueba la función
console.log(findLongestWord(avengers)); // "Captain A."
