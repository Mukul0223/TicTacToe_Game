let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false;
let moves = 0;

const cells = document.querySelectorAll('#board td');
const message = document.querySelector('#message');
const restartButton = document.querySelector('#restart');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (gameOver) return;

    let row = cell.parentElement.rowIndex;
    let col = cell.cellIndex;

    if (board[row][col] !== '') return;

    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (hasWinner(row, col)) {
      alert(currentPlayer + ' wins!');
      gameOver = true;
      return;
    }

    moves++;
    if (moves === 9) {
      alert('Tie game!');
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
});

restartButton.addEventListener('click', () => {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  gameOver = false;
  moves = 0;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
  message.textContent = '';
  message.classList.remove('X', 'O', 'tie');
});

function hasWinner(row, col) {
  if (
    board[row][0] === currentPlayer &&
    board[row][1] === currentPlayer &&
    board[row][2] === currentPlayer
  ) return true;

  if (
    board[0][col] === currentPlayer &&
    board[1][col] === currentPlayer &&
    board[2][col] === currentPlayer
  ) return true;

  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) return true;

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) return true;

  return false;
}

/* Authored by Mukul Yadav */