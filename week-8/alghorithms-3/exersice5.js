function add(number1,number2=false){
if(number2==false)
{
   return function(number2){ return number1+number2}
}

else return number1+number2
}

console.log(add(1)(2));
console.log(add(1,2));