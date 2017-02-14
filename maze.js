var board = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//row 0
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],//row 1
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1],//row 2
  [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],//row 3
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],//row 4
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],//row 5
  [0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],//row 6
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],//row 7
  [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],//row 8
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],//row 9
  [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],//row 10
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],//row 11
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//row 12
];


function renderBoard () {
    //$('#board').empty();

  $('#board').empty();
  board.forEach(function (row) {
    console.log(row);
    row.forEach(function (grid) {
      var gridClass;
      if (grid === 1) {
        gridClass = 'wall';
      } else if (grid === 0) {
        gridClass = 'space';
      } else if (grid === 2) {
        gridClass = 'pacman';
      }

      var html = '<div class="square ' + gridClass + '"></div>';

      $('#board').append(html);
    });
  });
}


//find pacman and return his position
var rowA;
var colB;


function findTwo() {
board.forEach(function (row, rowIndex) {
  row.forEach(function (col, colIndex) {
    if(col === 2) {
      rowA = rowIndex;
      colB = colIndex;
    }
  });
});
console.log(rowA + ', ' + colB);
return rowA, colB;
}

//also tests for collision with wall and update position depending on results
function moveLeft() {
  findTwo();
  if(board[rowA][colB - 1] === 0) {
    board[rowA][colB - 1] = 2;
    board[rowA][colB] = 0;

  } else {
    return;
  }
  renderBoard();
}


function moveRight() {
  findTwo();
  if(board[rowA][colB + 1] === 0) {
    board[rowA][colB + 1] = 2;
    board[rowA][colB] = 0;

  } else {
    return;
  }
  renderBoard();
}

function transposeMatrix () {
  for (var row = 0; row < board.length; row++) {
    for (var column = row+1; column < board.length; column++) {
      var temp = board[row][column];
      board[row][column] = board[column][row];
      board[column][row] = temp;
    }
  }
}

function moveUp () {
  transposeMatrix();
  moveLeft();
  transposeMatrix();
  renderBoard();
}

function moveDown () {
  transposeMatrix();
  moveRight();
  transposeMatrix();
  renderBoard();
}


$(document).keydown(function(ev) {
    var acceptableKeys = [37, 38, 39, 40];
    if (!acceptableKeys.includes(ev.keyCode)) {
      return;
    }
    ev.preventDefault();
    switch(ev.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
    }
  });

renderBoard();
