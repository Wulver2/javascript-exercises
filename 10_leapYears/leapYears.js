const leapYears = function(year) {
    //according the the solution I could've use variables
    //to hold the expressions
    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }
    else if (year % 100 != 0 && year % 4 == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
