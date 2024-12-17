/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let maxCount=0
    let idx=0
   for(let i=0;i<mat.length;i++){
    let onesCount=0
    for(let j=0;j<mat[i].length;j++){
        if(mat[i][j]==1){
             onesCount++
        }
    }
    if(onesCount>maxCount){
        maxCount=onesCount;
        idx=i
    }
  
   }
   return [idx,maxCount]
};