const repeatString = function(repeat, num) {
    newString = "";

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        newString += repeat;
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
