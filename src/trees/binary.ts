class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const left = invertTree(root.left); //2
  root.left = invertTree(root.right); // -> 7
  root.right = left;

  return root;
}

// creating the tree
const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

tree.right = new TreeNode(7);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

const invertedTree = invertTree(tree);

// const left = tree.left;
// tree.left = tree.right;
// tree.right = left;

// const left1 = tree.left.left;
// tree.left.left = tree.left.right;
// tree.left.right = left1;

console.log(invertedTree);
