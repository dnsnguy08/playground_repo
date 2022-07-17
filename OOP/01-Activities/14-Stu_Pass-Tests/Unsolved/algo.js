function Algo() {}

Algo.prototype.reverse = function(str) {
    const reverseString = str.split("").reverse().join("");
    return reverseString;
};

Algo.prototype.isPalindrome = function(str) {
    const reverseString = str.split("").reverse().join("");
    return str === reverseString;
};

Algo.prototype.capitalize = function(str) {
    const stringArr = str.split(" ");
    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }
    const string = stringArr.join(" ");
    return string;
};

module.exports = Algo;
