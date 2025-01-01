/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
 
    let leftZeros = 0; // Count of zeros in the left substring
    let rightOnes = 0; // Count of ones in the right substring
    let maxScore = 0;

    // Initialize rightOnes with the total number of ones in the string
    for (let char of s) {
        if (char === '1') rightOnes += 1;
    }

    // Iterate through the string and calculate the score
    for (let i = 0; i < s.length - 1; i++) { // Stop at the second-to-last character
        if (s[i] === '0') {
            leftZeros += 1; // Increment zero count for the left substring
        } else {
            rightOnes -= 1; // Decrement one count for the right substring
        }
        maxScore = Math.max(maxScore, leftZeros + rightOnes); // Update max score
    }

    return maxScore;
}

