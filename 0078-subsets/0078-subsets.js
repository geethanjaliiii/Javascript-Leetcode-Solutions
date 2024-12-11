/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result=[]
    let temp=[]
    function recursiveSubsets(nums,i){
        //base case
    if(i===nums.length){
        console.log(temp)
        
        return result.push([...temp])
    }
    temp.push(nums[i])
    recursiveSubsets(nums,i+1)//create one cjild
    temp.pop()
    recursiveSubsets(nums,i+1)//create second child
    }
    recursiveSubsets(nums,0)
    return result
};