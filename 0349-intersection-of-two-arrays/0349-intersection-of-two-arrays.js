/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let arr=[]
  for(let num of nums1){
    if(nums2.includes(num)){
        arr.push(num)
    }
  }
  return [...new Set(arr)]
// let set1=new Set(nums1)
// let set2=new Set(nums2)
//  return [...new Set([...set1].filter(num=>set2.has(num)))]

};