const fs = require('fs');

const advInput = fs.readFileSync('./sample.txt')
  .toString();

const areAllUnique = arr => {
  return arr.every(e => {
    let i = 0;
    arr.forEach(l => {
      if (l === e) i++;
    });
    return i === 1 ? true : false;
  });
}

const getIndexOfFirstUniqueFour = input => {
  let i = 13;
  while (i < input.length) {
    if (
      areAllUnique([
        input[i-13],
        input[i-12],
        input[i-11],
        input[i-10],
        input[i-9],
        input[i-8],
        input[i-7],
        input[i-6],
        input[i-5],
        input[i-4],
        input[i-3],
        input[i-2],
        input[i-1],
        input[i]]
    )) {
      break;
    }
    i++;
  }
  return i + 1;
}

console.log(getIndexOfFirstUniqueFour(advInput));
