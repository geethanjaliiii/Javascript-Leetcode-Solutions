/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[i] === val) {
            if (nums[j] !== val) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++
            }
            j--
        } else {
            i++
        }
    }
    return i
};