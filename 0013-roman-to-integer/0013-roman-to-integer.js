/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let rom={'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1}
    let int=0
    for(let i=0;i<s.length;i++){
        if(i+1<s.length && rom[s[i]]<rom[s[i+1]]){
            int-=rom[s[i]]
        }else{
          int+=rom[s[i]]
        }

    }
    return int
};