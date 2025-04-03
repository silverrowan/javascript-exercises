function roundTo1Decimal(number) {
	number = Math.round(number * 10) / 10;
	return number;
}

const convertToCelsius = function(temperature) {
  let convertedTemperature = roundTo1Decimal((temperature - 32 ) * (5/9));
  return convertedTemperature;
};

const convertToFahrenheit = function(temperature) {
	let convertedTemperature = roundTo1Decimal(temperature * (9 / 5) + 32 );
  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
