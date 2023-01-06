const fs = require('fs');

const advInput = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(e => e.replace('\r', '').split(''));

const tBoard = input => {
  const board = [];
  let i = 0;
  while (input[i+1].length !== 0) {
    board.push(input[i].reduce((acc, curr, ind, arr) => {
      if ((ind + 1) % 4 === 0) {
        if (arr[ind - 1] === ']') acc.push(arr[ind - 2]);
        if (arr[ind - 1] === ' ') acc.push('');
      }
      if (ind === arr.length - 1) {
        if (curr === ']') acc.push(arr[ind - 1]);
        if (curr === ' ') acc.push('');
      }
      return acc;
    }, []));
    i++;
  }
  return board;
}

tMoves = input => {
  const moves = [];
  let i = 0;
  while (input[i].length !== 0) i++;
  i++;
  for (let j = i; j < input.length; j++) {
    moves.push(
      input[j]
        .join('')
        .split(' ')
        .filter(e => !isNaN(parseFloat(e)))
        .map(e => Number(e))
    );
  }
  return moves;
}

const advOut = input => {
  const board = tBoard(input);
  const moves = tMoves(input);
  for (let i = 0; i < moves.length; i++) {
    const [
      quantity,
      fromColP1,
      toColP1
    ] = moves[i];
    let qMoved = quantity;
    while (qMoved !== 0) {
      let j = 0;
      while (board[j][fromColP1 - 1] === '') j++;

      const crate = board[j][fromColP1 - 1];
      board[j][fromColP1 - 1] = '';

      if (board[0][toColP1 - 1] !== '') {
        board.unshift(Array(board[j].length).fill(''));
        board[0][toColP1 - 1] = crate;
      } else {
        let k = 0;
        while (k < board.length && board[k][toColP1 - 1] === '') k++;
        k--;
        board[k][toColP1 - 1] = crate;
      }

      qMoved--;
    }
  }

  const colLength = board[0].length;
  const rowLength = board.length;
  let str = '';
  for (let i = 0; i < colLength; i++) {
    let j = 0;
    while (j < rowLength && board[j][i] === '') j++;
    if (board[j][i] !== '') str = str.concat(board[j][i]);
  }
  return str;
}

console.log(advOut(advInput));
