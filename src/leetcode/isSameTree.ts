/**
 * https://leetcode.com/problems/same-tree/
 * 
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// 1. if p and q are both null return true
// 2. if p is null while q is not null OR p is not null while q is null OR vals are not the same, return false
// 3. return isSameTree(left for both) and isSameTree(right for both)

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
};

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if ((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
