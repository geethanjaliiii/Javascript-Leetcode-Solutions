/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  //1.create a commoun count,i.e the count of elemets in 1st word
  //2.iterate through the rest elemts and find their counts and store in current count
  //3.if characters in common count appear in current couynt update common count with min freq
  //if not present delete it
  //4.loop through common array and push letters to res array
  let commonFreq=findCount(words[0]);
  let res=[]
  for(let i=1;i<words.length;i++){
    let currentFreq=findCount(words[i])
    for(let char in commonFreq){
        if(currentFreq[char]){
            commonFreq[char]=Math.min(currentFreq[char],commonFreq[char])
        }else{
            delete commonFreq[char]
        }
    }
  }
  for(let char in commonFreq){
 for(let i=0;i<commonFreq[char];i++){
    res.push(char)
 }
  }
  return res

};
function findCount(word){
    let count={}
    for(let char of word){
        count[char]=(count[char]||0)+1
    }
    return count
}