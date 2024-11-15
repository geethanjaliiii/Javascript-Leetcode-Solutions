/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //approach 1
// nums.sort((a,b)=>a-b)

//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===nums[i+1]){
//             return true
//         }
//     }
//     return false

//approach 2
let count={}
nums.sort()
for(let i of nums){
count[i]=(count[i]||0)+1
}
console.log(count)
for(let i of nums){
    if(count[i]>1){
        return true
    }
}
return false
};