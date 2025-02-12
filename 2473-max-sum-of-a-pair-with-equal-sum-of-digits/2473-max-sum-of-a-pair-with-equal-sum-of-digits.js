/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let map =new Map()
  let max=-1
  for(let num of nums){
    let temp=num;
    let sum=0
    while(0<temp){
    sum+=temp%10;
    temp=Math.floor(temp/10)
    }
    if(map.has(sum)){
        let prevNum=map.get(sum)
        max=Math.max(max,num+prevNum)
        map.set(sum,Math.max(num,prevNum))
    }else{
        map.set(sum,num)
    }
  }
  return max
};