class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = new ListNode(3);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(0);
linkedList.next.next.next = new ListNode(-4);

// Link the last node to the second node
linkedList.next.next.next.next = linkedList.next;

// console.log(linkedList);

function hasCycle(root: ListNode | null) {
  let current = root;

  const map = new Map<number, boolean>();

  while (current.next !== null) {
    if (map.has(current.val)) return true;
    map.set(current.val, true);
    current = current.next;
  }
  return false;
}

console.log(hasCycle(linkedList));
