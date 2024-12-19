const convertToCelsius = function(fahrenheit) {

  const calculate = (fahrenheit - 32) * 5/9;
  var rounded = Math.round(calculate * 10) / 10;
return rounded;

};

const convertToFahrenheit = function(celsius) {

  const calculate = (celsius * 9/5 + 32);
  var rounded = Math.round(calculate * 10) / 10;
return rounded;

};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
