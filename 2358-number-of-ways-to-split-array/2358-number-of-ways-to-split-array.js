/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let count=0
    let totalSum=nums.reduce((acc,curr)=>acc+curr,0)
    let firstSum=0
    for(let i=0;i<nums.length-1;i++){
         firstSum=firstSum+nums[i]
        if(firstSum>=totalSum-firstSum){
         count++
        }
    }
    return count
};
var sum=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
      sum+=arr[i]
    }
    return sum
}