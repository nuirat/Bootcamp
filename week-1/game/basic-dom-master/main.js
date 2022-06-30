// console.log(document)
const ball = document.getElementById("container");
console.log(ball);
document.getElementById("up").onclick = function(){
    let down=parseInt(document.getElementById("ball").style.bottom)||0
    down+=15
console.log(document.getElementById("ball").style)
    document.getElementById("ball").style.bottom=down+"px"
}
document.getElementById("down").onclick = function(){
   
    let up=parseInt(document.getElementById("ball").style.bottom)||0
    up-=15
    console.log(up)
    document.getElementById("ball").style.bottom=up+"px"
}
document.getElementById("left").onclick=function(){
    let left=parseInt(document.getElementById("ball").style.left)||0
    left-=15


    document.getElementById("ball").style.left=left+"px"
}
document.getElementById("right").onclick=function(){
    let left=parseInt(document.getElementById("ball").style.left)||0
    left+=15

    document.getElementById("ball").style.left=left+"px"
}