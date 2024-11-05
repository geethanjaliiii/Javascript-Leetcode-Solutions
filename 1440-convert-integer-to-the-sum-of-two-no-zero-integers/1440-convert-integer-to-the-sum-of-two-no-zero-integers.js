/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let arr=[]
for(let i=1;i<n;i++){
  for(let j=1;j<n;j++){
    if(i+j===n&& !i.toString().includes("0")&& !j.toString().includes("0") ){
        return[i,j]
    }
  }
}
}