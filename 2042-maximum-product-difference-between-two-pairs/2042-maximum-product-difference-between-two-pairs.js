/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
       
    }
    let a=nums[0]*nums[1]
    let b=nums[nums.length-1]*nums[nums.length-2]
    return b-a
};