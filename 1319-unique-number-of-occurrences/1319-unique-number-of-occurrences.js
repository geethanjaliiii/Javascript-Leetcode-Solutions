/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count={}
    for(let i of arr){
        count[i]=(count[i]||0)+1
    }
    let arr1=Object.values(count)
   let uni=[...new Set(Object.values(arr1))]
   return arr1.length===uni.length
};