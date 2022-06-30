const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(i in names)
{
    people[i]={name:names[i],age:ages[i]};
}
console.log(people)
for(person of people)
console.log(person.name + "has "+person.age+" years old")