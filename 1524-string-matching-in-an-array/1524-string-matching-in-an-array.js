/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words,all=words.join()) {
    
  return words.filter(w=>all.split(w).length>2);
};