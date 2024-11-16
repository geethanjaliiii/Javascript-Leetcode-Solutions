/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

let map= new Map()
for(let i=0;i<arr.length;i++){
 
    if(arr[i]%2==0 && map.has(arr[i]/2)){
        return true
    }
    if(map.has(2*arr[i])){
        return true
    }
       map.set(arr[i],i)
}
return false
};