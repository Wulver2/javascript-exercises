const sumAll = function(num1, num2) {
    let large = 0;
    let small = 0;
    let sum = 0;

    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if(num1 % parseInt(num1) != 0 || num2 % parseInt(num2) != 0 ) {
        return "ERROR";
    }
    if (num1 > num2) {
        large = num1;
        small = num2;
    }
    else {
        large = num2;
        small = num1;
    }

    for(let i = small; i <= large; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
