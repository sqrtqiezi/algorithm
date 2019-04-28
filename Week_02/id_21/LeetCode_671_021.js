/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    if (root === null || root.left === null || root.right === null) {
        return -1;
    }
    
    let min = Number.MAX_SAFE_INTEGER
    const stack = [root]
    while(stack.length > 0) {
        const node = stack.pop()
        if (node.val < min && node.val > root.val) {
            min = node.val
        }
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? -1 : min
};