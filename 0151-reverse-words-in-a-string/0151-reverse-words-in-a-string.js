/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stack=[]
    let arr=s.split(' ')
    let res=''
   for(let i=0;i<arr.length;i++){
    if(arr[i]!=''){
   stack.push(arr[i])
    }
     
    }
    console.log(arr,stack)
    while(stack.length){
 res+=stack.pop()+' '
    }
    return res.trim()
};