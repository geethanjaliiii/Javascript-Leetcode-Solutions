/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
 let k=0
 for(let i=0;i<nums.length;i++){
      if(nums[i]!=0){
         nums[k++]=nums[i]
         
      }
 }
 for(let i=k;i<nums.length;i++){
    nums[i]=0
 }
  
};
//   for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] == 0 && nums[j] != 0) {
//                 nums[i] = nums[j]
//                 nums[j] = 0

//             }
//         }


//     }