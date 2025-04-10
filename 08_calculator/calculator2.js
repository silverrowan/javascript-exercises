const add = function(num1, num2) {
	let addNum = num1 + num2;
	return addNum;	  
  };
  
  const subtract = function(num1, num2) {
	  let subtractNum = num1 - num2;
	return subtractNum;
  };

  const sum = function(numArray) {
	let arraySum = 0;
	for (const num of numArray) {
		arraySum += num;
	}
	return arraySum;
  };

  const multiply = function(numArray) {
	let arrayMultiplied = 1;
	for (const num of numArray) {
		arrayMultiplied *= num;
	}
	return arrayMultiplied;
  };
  
   const power = function(baseNum, exponentNum) {
	  let numPower = 1;
	  for (i = 0; i < exponentNum; i++) {
		numPower *= baseNum;
	  }
	  return numPower;	  
  };
  
  const factorial = function(num) {
	let numFactoral = 1;
	for (i = 0; i < (num); i++) {
		numFactoral *= (num - i);
	}
	return numFactoral;
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
