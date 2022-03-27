// 1700. Number of Students Unable to Eat Lunch
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

function countStudents(students: number[], sandwiches: number[]): number {
  let studentsEating = 0;
  let countStudents = students.length;

  let loopedTimes = 0;
  while (sandwiches.length > 0) {
    let currentStudent = students.shift();
    if (sandwiches[0] === currentStudent) {
      sandwiches.shift();
      studentsEating++;
    } else if (loopedTimes === countStudents * countStudents) {
      break;
    } else {
      students.push(currentStudent);
      loopedTimes++;
    }
  }
  return countStudents - studentsEating;
};

/*
students = [1,1,0,0], 
sandwiches = [0,1,0,1]
*/

let students = [1, 1, 0, 0],
  sandwiches = [0, 1, 0, 1];
console.log('TEST CASE 1: ', countStudents(students, sandwiches) === 0 ? 'PASSED' : 'FAILED');

students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1];
console.log('TEST CASE 1: ', countStudents(students, sandwiches) === 3 ? 'PASSED' : 'FAILED');


students = [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1];
sandwiches = [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0];
console.log('TEST CASE 3: ', countStudents(students, sandwiches) === 3 ? 'PASSED' : 'FAILED');
