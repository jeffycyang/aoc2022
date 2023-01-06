const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    return e.replace('\r', '').split(',');
  });

const getContainedCount = input => {
  let count = 0;

  input.forEach(pair => {
    const [first, second] = pair;
    firstHead = Number(first.split('-')[0]);
    firstTail = Number(first.split('-')[1]);
    secondHead = Number(second.split('-')[0]);
    secondTail = Number(second.split('-')[1]);
    if (
      (firstHead <= secondHead && firstTail >= secondTail) ||
      (secondHead <= firstHead && secondTail >= firstTail)
    ) {
      count++;
    }
  });

  return count;
}

const advOutput = getContainedCount(advInput);

console.log(advOutput);
