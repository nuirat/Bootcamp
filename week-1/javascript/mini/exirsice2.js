const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}
let storyWitoutSpecial=story 
for(i in specialChars)
storyWitoutSpecial= storyWitoutSpecial.split(specialChars[i]).join(" ")
storyWitoutSpecial=storyWitoutSpecial.split(" ")
let noRepated=[]
let words=[];
for(i in storyWitoutSpecial)
{
    sWord=storyWitoutSpecial[i]
    let j=0
    for(j=0;j< noRepated.length;j++)
    if(storyWitoutSpecial[i]!=noRepated[j])
    continue
    else break
    if(j==noRepated.length)
    
    {
        words[sWord]=1
    noRepated.push(storyWitoutSpecial[i])

}
    else 
    words[sWord]=words[sWord]+1
}
console.log(words)