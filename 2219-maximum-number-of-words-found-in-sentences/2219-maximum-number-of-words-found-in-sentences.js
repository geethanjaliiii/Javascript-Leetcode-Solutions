/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0
    for(let i=0;i<sentences.length;i++){
        console.log(i)
        let count=sentences[i].split(" ").length
        if(count>max){
            max=count
        }
    }
    return max
};