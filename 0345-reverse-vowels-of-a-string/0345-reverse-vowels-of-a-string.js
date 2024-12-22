/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=['a','e','i','o','u']
    let stack=[]
    let res=''
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i].toLowerCase())){
           stack.push(s[i])
        }
    }
    console.log(stack)
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i].toLowerCase())){
           res+=stack.pop()
        }else{
            res+=s[i]
        }
    }
    return res
};