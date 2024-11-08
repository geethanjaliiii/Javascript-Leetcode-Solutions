/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
 let threshold=Math.floor(arr.length/4);
 for(let i=0;i<(arr.length)-threshold;i++){
     if(arr[i]===arr[i+threshold]){
        return arr[i]
     }
 }
 
};