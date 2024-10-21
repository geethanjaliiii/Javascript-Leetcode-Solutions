/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let  prev=0;
    let curr=1
    let next=prev+curr
    if(n<=1){
        return n
    }
    for(let i=2;i<=n;i++){
        next=prev+curr
       prev=curr
       curr=next
    
       
    }
    return next
};