const convertToCelsius = function(temp) {
  tempCelcius = (temp - 32) * (5/9);
  return Math.round(tempCelcius * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  tempFahrenheit = (temp * (9/5)) + 32;
  return Math.round(tempFahrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
