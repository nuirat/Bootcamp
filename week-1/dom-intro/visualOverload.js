
let color
for(let i=0 ;i<3;i++)
{
    var box = document.createElement("div");
box.innerHTML="box"+i;
box.setAttribute("id","box"+i);
box.onmouseenter = function(){
    color =  document.getElementById("box"+i).style.backgroundColor.valueOf()
    document.getElementById("box"+i).style.backgroundColor="yellow" 
}
box.onmouseleave = function(){
    document.getElementById("box"+i).style.backgroundColor=color

}
document.getElementById("container").appendChild(box);
}

