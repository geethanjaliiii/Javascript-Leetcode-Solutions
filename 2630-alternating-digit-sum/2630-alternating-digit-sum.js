/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr=n.toString().split("")
    console.log(arr)
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            arr[i]=Number(arr[i])
        }else{
            arr[i]=-Number(arr[i])
        }
        sum=sum+arr[i]
    }
    return sum
};