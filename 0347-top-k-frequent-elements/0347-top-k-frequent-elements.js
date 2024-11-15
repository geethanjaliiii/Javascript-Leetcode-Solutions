/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
if(nums.length===k){
    return [...new Set(nums)]
}
let count={}
for(let num of nums){
    count[num]=(count[num]||0)+1
}

return Object.entries(count).sort((a,b)=>b[1]-a[1]).slice(0,k).map((a)=>Number(a[0]))


};