const StringFormatter = function ()
{
    const capitalizeFirst =function (name)
    {
     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
    }
    const skewerCase  =function (noSpace)
    {
     return noSpace.replace(' ','-')
    }
    return {
        capitalizeFirst:capitalizeFirst,
        skewerCase:skewerCase
    }
}
const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box