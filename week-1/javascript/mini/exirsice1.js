people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
  function capitalizeFirstLetter(str) {

    const capitalized = str.charAt(0).toUpperCase(str) + str.slice(1);

    return capitalized;
}
const getSummary = function(person){
    let summary = ""
   // console.log(capitalizeFirstLetter(person.name))
      summary+=capitalizeFirstLetter(person.name)
      summary+=" "
      summary+=getAge(person.age)
      summary+=" "
      summary+=person.profession
      summary+=" "
      summary+=person.country
      summary+=","
      summary+=person.city
      summary+=" "
      summary+="Guido loves to say"
      summary+=person.catchphrase
  return summary
    }
  function getAge(age){
if (age <21)
return "Underage"
if (age>55)
return "+55"
return age
  }
  for(person of people_info)
 console.log( getSummary(person))