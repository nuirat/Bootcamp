const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
const commentOnWeather = weather => determineWeather(weather)
console.log(commentOnWeather(30))