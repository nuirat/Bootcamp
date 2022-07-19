function findCommons(arr1,arr2,arr3)
{
let apperance = new Set(arr1)
let common = new Set()
for (let i=0 ;i<arr2.length||i<arr3.length;i++)
{
    if(apperance.has(arr2[i]))
    common.add(arr2[i])
    if(apperance.has(arr3[i]))
    common.add(arr3[i])
}
return Array.from(common);
}
let arr1 =[1,2,3,4]
let arr2=[1,2,3,4]
let arr3=[1,2]
common = findCommons(arr1,arr2,arr3)
console.log(common);

