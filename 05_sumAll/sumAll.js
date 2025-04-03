const sumAll = function(num1, num2) {
	if (Number.isInteger(num1) && 
		Number.isInteger(num2) && 
		num1 >= 0 && 
		num2 >= 0) {
			let startNum;
			let endNum;
			let sumStep = 0;

			if (num1 <= num2) {
				startNum = num1;
				endNum = num2;
			} else {
				startNum = num2;
				endNum = num1;
			}

			for (i = (startNum); i <= endNum; i++) {
				sumStep += i;
			}

			return sumStep;
	} else {
		return "ERROR";
	}
}

// Do not edit below this line
module.exports = sumAll;
