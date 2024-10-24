/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let char=[]
    let num=[]
    let str=""
    let first=s[0]
    for(let i of s){
        if(isNaN(i)){
            char.push(i)
        }else{
            num.push(i)
        }
    }
    let diff=char.length-num.length
    console.log(diff,char,num)
  if(diff==0 || diff==-1 || diff==1){
    for(let i=0;i<s.length/2;i++){
    if(char.length>num.length){
        str+=char[i]
        str+=num[i]||""
    }else{
        str+=num[i]
        str+=char[i]||""
    }
    }
    console.log(str)
    return str
  }else{
    return ""
  }
  
};