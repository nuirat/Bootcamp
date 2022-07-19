 x= "question"
 const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
x=sort(x)
index=parseInt((x.length-1)/2)
console.log(x[index]);
