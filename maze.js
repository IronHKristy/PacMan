var board = [
 //col 0     col 1   col 2   col 3   col 4   col 5   col 6   col 7   col 8   col 9   col 10  col 11  col 12  col 13  col 14  col 15  col 16  col 17
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 0
  ['eSign1', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'eSign2'],//row 1
  ['wall',   'path', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'path', 'wall' ],//row 2
  ['wall',   'path', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall' ],//row 3
  ['wall',   'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall' ],//row 4
  ['wall',   'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall' ],//row 5
  ['pacman', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path' ],//row 6
  ['wall',   'wall', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'wall', 'wall' ],//row 7
  ['wall',   'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall' ],//row 8
  ['wall',   'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'wall' ],//row 9
  ['wall',   'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall' ],//row 10
  ['eSign3', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'eSign4'],//row 11
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 12
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 13
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 14
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 15
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ],//row 16
  ['wall',   'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall' ] //row 17
];


function renderBoard () {
  $('#board').empty();
  board.forEach(function (row) {
    row.forEach(function (grid) {
      var gridClass;
      if (grid === 'wall') {
        gridClass = 'wall';
      } else if (grid === 'path') {
        gridClass = 'path';
      } else if (grid === 'pacman') {
        gridClass = 'pacman';
      } else if (grid === 'eSign1') {
        gridClass = 'eSign1';
      } else if (grid === 'eSign2') {
        gridClass = 'eSign2';
      } else if (grid === 'eSign3') {
        gridClass = 'eSign3';
      } else if (grid === 'eSign4') {
        gridClass = 'eSign4';
      } else if (grid === 'nizar') {
        gridClass = 'nizar';
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
    if(col === 'pacman') {
      rowA = rowIndex;
      colB = colIndex;
    }
  });
  });
return rowA, colB;
}


//find nizar and return his position
var rowC;
var colD;

function findNizar() {
board.forEach(function (row, rowIndex) {
  row.forEach(function (col, colIndex) {
    if(col === 'nizar') {
      rowC = rowIndex;
      colD = colIndex;
    }
  });
});
  return rowC, colD;
}

// move nizar based on random number generator
// 0 - 3

function moveNizar() {
  findNizar();
  // console.log(randomDir);
  if (rowC === undefined || colD === undefined) {
    return;
  }


  var randomDir = Math.floor(Math.random() * 4);

  switch(randomDir) {
    case 0:
      moveUp(rowC, colD, 'nizar');
      break;
    case 1:
      moveDown(rowC, colD, 'nizar');
      break;
    case 2:
      moveLeft(rowC, colD, 'nizar');
      break;
    case 3:
      moveRight(rowC, colD, 'nizar');
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
  } else if
    (character === 'pacman' && board[row][col - 1] === 'eSign1') {
      board[5][8] = character;
      board[1].splice(1, 1, "nizar");


  } else {
    return;
  }
  renderBoard();
}


function moveRight(row, col, character) {

  if(board[row][col + 1] === 'path') {
    board[row][col + 1] = character;
    board[row][col] = 'path';
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


$(document).keydown(function(ev) {
    var acceptableKeys = [37, 38, 39, 40];
    if (!acceptableKeys.includes(ev.keyCode)) {
      return;
    }
    ev.preventDefault();
    findTwo();
    switch(ev.keyCode) {
      case 38:
        moveUp(rowA, colB, 'pacman');
        break;
      case 40:
        moveDown(rowA, colB, 'pacman');
        break;
      case 37:
        moveLeft(rowA, colB, 'pacman');
        break;
      case 39:
        moveRight(rowA, colB, 'pacman');
        break;
    }

    moveNizar();
    moveNizar();
    moveNizar();
  });

renderBoard();
