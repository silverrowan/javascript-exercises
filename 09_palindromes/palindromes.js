const palindromes = function (string) {
    //convert to lowercase and remove non-word characters and spaces. 
    stringModified = string.toLowerCase().replaceAll((/\W/g || " "), "");

    //reverse the modified/cleaned string
    reverseString = Array.from(stringModified).toReversed().join("");      
    return (reverseString == stringModified);
};

// Do not edit below this line
module.exports = palindromes;

// convert to an array (each letter -> 1 entry)
// reverse the array
// turn the array back into a string
// return the string

