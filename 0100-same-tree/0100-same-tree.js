/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    //1.first check if both nodes are null
    if (!p && !q) return true
    //2.sec check if anyone is null
    if (!p || !q) return false
    //check if values are different
    if(p.val!=q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};