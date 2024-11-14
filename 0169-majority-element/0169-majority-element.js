/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count={}
    for(let i of nums){
        count[i]=(count[i]||0)+1;
    }
    let threshold=nums.length/2
    let max=0
    for(let i of nums){
       if(count[i]>threshold){
        max=i
       }
    }
    return max
};