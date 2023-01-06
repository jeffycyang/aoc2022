const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => {
    return e.replace('\r', '').split(',');
  });

const getOverlapCount = input => {
  let count = 0;

  input.forEach(pair => {
    const [first, second] = pair;
    firstHead = Number(first.split('-')[0]);
    firstTail = Number(first.split('-')[1]);
    secondHead = Number(second.split('-')[0]);
    secondTail = Number(second.split('-')[1]);
    if (
      (firstTail >= secondHead && firstTail <= secondTail) ||
      (secondTail >= firstHead && secondTail <= firstTail)
    ) {
      count++;
    }
  });

  return count;
}

const advOutput = getOverlapCount(advInput);

console.log(advOutput);
