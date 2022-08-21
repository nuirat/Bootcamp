const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}
function getLetter()
{
    let percent =Math.random()
    if(percent<.6)
    return Object.keys(rawDist)[0]
    else 
    if(percent<.8)
    return Object.keys(rawDist)[3]
    else 
    if(percent<.9)
    return Object.keys(rawDist)[1]
    else return Object.keys(rawDist)[2]

}
for(i=0;i<10;i++)
{
    console.log(getLetter());
}