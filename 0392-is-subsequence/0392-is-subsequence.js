/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sp=0;
    let tp=0;
    while(sp<s.length && tp<t.length){
        if(s[sp]===t[tp]){
            sp++
        }
        tp++
    }
    return sp===s.length
    //using stack
    // let stack=[]
   
    // for(let i=t.length-1;i>=0;i--){
    //       stack.push(t[i])
    // }
    // let i=0
    // let found=0
    // while(stack.length && i<s.length){
    //     console.log(stack)
    //  if(s[i]==stack.pop()){
    //     i++
    //     found++
    //  }
    // }
    // console.log(stack,found)
    // return found===s.length
};