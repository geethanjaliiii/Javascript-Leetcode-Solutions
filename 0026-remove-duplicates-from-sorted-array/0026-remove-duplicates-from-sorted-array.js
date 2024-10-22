/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //first number is always unique
    nums.sort((a,b)=>a-b)
    let j=1
for(let i=1;i<nums.length;i++){
    if(nums[i]!=nums[i-1]){
        //nums[i] is unique
       nums[j]=nums[i]
       j++
    }
}
return j
};