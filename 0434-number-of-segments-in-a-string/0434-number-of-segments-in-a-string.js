/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr=[]
    let str=''
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
        if(str) arr.push(str)
         str=''
        }else {
           str+=s[i]
        }
    }
   if(str) arr.push(str)
    return arr?.length?arr.length:0
   
};