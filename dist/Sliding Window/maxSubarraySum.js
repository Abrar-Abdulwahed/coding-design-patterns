"use strict";
//! Find the maximum subarray sum
var maxSubArraySum = function (arr, windowSize) {
    if (windowSize < 0 || windowSize > arr.length)
        return null;
    var currSum = 0;
    var maxSum = -Infinity;
    arr.forEach(function (elem, i) {
        currSum += elem;
        if (i >= windowSize - 1) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= arr[i - (windowSize - 1)];
        }
    });
    return maxSum;
};
// Example usage:
var arrExample = [1, 2, 10, 3, 4, 5, 6, 7, 10];
console.log(maxSubArraySum(arrExample, 3));
