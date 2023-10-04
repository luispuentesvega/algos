/*
solution #1:
1. compare string's length, if not equal -> returns false
2. sort the strings
3. compare each position if they have the same character, if not return false
4. return true
*/

/*
Time Complexity: O(n log n)
Space Complexity: O(N)
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const tmpS = [...s].sort(); // O(n log(n))
  const tmpT = [...t].sort(); //  O(n log(n))

  // O(N)
  for (let i = 0; i < tmpS.length; i++) {
    if (tmpS[i] !== tmpT[i]) return false;
  }
  return true;
}

const s1 = "anagram";
const t = "nagarem";

console.log(isAnagram(s1, t));
