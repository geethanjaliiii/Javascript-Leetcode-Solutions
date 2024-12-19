/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(char==='(' || char=='[' || char==='{'){
            stack.push(char)
        }else if(char==')' ||char=='}' ||char==']' ){
              if(isEmpty(stack)){
                 console.log("stack empty")
                return false
              }
              let top=stack.pop()
              if(char==')' && top!='(' ||
              char===']' && top!='['||
              char==='}' && top!='{'){//not correct order
              console.log("not in correct order",top,char)
                return false
              }
        }
       
    }
     if(stack.length!=0){
         console.log("not valid")
        return false
     }else{
        return true
     }
};
function isEmpty(stack){
    return stack.length===0
}