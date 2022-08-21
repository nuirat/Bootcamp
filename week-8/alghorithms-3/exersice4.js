function capitalizeFirstLetter(str) {

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

function cammelCase(str){
let words=str.split(' ')
let cammelCaseWords=words[0]
for( let i=1 ;i<words.length;i++)
{
    cammelCaseWords=cammelCaseWords+capitalizeFirstLetter(words[i])
}
return cammelCaseWords
}
console.log(cammelCase('hi world im there '));