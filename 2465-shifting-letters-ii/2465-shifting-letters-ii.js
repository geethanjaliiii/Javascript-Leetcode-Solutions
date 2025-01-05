/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, queries) {
    const n = s.length;
    const shifts = new Array(n + 1).fill(0); // Difference array

    // Apply the difference array logic based on queries
    for (const [start, end, direction] of queries) {
        if (direction === 1) {
            shifts[start] += 1;
            shifts[end + 1] -= 1;
        } else {
            shifts[start] -= 1;
            shifts[end + 1] += 1;
        }
    }

    // Compute the prefix sum to get net shifts for each character
    for (let i = 1; i < n; i++) {
        shifts[i] += shifts[i - 1];
    }

    // Apply the shifts to the string
    const result = s.split('').map((char, i) => {
        const shift = (shifts[i] % 26 + 26) % 26; // Handle cyclic shifts and negative values
        const newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        return newChar;
    });

    return result.join('');
};