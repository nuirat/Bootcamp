

function followed (x){
    x=x.sort(function(a, b){return a - b})
    let followed=[]
    for(let i=0;i<x.length;i++)
    {
    
        if (x[i]==(x[i+1]-1))
        { 
            if(followed.indexOf(x[i])==-1)
            followed.push(x[i])
            if(followed.indexOf(x[i+1])==-1)
            followed.push(x[i+1])
        }
        
    }
    return followed
}
let x=[4,1,3]
console.log(followed(x))
