/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let nums1=[]
   for(let num of nums){
    let arr=num.toString().split("")
    let lar=Math.max(...arr)
   let num1=Number(arr.map(()=>lar).join(""))
   console.log(num1)
   nums1.push(num1)
   }
   console.log(nums1)
  return nums1.reduce((acc,curr)=>acc+curr,0)
};