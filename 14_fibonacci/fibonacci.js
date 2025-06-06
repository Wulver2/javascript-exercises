const fibonacci = function(num) {
    let num0 = 0;
    let num1 = 1;
    let fib = 0;
    num = Number(num)
    if(num < 0) {
        return "OOPS"
    }
    else if (num == 0) {
        return num0;
    }
    else if (num == 1) {
        return num1;
    }
    for(let i = 1; i < num; i++) {
        fib = num0 + num1;
        num0 = num1;
        num1 = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
