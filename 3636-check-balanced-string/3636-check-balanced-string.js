/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
  let arr=num.split("").map((i)=>Number(i));
  let e=0
  let o=0
  for(let i=0;i<arr.length;i++){
    if(i%2===0){
       
          e+=arr[i]
    }else{
        o+=arr[i]
    }
  }
  
  return o===e
};