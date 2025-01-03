/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */


var cloneGraph = function (node) {
    if (!node) return null
    //to keep track of already explored neighbouring nodes
    let clonedMap = new Map()

    //helper function for dfs cloning
    var dfs = (currentNode) => {
        //if we have already explored the node,just return it
        if (clonedMap.has(currentNode)) {
            return clonedMap.get(currentNode)
        }
        //if not explored, create a clone
        let clone = new Node(currentNode.val)
        clonedMap.set(currentNode, clone)
        for (let neighbor of currentNode.neighbors) {
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }
    return dfs(node)
};
