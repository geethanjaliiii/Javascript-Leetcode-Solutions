/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
 if(!word1) return word2
 if(!word2) return word1
 if(word1>word2){
    return word1[0]+largestMerge(word1.slice(1),word2)
 }else{
    return word2[0]+largestMerge(word1,word2.slice(1))
 }

};