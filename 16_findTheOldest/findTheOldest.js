const findTheOldest = function(arr) {
    let oldest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].yearOfDeath != null && oldest.yearOfDeath != null) {
            age0 = arr[i].yearOfDeath - arr[i].yearOfBirth;
            age1 = oldest.yearOfDeath - oldest.yearOfBirth;
            if(age0 > age1) {
                oldest = arr[i];
            }
        }
        else if(arr[i].yearOfBirth < oldest.yearOfBirth) {
            oldest = arr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
