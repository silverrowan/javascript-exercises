const fibonacci = function(position) {
    const fibonacciArray = [1,1];
    for (i = 2; i < position; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i -2]);
    };
    return fibonacciArray[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;


/*
return value of a specific member of fibonacci seq.
sequence 1,1,2,3 etc (member '4' is 3)


step one: make an array of fibonacci sequence of length = given number
Create Array (fibonacciSequence) with 1,1 as first two values
FOR 
    starting with i = 2
    while i is less than position
    increase i by 1
DO
    append to the array (at the end) 
        the sum of the values of array positions i-1 & i-2

step two: return value of array item (index = given number-1)
*remember arrays start at 0 not 1, so 


adsfasdfadsfas
*/