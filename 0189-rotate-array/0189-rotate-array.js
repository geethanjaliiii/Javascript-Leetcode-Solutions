/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(arr, d) {
    const n=arr.length
  if(d>n){
    d=d%n
  }
  rotateArray(arr,0,n-1)
  rotateArray(arr,0,d-1)
  rotateArray(arr,d,n-1)

}
1234567
4231567
4321765
5671234

const rotateArray=(arr,start,end)=>{
    while(start<end){
    let temp=arr[start]
    arr[start++]=arr[end];
    arr[end--]=temp
    }
      
  }