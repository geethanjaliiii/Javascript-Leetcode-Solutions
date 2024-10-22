/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq={}
    for(let i of nums){
        freq[i]=(freq[i]||0)+1
    }//find ma freq
    //loop through freq set ciunter
    let max=0
    for(let i in freq){
        if(freq[i]>max){
            max=freq[i]

        }
    }
    let count=0
    for(let i in freq){
        if(freq[i]===max){
          count=count+freq[i]
        }
    }
    return count
};