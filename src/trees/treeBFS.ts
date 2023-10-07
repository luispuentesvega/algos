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

console.log(tree);

/*
BFS: 6,2,8,0,4,7,9,3,5

FIFO - Queue - It explores all the nodes Left to Right, Level by Level
*/
function TreeBFS(root: TreeNode) {
  // define a queue
  const queue = [root];

  while (queue.length != 0) {
    const current = queue.shift();
    console.log(current.val);
    // add to the queue
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

TreeBFS(tree);
