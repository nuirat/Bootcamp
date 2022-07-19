let x="aabcde"
let vowels="aeiou"
let count=0
for(i of x)
{
    if (vowels.indexOf(i)!=-1)
    count++
}
console.log(count);