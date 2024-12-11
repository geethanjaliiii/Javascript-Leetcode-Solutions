/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let binArray=nums.map((num)=>num.toString(2))
    let sum=0
    for(let i=0;i<nums.length;i++){
    if(i.toString(2).split("").reduce((acc,curr)=>acc=acc+(curr=='1'?1:0),0)==k){
        sum+=nums[i]
    }
   
}
 return sum};