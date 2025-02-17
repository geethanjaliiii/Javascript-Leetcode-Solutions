/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false
    }
    let count={}
    for(let i of s){
        count[i]=(count[i]||0)+1
    }
    for(let i of t){
        if(!count[i]) return false

       count[i]-=1
    }
    return true
//   let sortedS=s.split("").sort().join("")
//   let sortedT=t.split("").sort().join("")
//     return sortedS===sortedT
};