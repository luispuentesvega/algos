// Time complexity O(n log n) -> where n is the length of the string
function longestPalindrome(s: string): number {
  let longest = 0;
  let i = 0;

  const tmp = [...s];
  tmp.sort(); // O(n log (n))

  if (tmp.length === 1) return 1;

  while (i < tmp.length - 1) {
    //O (n)
    let current = tmp[i];
    let next = tmp[i + 1];

    if (current === next) {
      longest += 2;
      i += 2;
    } else {
      i++;
    }
  }
  return longest !== tmp.length ? longest + 1 : longest;
}

console.log(longestPalindrome("aba"));
