const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    if (e === "\r") return null;
    return Number(e);
  });

const getMostCalories = input => {
  console.log(input)
  console.log(input.length)
  console.log(typeof input[0])
  let maxCal = 0;

  let i = 0;
  while (i < input.length) {
    let currCal = 0;

    while (input[i]) {
      currCal += input[i];
      i++;
    }

    if (maxCal <= currCal) maxCal = currCal;

    i++;
  }

  return maxCal;
}

const advOutput = getMostCalories(advInput);

console.log('calories', advOutput);
