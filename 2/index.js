const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    const o = e.split('');
    return [e[0],e[2]];
  });

const map = {
  'A': 'X',
  'B': 'Y',
  'C': 'Z'
};

const sMap = {
  'X': 1,
  'Y': 2,
  'Z': 3
};

const getScore = input => {
  return input.reduce((acc, curr) => {
    const [opp, you] = curr;
    // draw
    if (map[opp] === you) return acc + 3 + sMap[you];
    // wins
    if (
      (opp === 'A' && you === 'Y') ||
      (opp === 'B' && you === 'Z') ||
      (opp === 'C' && you === 'X')
    ) return acc + 6 + sMap[you];
    // lose
    if (
      (opp === 'A' && you === 'Z') ||
      (opp === 'B' && you === 'X') ||
      (opp === 'C' && you === 'Y')
    ) return acc + sMap[you];
  }, 0);
}

const advOutput = getScore(advInput);

console.log(advOutput);
