function validate(){
let name =document.getElementById("name");
let date =document.getElementById("date");
let phone =document.getElementById("phone");
let sal =document.getElementById("sal");

if(!name.value)
{
    document.getElementById("error").innerHTML="name is missing";
    
}

if(!(parseInt(sal.value)>10000&&(parseInt(sal.value)<16000)))
{
    document.getElementById("error").innerHTML="salary error";
}
if(!date.value)
{
    document.getElementById("error").innerHTML="date is missing";
    
}
if(phone.value.length!=10)
{
    document.getElementById("error").innerHTML="phone is missing";
    
}
}