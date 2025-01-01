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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root && !subRoot)  return true
    
    if (!root || !subRoot)  return false

    //find root of subtree in root
    if (isIdentical(root, subRoot)) return true
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

var isIdentical = (t, s) => {
    if (!t && !s) {
        return true
    } else if (!t || !s) {
        return false
    }
    return (t.val == s.val && isIdentical(t.left, s.left) && isIdentical(t.right, s.right))
}