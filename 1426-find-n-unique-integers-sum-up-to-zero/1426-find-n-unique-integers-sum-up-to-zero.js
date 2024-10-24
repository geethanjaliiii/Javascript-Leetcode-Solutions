/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr=[]
    let j=n
    
       for(let i=0;i<(n-1)/2;i++){
        arr.push(-j)
        arr.push(+j)
        j--
       }
    if(n%2!=0){
        arr.push(0)
        return arr
    }else{
        return arr
    }

};