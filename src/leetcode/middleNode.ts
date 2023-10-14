class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const listN = new ListNode(1);
listN.next = new ListNode(2);
listN.next.next = new ListNode(3);
listN.next.next.next = new ListNode(4);
listN.next.next.next.next = new ListNode(5);
listN.next.next.next.next.next = new ListNode(6);

// console.log(listN);

function middleNode(head: ListNode | null): ListNode | null {
  let tmpLength = [0];
  calculateLength(head, tmpLength);
  const middle = calculateMiddle(tmpLength[0]);

  let i = 1;

  while (head) {
    if (i === middle) return head;
    head = head.next;
    i++;
  }

  return null;
}

function calculateLength(head: ListNode | null, tmpLength: number[]) {
  if (head === null) return;
  tmpLength[0] = tmpLength[0] + 1;
  return calculateLength(head.next, tmpLength);
}

function calculateMiddle(len: number) {
  const div = Math.floor(len / 2);
  const mod = len % 2;
  return div + (mod > 0 ? mod : 1);
}

console.log(middleNode(listN));
