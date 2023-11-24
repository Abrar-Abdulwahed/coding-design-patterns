"use strict";
//! Find the longest substring of a string containing k distinct characters
var findLongestSubstring = function (str, k) {
    if (str === null || str.length === 0) {
        return str;
    }
    var begin = 0;
    var end = 0;
    var window = new Set();
    var freq = new Array(128).fill(0);
    for (var low = 0, high = 0; high < str.length; high++) {
        window.add(str.charAt(high));
        freq[str.charCodeAt(high)]++;
        while (window.size > k) {
            if (--freq[str.charCodeAt(low)] === 0) {
                window.delete(str.charAt(low));
            }
            low++;
        }
        if (end - begin < high - low) {
            end = high;
            begin = low;
        }
    }
    return str.substring(begin, end + 1);
};
// Example usage:
var str = "abcbdbdbbdcdabd";
var k = 2;
console.log(findLongestSubstring(str, k));
