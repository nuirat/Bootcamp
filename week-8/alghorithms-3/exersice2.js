function allUniqueChars(str) {
  let chars = new Set();
  let arrayOfChars = str.split("");
  for (let i = 0; i < arrayOfChars.length; i++) {
    if (chars.has(arrayOfChars[i])) {
      return false;
    } else chars.add(arrayOfChars[i]);
  }
  return true;
}
console.log(allUniqueChars("cat"));
