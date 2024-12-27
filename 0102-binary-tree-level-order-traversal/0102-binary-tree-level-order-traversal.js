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
 * @return {number[][]}
 */
var levelOrder = function (root) {
        let result = []
    if (!root) return result

    let queue = [root]
    while (queue.length) {
        let level = []
        let queLen = queue.length //storing current level length safely
        for (let i = 0; i < queLen; i++) {
            let currentNode = queue.shift()
            level.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        result.push(level)
    }
    return result
};