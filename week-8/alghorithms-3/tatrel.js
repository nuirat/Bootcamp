function getNumber(arrayOfNumbers) {
  arrayOfNumbers = checkValidation(arrayOfNumbers);
  let defaultNumber = -1;
  let sum = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > sum) return arrayOfNumbers[i];
    else sum += arrayOfNumbers[i];
  }
  return defaultNumber;
}
function checkValidation(arrayOfNumbers) {
  return arrayOfNumbers.filter((number) => typeof number == "number");
}
console.log(getNumber([1, 2, 3, 4, 5])); //=>2
console.log(getNumber([1, 1, 3, 4, 5])); //=>3
console.log(getNumber([1, 1, 1, 1, 5])); //=>5
console.log(getNumber([])); //=>-1
console.log(getNumber([1])); //=>-1
console.log(getNumber([2, 2, 4, 4, 4])); //=>-1
console.log(getNumber([1, , 1, 4, 4, 5])); //=>4
console.log(getNumber([1,'a',2,3,4,5])); //=>2
//[1,2,3,4,5] => 2
//[2,2,4,4,4] => -1

//[1] => -1
// [] => -1

//[1,,1,4,4,5] => [1,1,4,4,5] => 4
//[1,'a',2,3,4,5] => [1,2,3,4,5] =>2
