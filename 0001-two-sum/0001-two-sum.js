/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res =[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!=j && nums[i]+nums[j]===target){
                res.push(i);
                res.push(j)
               
            }
        }
    }
    
     return [...new Set(res)]
};