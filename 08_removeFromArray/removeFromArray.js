const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) {
        console.log(arguments[i]);
        let remove = arguments[i];
        while(arr.indexOf(remove) != -1) {
            index = arr.indexOf(remove);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
