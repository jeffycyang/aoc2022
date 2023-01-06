const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    const o = e.split('');
    return [e[0],e[2]];
  });

const dMap = {
  'A': 'X',
  'B': 'Y',
  'C': 'Z'
};

const wMap = {
  'A': 'Y',
  'B': 'Z',
  'C': 'X'
};

const lMap = {
  'A': 'Z',
  'B': 'X',
  'C': 'Y'
};

const sMap = {
  'X': 1,
  'Y': 2,
  'Z': 3
};

const oMap = {
  'X': 0,
  'Y': 3,
  'Z': 6
};

const getScore = input => {
  return input.reduce((acc, curr) => {
    const [opp, outcome] = curr;
    if (outcome === 'X') return acc + oMap[outcome] + sMap[lMap[opp]];
    if (outcome === 'Y') return acc + oMap[outcome] + sMap[dMap[opp]];
    if (outcome === 'Z') return acc + oMap[outcome] + sMap[wMap[opp]];
  }, 0);
}

const advOutput = getScore(advInput);

console.log(advOutput);
