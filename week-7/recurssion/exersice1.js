function findFactorial(number ,factorial=1)
{
    if(number<=1) return factorial
    factorial*=number
    return findFactorial(-- number,factorial )
}
console.log(findFactorial(8));