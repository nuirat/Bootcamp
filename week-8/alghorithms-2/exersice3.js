function  firstNonRepeatingCharacter(str)
{
 for(let i=1;i<str.length;i++)
 {
    if(str[i]!=str[i+1]&&(str[i]!=str[i-1]))
    return str[i]
 }
}
console.log(firstNonRepeatingCharacter('aabbcca'));