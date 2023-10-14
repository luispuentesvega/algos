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

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

// console.log(tree);
function maxDepth(root: TreeNode | null) {
  if (root === null) return 0;
  let left = maxDepth(root.left); //1
  let right = maxDepth(root.right);

  const max = 1 + Math.max(left, right);
  console.log(`(${root.val}) -> [${left},${right}] = ${max}`);
  return max;
}

console.log(maxDepth(tree));
