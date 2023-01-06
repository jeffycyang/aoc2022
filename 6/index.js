const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
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
  let i = 3;
  while (i < input.length) {
    if (areAllUnique([input[i-3], input[i-2], input[i-1], input[i]])) {
      break;
    }
    i++;
  }
  return i + 1;
}

console.log(getIndexOfFirstUniqueFour(advInput));
