/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
   prices.sort((a,b)=>a-b)
   console.log(prices)
   if(prices[0]+prices[1]<=money){
    return money-(prices[0]+prices[1])
   }
   return money
};