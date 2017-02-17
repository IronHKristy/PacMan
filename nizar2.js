//find nomad and return his position
var rowC;
var colC;

function findNomad() {
board.forEach(function (row, rowIndex) {
  row.forEach(function (col, colIndex) {
    if(col === 'nomad') {
      rowC = rowIndex;
      colC = colIndex;
    }
  });
});
  return rowC, colC;
}

// move nomad based on random number generator
// 0 - 3

function moveNomad() {
  findNomad();
  // findNomad2();
  // console.log(randomDir);
  if (rowC === undefined || colC === undefined) {
    return;
  }


  var randomDir = Math.floor(Math.random() * 4);

  switch(randomDir) {
    case 0:
      moveUp(rowC, colC, 'nomad');
      break;
    case 1:
      moveDown(rowC, colC, 'nomad');
      break;
    case 2:
      moveLeft(rowC, colC, 'nomad');
      break;
    case 3:
      moveRight(rowC, colC, 'nomad');
      break;
  }
  return;
}


//lose function

//also tests for collision with wall and update position depending on results
function moveLeft(row, col, character) {
  if
    (board[row][col - 1] === 'path') {
    board[row][col - 1] = character;
    board[row][col] = 'path';
  } else {
    return;
  }
  renderBoard();
}


function moveRight(row, col, character) {

  if(board[row][col + 1] === 'path') {
    board[row][col + 1] = character;
    board[row][col] = 'path';
  } else if
    (character === 'pizza' && board[row][col + 1] === 'eSign2') {
      board[5][8] = character;
      board[1].splice(1, 16, "nomad");
  } else {
    return;
  }
  renderBoard();
}


function moveUp (row, col, character) {
  transposeMatrix();
  moveLeft(col, row, character);
  transposeMatrix();
  renderBoard();
}

function moveDown (row, col, character) {
  transposeMatrix();
  moveRight(col, row, character);
  transposeMatrix();
  renderBoard();
}
