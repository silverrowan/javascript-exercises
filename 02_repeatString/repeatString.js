const repeatString = function(string, num) {
    let stringLine = "";
    if (num < 0) {
        stringLine = "ERROR";
    } else {
        for (i = 0; i < num; i++) {
            stringLine += string;
        }
    }
    return stringLine;
};

// Do not edit below this line
module.exports = repeatString;
