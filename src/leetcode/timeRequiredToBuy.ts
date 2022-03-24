// 2073. Time Needed to Buy Tickets

function timeRequiredToBuy(tickets: number[], k: number): number {
  let loop = true;
  let timeTaken = 0;
  // loop the array til tickets[k] is zero
  // track how many tickets have been sold == time spen d
  while (loop) {
    for (let i = 0; i < tickets.length; i++) {
      let remainingUserTickets = tickets[i];
      if (remainingUserTickets > 0) {
        tickets[i] = remainingUserTickets - 1;
        timeTaken++;
      }
      if (tickets[k] === 0) {
        loop = false;
        break;
      }
    }
  }
  return timeTaken;
};


let tickets = [2, 3, 2], k = 2;
console.log('TEST CASE 1: ', timeRequiredToBuy(tickets, k) === 6 ? 'PASSED' : 'FAILED');


tickets = [5, 1, 1, 1], k = 0;
console.log('TEST CASE 2: ', timeRequiredToBuy(tickets, k) === 8 ? 'PASSED' : 'FAILED');


/*
[2, 3, 2], k = 2
 A, B, C

 Initial Values
 A = 2
 B = 3
 C = 2
 First round
 A = 1
 B = 2
 C = 1
 Second Round
 A = 0
 B = 1
 C = 0
 -> 6 seconds to buy the ticket, when C = 0


 ----------------------
 tickets = [5,1,1,1], k = 0
 Initial Values
 A = 5
 B = 1
 C = 1
 D = 1
 First Round
 A = 4
 B = 0
 C = 0
 D = 0

 Second Round
 A = 3

 Third Round
 A = 2

 Fourth Round
 A = 1

 Fifth Round
A = 0

-> 8 seconds

*/
