const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  

function onUserClick(){
  
  let name = document.getElementById("name").value;
  console.log(reservations[name]);
name=name.toLowerCase(name);
if(name in reservations){
  
if(reservations[name].claimed)
console.log('the sitution are good')
else console.log('welcome')
}
else{
console.log('there no reservations behind your name')
reservations.name={claimed: true}  
} 
}