let x=[1,2,3,4]
let y=[4,2,6,7]
let common=[]
function commons(x,y){
for(i=0;i<x.length;i++)
    if(x.indexOf(y[i])!=-1)
    if(common.indexOf(y[i])==-1)
    common.push(y[i])
}
commons(x,y)
console.log(common);