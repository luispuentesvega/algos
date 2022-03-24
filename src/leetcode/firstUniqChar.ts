// 387. First Unique Character in a String
// Given a string s, find the first non - repeating character in it and return its index.If it does not exist, return -1.

function firstUniqChar(s: string): number {
  let charMap = new Map();

  for (let c of [...s]) {
    let num = 1;
    if (charMap.has(c)) {
      num = 1 + charMap.get(c);
    }
    charMap.set(c, num);
  }

  let index = 0;
  for (let [key, val] of charMap) {
    console.log(key, val);
    if (val === 1) {
      return index;
    }
    index++;
  }

  return -1;
};

let s = "leetcode";
console.log('TEST CASE 1: ', firstUniqChar(s) === 0 ? 'PASSED' : 'FAILED');

s = "loveleetcode";
console.log('TEST CASE 1: ', firstUniqChar(s) === 2 ? 'PASSED' : 'FAILED');

s = "aabb";
console.log('TEST CASE 1: ', firstUniqChar(s) === -1 ? 'PASSED' : 'FAILED');

/*
Input: s = "leetcode"
Output: 0

1. loop the string
2. count how many times there is any character
3. retrieve the first that has just one

l=1
e=2
t=1
c=1
o=2
d=1
e=1


*/
