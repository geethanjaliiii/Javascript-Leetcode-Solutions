/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
//   let arr=[]
//   for(let num of nums1){
//     if(nums2.includes(num)){
//         arr.push(num)
//     }
//   }
//   return [...new Set(arr)]
let arr=[]
let result=[]
   for(i=0;i<nums1.length;i++){
    for(j=0;j<nums2.length;j++){
         if(nums1[i]==nums2[j]){
            arr.push(nums1[i])
         }
    }
   }
   for(i=0;i<arr.length;i++){
    let count=0
    for(j=i+1;j<arr.length;j++){
     if(arr[i]==arr[j]){
        count++
     }
    }
    if(count==0){
      result.push(arr[i])
    }
   }
   return  result

};