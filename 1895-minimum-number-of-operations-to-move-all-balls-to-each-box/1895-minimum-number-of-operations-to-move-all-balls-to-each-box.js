/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
     const n = boxes.length;
    const distances = new Array(n).fill(0);

    let prefixCount = 0;
    let prefixSum = 0;

    // Calculate prefix sums
    for (let i = 0; i < n; i++) {
        distances[i] = prefixCount * i - prefixSum;
        if (boxes[i] === '1') {
            prefixCount++;
            prefixSum += i;
        }
    }

    let suffixCount = 0;
    let suffixSum = 0;

    // Calculate suffix sums and update the distances array
    for (let i = n - 1; i >= 0; i--) {
        distances[i] += suffixSum - suffixCount * i;
        if (boxes[i] === '1') {
            suffixCount++;
            suffixSum += i;
        }
    }

    return distances;
};