/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        nums[i]=nums[i]*2
        nums[i+1]=0
    }

}
let res=[]
for(let i=0;i<nums.length;i++){
   if(nums[i]!=0){
    res.push(nums[i])
   }

    }
    console.log(res)
    while(res.length<nums.length){
        res.push(0)
    }
    console.log(res)
    return res
}
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] ===nums[i+1]) {
    //         nums[i] =nums[i]*2
    //         nums[i+1]=0
    //     }
    // }
    // let left=0
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]!=0){
    //         nums[left++]=nums[i]
    //     }
    // }
    // for(let i=left;i<nums.length;i++){
    //     nums[i]=0
    // }
    // return nums
