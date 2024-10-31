/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max=0
    
    let windowSum=0
   for(let i=0;i<k;i++){
    windowSum+=nums[i]
   }
maxSum=windowSum
//for remaining elements
for(let i=k;i<nums.length;i++){
    //removing first term and adding next term
   windowSum=windowSum-nums[i-k]+nums[i]
   maxSum=Math.max(maxSum,windowSum)
}
return maxSum/k
   ///time limit/////
//     let max=[]
//     for(let i=0;i<nums.length;i++){
//         let avg=0
//         let l=i
//         if(i<nums.length-k+1){
//          for(let j=0;j<k;j++){
//             avg+=nums[l++]
//        }
//        max.push(avg/k)
//         }
      
//        console.log(i)
//     }
//    console.log(max)
//     return (Math.max(...max))
};