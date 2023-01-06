const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    const mid = e.length/2;
    return [e.slice(0, mid), e.slice(mid)];
  });

const alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getPriority = input => {
  let prio = 0;

  input.forEach(sack => {
    let letter;
    const [first, second] = sack;
    for (let i = 0; i < first.length; i++) {
      if (second.includes(first[i])) {
        letter = first[i];
        break;
      }
    }
    prio += alph.findIndex(e => e === letter) + 1;
  })

  return prio;
}

const advOutput = getPriority(advInput);

console.log(advOutput);
