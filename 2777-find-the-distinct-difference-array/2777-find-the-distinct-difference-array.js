/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    // const map = new Map()
    let n = nums.length;
    let arr = []
    // for(const element of nums) {
    //     if(!map.has(element)) {
    //         map.set(element, 1)   
    //     } else {
    //         map.set(element, map.get(element) + 1)
    //     }
    // }
    // console.log(map)
    for (let i = 0; i < n; i++) {
        const prefix = [...new Set(nums.slice(0, i+1))]
        const suffix = [...new Set(nums.slice(i+1))]
        
        arr.push(prefix.length - suffix.length)
    }
    return arr
};

