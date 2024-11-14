/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {

  let e=0
  let o=0
  for(let i=0;i<num.length;i++){
    if(i%2===0){
       
          e+=Number(num[i])
    }else{
        o+=Number(num[i])
    }
  }
  
  return o===e
};