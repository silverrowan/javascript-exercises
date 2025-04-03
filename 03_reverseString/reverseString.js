const reverseString = function(string) {
    let revString = "";
    for (i = string.length; i >= 0; i--) {
        revString += string.charAt(i);
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
