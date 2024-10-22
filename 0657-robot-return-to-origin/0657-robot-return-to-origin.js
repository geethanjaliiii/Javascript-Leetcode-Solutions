/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0
    let y=0
    for(move of moves){
        if(move==='U')x++
        else if(move==='D')x--
        else if(move==='L')y--
        else if(move==='R')y++
    }
    return x===0&&y===0
};