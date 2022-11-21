//Written by Anne-Marie Champoux and Aarij Anwer

//transpose function from last week
const transpose = require('./matrix_transposition'); 

//searchs 2D array `letters` individually to see if `word` exists, returns true if it does, false otherwise
const searchHorizontal = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};
  
//wordSearch function takes a 2D array `letters` and looks for `word` in it vertically and horizontally, returns true if word is found, false otherwise
const wordSearch = (letters, word) => {
  word = word.toUpperCase(); //ensure lowercase is not a problem
  let answer = searchHorizontal(letters, word); //search horizontally
  if (!answer) {
    //if not found horizontally, transpose the matrix and search horizontally again (vertically in effect)
    let vertical = transpose(letters);
    answer = searchHorizontal(vertical, word);
  }
  return answer;
};
  
module.exports = wordSearch;
