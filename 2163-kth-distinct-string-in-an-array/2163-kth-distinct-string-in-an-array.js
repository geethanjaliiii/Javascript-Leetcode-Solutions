/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let dis=[]
    for(let i=0;i<arr.length;i++){
        let isUni=1
        for(let j=0;j<arr.length;j++){
            if(i!=j && arr[i]==arr[j]){
                isUni=0
              break
            }
        }
        if(isUni){
            dis.push(arr[i])
        }
    }
    console.log(dis)
    if(k<=dis.length){
        return dis[k-1]
    }
   return ""
};