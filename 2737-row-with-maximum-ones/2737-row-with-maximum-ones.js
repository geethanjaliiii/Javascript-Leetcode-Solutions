/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let maxCount=0
    let idx=0
   for(let i=0;i<mat.length;i++){
    let onesCount=mat[i].filter((item)=>item==1).length
   if(onesCount>maxCount){
     maxCount=onesCount;
     idx=i
   }
   }
   return [idx,maxCount]
};