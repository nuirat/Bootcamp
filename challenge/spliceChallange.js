const splice = function(str,start,deleteCount,newWord){//[1,2,3,4,5],1,3,9
    let newArray=[]; //[1,9]
    for(let i=0;i<str.length;i++){//3
        if(i==start)
        {
            if(newWord!=null)
            {
                newArray.push(newWord)
            }
        }
        if(i<start || i>deleteCount)
        {
            
        newArray.push(str[i])
        }
    
        
    }
  return newArray
    
}

console.log(splice([1,2,3,4,5],1,3,9))