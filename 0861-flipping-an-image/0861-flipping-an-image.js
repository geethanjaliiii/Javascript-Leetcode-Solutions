/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  const ans=  image.map((arr)=>arr.reverse()).map(arr=>{
        for(let i=0;i<arr.length;i++){
            if(arr[i]==0){
                arr[i]=1
            }else {
                arr[i]=0
            }
        }
        return arr
    })
    //for(let i=0;i<image.length;i++){
   //     let start=0;
    //     let end=image[i].length-1;
    //      //console.log(start,end,image[i][end])
    //     while(start<=end){
    //         console.log(start,end)
    //         [image[i][start],image[i][end]]=[image[i][end],image[i][start]]
    //         start++
    //         end--
    //     }
    // }
    console.log(image)
    return ans
};