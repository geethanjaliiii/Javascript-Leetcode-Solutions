/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let freq={}
    let uni=[]
    for(let i of arr){
        freq[i]=(freq[i] || 0)+1
    }
    for(let ele of arr){
        if(freq[ele]===1){
           uni.push(ele)
        }
    }
    if(k<=uni.length){
        return uni[k-1]
    }else{
        return ""
    }
//     let dis=[]
//     for(let i=0;i<arr.length;i++){
//         let isUni=1
//         for(let j=0;j<arr.length;j++){
//             if(i!=j && arr[i]==arr[j]){
//                 isUni=0
//               break
//             }
//         }
//         if(isUni){
//             dis.push(arr[i])
//         }
//     }
//     console.log(dis)
//     if(k<=dis.length){
//         return dis[k-1]
//     }
//    return ""
};