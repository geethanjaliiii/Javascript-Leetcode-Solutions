/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
 
    for(let i=0;i<image.length;i++){
       let start=0;
        let end=image[i].length-1;
    
        while(start<=end){
           
           [image[i][start],image[i][end]]=[1-image[i][end],1-image[i][start]]
            start++
            end--
        }
    }

   return image
};