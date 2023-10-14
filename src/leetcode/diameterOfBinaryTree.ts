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

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(5);
tree.left.left = new TreeNode(4);

tree.right = new TreeNode(3);

// console.log(tree);
function diameterOfBinaryTree(root: TreeNode | null) {
  let diameter = 0;
  function maxDepth(root: TreeNode | null) {
    if (root === null) return 0;

    let left = maxDepth(root.left); //2 -> 4
    let right = maxDepth(root.right); // 5

    if (left + right > diameter) {
      diameter = left + right;
    }

    const max = Math.max(left, right) + 1;
    return max;
  }

  maxDepth(root);

  return diameter;
}

console.log(diameterOfBinaryTree(tree));
