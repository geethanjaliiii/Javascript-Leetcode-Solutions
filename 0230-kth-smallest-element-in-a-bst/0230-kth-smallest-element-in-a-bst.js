/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k,) {
  let res=[]
var dfs = function (root, res) {
    if (root) {
        if (root.left) dfs(root.left, res)
       res.push(root.val)
        if (root.right) dfs(root.right,res)
    }
   
}
dfs(root,res)
console.log(res)
return res[k-1]
};

