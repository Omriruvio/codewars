// kata - https://www.codewars.com/kata/5574835e3e404a0bed00001b

// handshakes - number
// return - minimum number of participants assuming no two people shake hands more than once

const getParticipants = (handshakes) => {
  let participants = 0;
  let currentHandshakes = 0;
  while (currentHandshakes < handshakes) {
    participants++;
    currentHandshakes += participants - 1;
  }
  return participants;
};

console.log(getParticipants(0), 0);
console.log(getParticipants(1), 2);
console.log(getParticipants(3), 3);
console.log(getParticipants(6), 4);
console.log(getParticipants(10), 5);
console.log(getParticipants(7), 5);
