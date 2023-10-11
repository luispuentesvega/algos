class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(3);

// console.log(linkedList);

function traverse(list: ListNode) {
  let current = list;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

function revert(list: ListNode) {
  let prev = null;
  let cur = list;

  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}
