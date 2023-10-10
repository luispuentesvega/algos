const ransomNote = "aa",
  magazine = "aab";

// O(n*m)
function canConstruct(ransomNote: string, magazine: string): boolean {
  const tmpMagazine = [...magazine];
  for (const l of ransomNote) {
    // O (n) where n is the length of ransomNote
    let found = false;
    for (let i = 0; i < tmpMagazine.length; i++) {
      // O(M) where n is the length of magazine
      if (l === tmpMagazine[i]) {
        found = true;
        tmpMagazine[i] = undefined;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

console.log(canConstruct(ransomNote, magazine));
