/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //optimised approach
    let arr=new Set()
    for(let i of nums){
        if(arr.has(i)){
            return true
        }
        arr.add(i)
    }
    return false
// nums.sort()
// for(let i=0;i<nums.length;i++){
//     if(nums[i]==nums[i+1]){
//         return true
//     }
// }
// return false
};