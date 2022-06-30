function isExsist(numbers,number)
{
    let i=numbers.length-1
    for(j=0 ;j<numbers.length;j++)
    {
        if(numbers[j]==number)
        
        break
    }
    console.log(j)
    if(j>i)
return false
return true
}
isExsist([1,2,3,4],5)