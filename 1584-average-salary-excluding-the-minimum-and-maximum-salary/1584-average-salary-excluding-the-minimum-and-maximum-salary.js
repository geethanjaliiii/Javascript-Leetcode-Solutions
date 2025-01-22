/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
    let max=Math.max(...salary)
    let min=Math.min(...salary)
 
    let count=0
    return salary.reduce((acc,curr)=>{
    if(curr!=max&& curr!=min){
        acc+=curr
        count++
    }
    return acc
   },0)/(count)
   
};