/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
 for(let word of words){
  let arr=word.split("")
  let n=arr.length-1
  let isPal=true
  for(let i=0;i<arr.length/2;i++){
    if(arr[i]===arr[n]){
        n--
    }else{
        isPal=false
        break;
    }
  }
  if(isPal){
       return word;
  }
  
 }
 return ""
};