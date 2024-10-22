/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
let str =x.toString().split("")
let rev =x.toString().split("").reverse()
console.log(str,rev)
let is_pal=true
for(let i=0;i<str.length;i++){
    if(str[i]!=rev[i]){
      is_pal=false
      break
    }
   
} return is_pal
};