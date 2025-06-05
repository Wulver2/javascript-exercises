const palindromes = function (string) {
    //could have set valid characters to alphanumeric instead
    string = string.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '');
    string = string.toLowerCase();
    let reverse = string.split("").reverse().join("");
    if(reverse.trim() == string.trim()) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
