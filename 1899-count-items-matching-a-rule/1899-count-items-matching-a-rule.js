/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count=0
    for(let item of items){
        
           for(let j=0;j<item.length;j++){
            if(ruleKey==="type" && item[0]===ruleValue){
                count++
                break
            }else if(ruleKey==="color" && item[1]===ruleValue){
                count++
                break
            }else if(ruleKey==="name" && item[2]===ruleValue ){
                count++
                break
            }
           
        }
    }
    return count
};