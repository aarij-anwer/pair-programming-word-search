//collaboration by Aarij Anwer, Michael G and Erkan E. S.

const transpose = function(matrix) {
  // Put your solution here
  let answer = [];

  for (let i = 0; i < matrix[0].length; i++) {
    answer[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      answer[i].push(matrix[j][i]);
    }
  }
  return answer;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = transpose;

/*
printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));*/
