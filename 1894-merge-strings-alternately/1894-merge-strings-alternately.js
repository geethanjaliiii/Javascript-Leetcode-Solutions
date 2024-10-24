/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let l1=word1.length
    let l2=word2.length
    let str=""
    for(let i=0;i<Math.max(l1,l2);i++){
         str+=word1[i]||""
         str+=word2[i]||""
    }
  
    console.log(str)
    return str
};