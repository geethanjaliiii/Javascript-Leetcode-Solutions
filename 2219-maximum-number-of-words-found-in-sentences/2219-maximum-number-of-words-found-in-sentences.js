/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    // let max=0
    // for(let i=0;i<sentences.length;i++){
    //     console.log(i)
    //     let count=sentences[i].split(" ").length
    //     if(count>max){
    //         max=count
    //     }
    // }
    // return max
    

    //bruteforce approach
    let max=0
    for(let i=0;i<sentences.length;i++){
        let count=0
        for(let j=0;j<sentences[i].length;j++){
            if(sentences[i].charAt(j)===' '){
             count++
            }
        }
        if(count+1>max){
            max=count+1
        }
    }
    return max
};