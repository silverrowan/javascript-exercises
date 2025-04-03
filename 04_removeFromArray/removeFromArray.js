const removeFromArray = function(array, remove) {

    for (j = 1; j < arguments.length; j++) {    

        for (i = 0; i < array.length;) {
            if (array[i] === arguments[j]) {
		    	array.splice(i, 1);
            } else {i++;}
		}
    }
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
