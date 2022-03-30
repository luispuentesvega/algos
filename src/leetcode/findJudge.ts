// 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/
function findJudge(n: number, trust: number[][]) {
  let in_trust = new Array(n).fill(0);
  let out_trust = new Array(n).fill(0);

  for (let i = 0; i < trust.length; i++) {
    const pos = trust[i][1] - 1;
    const pos_outro = trust[i][0] - 1;
    in_trust[pos] = in_trust[pos] ? in_trust[pos] + 1 : 1;
    out_trust[pos_outro] = out_trust[pos_outro] ? out_trust[pos_outro] + 1 : 1;
  }
  console.log(in_trust);
  console.log(out_trust);

  for (let i = 0; i < n; i++) {
    if (in_trust[i] === n - 1 && out_trust[i] === 0) {
      return i + 1;
    }
  }
  return -1;
}

let n = 2, trust = [[1, 2]];
console.log('TEST CASE 1: ', findJudge(n, trust) === 2 ? 'PASSED' : 'FAILED');

n = 3, trust = [[1, 3], [2, 3]];
console.log('TEST CASE 2: ', findJudge(n, trust) === 3 ? 'PASSED' : 'FAILED');

n = 3, trust = [[1, 3], [2, 3], [3, 1]];
console.log('TEST CASE 2: ', findJudge(n, trust) === -1 ? 'PASSED' : 'FAILED');

n = 4;
trust = [[1, 3], [1, 4], [2, 3]];
console.log('TEST CASE 2: ', findJudge(n, trust) === -1 ? 'PASSED' : 'FAILED');
