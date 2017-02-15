var board = [
  //column 0       column 1        column 2        column 3        column 4        column 5        column 6        column 7        column 8        column 9        column 10       column 11       column 12       column 13       column 14       column 15       column 16       column 17
  ['wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular'],//row 0
  ['door1',        'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular'],//row 1
  ['wall-regular', 'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular'],//row 2
  ['wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular'],//row 3
  ['wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'wall-regular'],//row 4
  ['wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular'],//row 5
  ['path-floor',   'pacman',       'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor'  ],//row 6
  ['wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular'],//row 7
  ['wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular'],//row 8
  ['wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular'],//row 9
  ['wall-regular', 'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular'],//row 10
  ['wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular'],//row 11
  ['wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular'] //row 12
];



function renderBoard () {
    //$('#board').empty();

  $('#board').empty();
  board.forEach(function (row) {
    row.forEach(function (grid) {
      var gridClass;
      if (grid === 'wall-regular') {
        gridClass = 'wall-regular';
      } else if (grid === 'path-floor') {
        gridClass = 'path-floor';
      } else if (grid === 'pacman') {
        gridClass = 'pacman';
      } else if (grid === 'door1') {
        gridClass = 'door1';
}
        //don't think this will work because this code has already ran once function is called
      // } else if (grid === 'nizar')
      //   gridClass = 'nizar';
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

//also tests for collision with wall and update position depending on results
function moveLeft() {
  findTwo();
  if
    (board[rowA][colB - 1] === 'path-floor') {
    board[rowA][colB - 1] = 'pacman';
    board[rowA][colB] = 'path-floor';
  } else if
    (board[rowA][colB - 1] === 'door1') {

      gridClass = 'nizar';
      var html = '<div class="square ' + gridClass + '"></div>';


    board[1][1] = 'nizar';
    console.log(board[rowA][colB]);
    board[rowA][colB] = 'path-floor/';
    // board[1][0] = 'door1';
    board[5][8] = 'pacman';

    $('#board').append(html);
  } else {
    return;
  }
  renderBoard();
}


function moveRight() {
  findTwo();
  if(board[rowA][colB + 1] === 'path-floor') {
    board[rowA][colB + 1] = 'pacman';
    board[rowA][colB] = 'path-floor';

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
