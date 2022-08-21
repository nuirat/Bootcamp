const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
  let jumbledArr =[]
  let set =new Set(arr1)
  for(let i=0;i<arr2.length;i++)
  {
    set.add(arr2[i])
  }
  jumbledArr=Array.from(set)
  return jumbledArr
}
    

console.log(jumble(colors, foods) );
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]