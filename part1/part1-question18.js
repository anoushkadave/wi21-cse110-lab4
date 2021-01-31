let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
  };
  
  for (property in statistics) {
    // print if first of property letter is r or if value of property is odd
    if ((property.substr(0, 1) == "r") || (property.substr(0, 1) == "R") || (statistics[property] % 2 != 0)) {
      console.log(statistics[property]);
    }
  }