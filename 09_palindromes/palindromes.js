const palindromes = function (string) {
    stringModified = string.trim().toLowerCase().replaceAll((/\W/g || " "), "");
    reverseString = Array.from(stringModified).toReversed().join("");      
    return (reverseString == stringModified);
};

// Do not edit below this line
module.exports = palindromes;

// convert to an array (each letter -> 1 entry)
// reverse the array
// turn the array back into a string
// return the string

