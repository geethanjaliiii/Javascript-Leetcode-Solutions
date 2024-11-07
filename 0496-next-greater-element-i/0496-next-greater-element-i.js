/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr=[]
  for(let num of nums1){
    let greatest=-1
    let index=nums2.indexOf(num)
    //search greatest num in next elements in nums2
    for(let j=index+1;j<nums2.length;j++){
        if(nums2[j]>nums2[index] ){
            greatest=nums2[j]
            break;
        }
    }
    arr.push(greatest)
  }
  return arr
};