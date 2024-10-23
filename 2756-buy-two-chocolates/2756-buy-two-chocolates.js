/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let spend = 0
    for (let i = 0; i < prices.length; i++) {
        let j=i+1
        while(j<prices.length){
            if (!spend && prices[i] + prices[j] <= money) {
                spend = prices[i] + prices[j]
            }
            else if (prices[i] + prices[j] <= money && prices[i]+prices[j]<spend){
                spend=prices[i]+prices[j]
            }

            j++
        }
    }
    return money - spend
};