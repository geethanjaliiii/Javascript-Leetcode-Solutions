/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let arr=title.split(' ')
   arr=  arr.map((word)=>{
        if(word.length<3){
            return word.toLowerCase()
        }else{
            return word[0].toUpperCase()+word.slice(1).toLowerCase()
        }
     })
  return arr.join(" ")
};