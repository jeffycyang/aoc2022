const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    return e.replace('\r', '');
  });

const alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getPriority = input => {
  let prio = 0;
  for (let i = 0; i < input.length; i += 3) {
    let letter;
    const first = input[i];
    const second = input[i+1];
    const third = input[i+2];
    const maxLength = Math.max(first.length, second.length, third.length);
    const sacks = [first, second, third];
    const largestSackIndex = sacks.findIndex(e => e.length === maxLength);
    const largestSack = sacks[largestSackIndex];
    let otherSacks = sacks.slice()
    otherSacks.splice(largestSackIndex, 1);
    for (let j = 0; j < largestSack.length; j++) {
      if (otherSacks[0].includes(largestSack[j]) && otherSacks[1].includes(largestSack[j])) {
        letter = largestSack[j];
      }
    }
    prio += alph.findIndex(e => e === letter) + 1
  }

  return prio;
}

const advOutput = getPriority(advInput);

console.log(advOutput);
