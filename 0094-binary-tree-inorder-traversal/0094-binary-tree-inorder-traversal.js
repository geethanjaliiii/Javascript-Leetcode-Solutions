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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr=[]
 
     helper(root,arr)
     return arr
};
var helper=function(root,result){
    if(root){
        helper(root.left,result)
        result.push(root.val)
        helper(root.right,result)
    }
    
}