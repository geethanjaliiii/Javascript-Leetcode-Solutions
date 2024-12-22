/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=['A','E','I','O','U','a','e','i','o','u']
    let stack=[]
    let res=''
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
           stack.push(s[i])
        }
    }
    console.log(stack)
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
           res+=stack.pop()
        }else{
            res+=s[i]
        }
    }
    return res
};