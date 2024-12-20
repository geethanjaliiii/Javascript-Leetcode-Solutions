/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //bruteforce

// let res=[]
// for(let num of nums1){
//     let greatest=-1
//     let index=nums2.indexOf(num)
//   for(let j=index+1;j<nums2.length;j++){
//     if(nums2[j]>num){
//         greatest=j
//     }
//   }
//   res.push(greatest)
// }
// return res

//stack
let stack=[]
let nextGreaterMap= new Map()
for(let i=nums2.length-1;i>=0;i--){
    let current=nums2[i]
    while(stack.length>0 && stack[stack.length-1]<=current){
        stack.pop()
    }
    nextGreaterMap.set(current,stack.length>0?stack[stack.length-1]:-1)
    stack.push(current)
}
return nums1.map(num=>nextGreaterMap.get(num))
};