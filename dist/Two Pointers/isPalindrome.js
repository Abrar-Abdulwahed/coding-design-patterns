"use strict";
var isPalindrome = function (input) {
    var strNum = String(input);
    var length = strNum.length;
    // Early return for single-character inputs:
    if (length === 1)
        return true;
    for (var left = 0, right = length - 1; left < right; left++, right--) {
        if (strNum[left] !== strNum[right])
            return false;
    }
    return true;
};
// Example usage
var num1 = 1297921;
var num2 = 1397921;
var str1 = 'racecar';
var str2 = 'hello';
console.log("".concat(num1, " is Palindrome? ").concat(isPalindrome(num1)));
console.log("".concat(num2, " is Palindrome? ").concat(isPalindrome(num2)));
console.log("".concat(str1, " is Palindrome? ").concat(isPalindrome(str1)));
console.log("".concat(str2, " is Palindrome? ").concat(isPalindrome(str2)));
