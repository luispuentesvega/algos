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

function diameterOfBinaryTree(root: TreeNode | null) {
  const res = [0];
  function dfs(root: TreeNode | null) {
    if (root === null) return -1;
    let left = dfs(root.left);
    let right = dfs(root.right);
    res[0] = Math.max(res[0], 2 + left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return res[0];
}

console.log(diameterOfBinaryTree(tree));
