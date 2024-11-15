/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left=0;
  let right=x
  
while(left<=right){
let mid=Math.floor((left+right)/2)
      if(mid*mid===x){
      return mid
  }else if(mid*mid>x){
    right=mid-1
  }else{
   left=mid+1
  }
}
return right
//eg.if x==8, 2.5 is the largest right lrss than x^2 after that left==right==3 3^2>x
  
};