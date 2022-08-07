function swap(arr1, arr2)
{
    if(arr1.length==0)
    return 0

    arr2.push(arr1[0])
    arr1.shift()
    return swap(arr1,arr2)
}
let x= [1,2,3]
let y=[]
swap(x,y)
console.log(y);
