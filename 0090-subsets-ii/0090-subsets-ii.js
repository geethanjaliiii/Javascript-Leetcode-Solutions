/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums, res = []) {
    nums.sort((a, b) => a - b)
    let result = []
    getSubsets(nums, [], result, 0)
    return result
};

function getSubsets(nums, currentArr, result, idx) {
    result.push([...currentArr])
    if (idx === nums.length) {
        return
    }
    for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] == nums[i - 1]) continue;
        currentArr.push(nums[i])
        getSubsets(nums, currentArr, result, i + 1)
       currentArr.pop()
    }

}