function getHighestScore(str) {
  let arrayOfWords = str.split(" ");
  let score = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    let sum = 0;

    for (let j = 0; j < arrayOfWords[i].length; j++) {
      sum += arrayOfWords[i][j].charCodeAt(0) - 97;
    }
    score[i] = sum;
    sum = 0;
  }
  let max = score[0];
  whereMax = 0;
  for (let i = 0; i < score.length; i++) {
    if (score[i] > max) {
      max = score[i];
      whereMax = i;
    }
  }
  return arrayOfWords[whereMax];
}
console.log(getHighestScore("im the winner"));
