const splice = function(str,start,deleteCount,newWord){
  let newArray=[];
  for(let i=0;i<str.length;i++){
  if(i==start)
  {
      if(newWord!=null)
      {
          newArray.push(newWord)
      }
  }
  if(i<start || i>=deleteCount)
  {
      
    newArray.push(str[i])
  }
  
      
  }
  console.log(newArray)
  
}

splice([1,2,3,],0,0)