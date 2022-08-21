function charsToLength(str) {
  let chars = str.split("");
  let length = 1;
  let stringWithCount = "";
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i - 1]) {
      length++;
    } else if (i == 0) {
      stringWithCount += chars[i];
    } else {
      stringWithCount += length;
      stringWithCount += chars[i];
      length = 1;
    }
  }
  stringWithCount += length;
  return stringWithCount;
}


console.log(charsToLength("aabaaaa"));
