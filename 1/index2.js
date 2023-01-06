const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    if (e === "\r") return null;
    return Number(e);
  });

const getMostCalories = input => {
  // console.log(input)
  // console.log(input.length)
  const maxCals = [0, 0, 0];

  let i = 0;
  while (i < input.length) {
    let currCal = 0;

    while (input[i]) {
      currCal += input[i];
      i++;
    }

    if (maxCals.some(e => e === 0)) {
      const j = maxCals.findIndex(e => e === 0);
      maxCals[j] = currCal;
    } else {
      if (maxCals.some(e => e <= currCal)) {
        maxCals.sort((a,b)=> b - a);
        maxCals.unshift(currCal);
        maxCals.pop();
      }
    }

    i++;
  }

  console.log(maxCals)
  return maxCals.reduce((acc, curr) => acc + curr, 0);
}

const advOutput = getMostCalories(advInput);

console.log('calories', advOutput);
