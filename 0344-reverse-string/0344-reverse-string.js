/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse()
    // return s[s.length-1]+reverseString(s.substring(1))
};