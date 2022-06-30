let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if(boughtTesla && isUSCitizen)
if(currentYear-yearOfTeslaPurchase>=4)
console.log('are you want to upgrade')
else console.log('are you satisfied with your car')
else if(boughtTesla && !isUSCitizen)
console.log('are you want  go to us')
else if(!boughtTesla)
console.log('are you intrested to buy tesla ?')