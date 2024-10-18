/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count=0
    let r=s.toLowerCase()
    for(let i=0;i<s.length-1;i++){
          if(r[i]!=r[i+1]){
           
            count++
          }
    }
    
    return count
};