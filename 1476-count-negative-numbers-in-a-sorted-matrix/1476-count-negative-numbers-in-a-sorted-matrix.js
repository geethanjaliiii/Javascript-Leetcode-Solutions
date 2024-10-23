/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
 return grid.flat().filter((e)=>e<0).length
};