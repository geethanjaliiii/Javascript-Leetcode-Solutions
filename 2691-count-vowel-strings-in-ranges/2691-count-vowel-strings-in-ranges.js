/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Helper function to check if a word starts and ends with a vowel
    const isVowelString = (word) => {
        return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    };

    // Precompute prefix sum array
    const prefixSum = new Array(words.length).fill(0);
    prefixSum[0] = isVowelString(words[0]) ? 1 : 0;

    for (let i = 1; i < words.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + (isVowelString(words[i]) ? 1 : 0);
    }

    // Process each query
    const result = [];
    for (const [li, ri] of queries) {
        const count = li === 0 ? prefixSum[ri] : prefixSum[ri] - prefixSum[li - 1];
        result.push(count);
    }

    return result;


};

