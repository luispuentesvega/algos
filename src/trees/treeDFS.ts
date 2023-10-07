import { TreeNode } from "./TreeNode";

const tree = new TreeNode(6);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(0);
tree.left.right = new TreeNode(4);
tree.left.right.left = new TreeNode(3);
tree.left.right.right = new TreeNode(5);

tree.right = new TreeNode(8);
tree.right.left = new TreeNode(7);
tree.right.right = new TreeNode(9);

/*
BFS: 6,2,8,0,4,7,9,3,5

FIFO - Stack - It explores as far as possible before backtracking
*/
function dfsPreOrder(root: TreeNode | null, result: number[] = []): number[] {
  if (root !== null) {
    result.push(root.val);
    dfsPreOrder(root.left, result);
    dfsPreOrder(root.right, result);
  }
  return result;
}

const result = [];
const res = dfsPreOrder(tree, result);
console.log(res);
