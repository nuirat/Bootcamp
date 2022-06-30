const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
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