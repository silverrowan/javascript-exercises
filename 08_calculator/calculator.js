const add = function(a, b) {
    return a + b;
	
};

const subtract = function(a, b) {
    return a - b;
	
};

const sum = function(array) {
    arraySum = array.reduce(addAll, 0);
    return arraySum;	
};

function addAll (total, value) {
    return total + value;
};

const multiply = function(array) {
    function multiplyAll (total, value) {
        return total * value;
    };
    arrayMult = array.reduce(multiplyAll, 1);
    return arrayMult;
};

const power = function(a, b) {
    return Math.pow(a,b);
};

const factorial = function(a) { // pretty sure last version was better
    if (a === 0) {
        return 1;
    } else if (a === 1) {
        return 1;
    } else {
        let i = a;
        let numFactoral = i;
        do {
            numFactoral = numFactoral * (i - 1);
            i = i - 1;
        }
        while (i > 1);
        return numFactoral;
    }
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