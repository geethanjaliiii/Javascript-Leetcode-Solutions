/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0
    for(let word of words){
        if(pref==word.slice(0,pref.length)){
           count++
        }
    }
    return count
};