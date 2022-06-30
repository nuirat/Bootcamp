function isEven(number)
{
    if(number%2)
    return false
    return true
}
function Evens(numbers)
{
    for(i in numbers)
    console.log(isEven(numbers[i]))
}
Evens([1,2,3,4])