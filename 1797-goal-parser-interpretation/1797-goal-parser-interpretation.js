/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let arr=command.split('')
    let str=""
     console.log(arr)
     for(let i=0;i<arr.length;i++){
        if(arr[i]=='G'){
            str+="G"
        }else if(arr[i]=='(' && arr[i+1]===')'){
            str+='o'
        }else if(arr[i]==='(' && arr[i+1]==='a'){
            str+='al'
        }
     }
     return str

};