const convertToCelsius = function(val) {
  let celsius = (val - 32) * 0.56;
  return celsius;
};

const convertToFahrenheit = function(val) {
  let fahrenheit = val * 1.8 + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
