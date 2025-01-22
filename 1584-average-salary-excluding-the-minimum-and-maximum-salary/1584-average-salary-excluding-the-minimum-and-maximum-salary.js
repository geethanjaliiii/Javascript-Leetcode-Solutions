/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    //let sum=0
    let max=Math.max(...salary)
    let min=Math.min(...salary)
    // for(let i=0;i<salary.length;i++){
    //     if(salary[i]!=max && salary[i]!=min){
    //         sum+=salary[i]
    //     }
    // }
    // console.log(sum)
    // return Math.floor(sum/(salary.length-2))
    let count=0
    let sum= salary.reduce((acc,curr)=>{
    if(curr!=max&& curr!=min){
        acc+=curr
        count++
    }
    return acc
   },0)
   console.log(max,min)
   return sum/count
};