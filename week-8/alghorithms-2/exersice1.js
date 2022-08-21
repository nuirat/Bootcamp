function printStarSeries(numberOfRows, numberOfDom) {
  let stars = "*";
  let flag = true;
  for (let i = 0; i < numberOfDom*2; i++) {
    

    if (flag)
      for (stars='*'; stars.length <= numberOfRows; stars += "*") {
        console.log(stars);
        if (stars.length == numberOfRows) flag = false;
      }
    else {
        stars=stars.slice(1)
      for (; stars.length >= 1; ) {
        stars=stars.slice(1)
                console.log(stars);
                if (stars.length == 1) flag = true;
      }
    }
  }
}
printStarSeries(5, 3);
