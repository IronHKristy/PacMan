// //find nizar2 and return his position
// var rowC;
// var colC;
//
// function findNizar2() {
// board.forEach(function (row, rowIndex) {
//   row.forEach(function (col, colIndex) {
//     if(col === 'nizar2') {
//       rowC = rowIndex;
//       colC = colIndex;
//     }
//   });
// });
//   return rowC, colC;
// }
//
// // move nizar2 based on random number generator
// // 0 - 3
//
// function moveNizar2() {
//   findNizar2();
//   // findNizar22();
//   // console.log(randomDir);
//   if (rowC === undefined || colC === undefined) {
//     return;
//   }
//
//
//   var randomDir = Math.floor(Math.random() * 4);
//
//   switch(randomDir) {
//     case 0:
//       moveUp(rowC, colC, 'nizar2');
//       break;
//     case 1:
//       moveDown(rowC, colC, 'nizar2');
//       break;
//     case 2:
//       moveLeft(rowC, colC, 'nizar2');
//       break;
//     case 3:
//       moveRight(rowC, colC, 'nizar2');
//       break;
//   }
//   return;
// }
//
//
// //lose function
//
// //also tests for collision with wall and update position depending on results
// function moveLeft(row, col, character) {
//   if
//     (board[row][col - 1] === 'path') {
//     board[row][col - 1] = character;
//     board[row][col] = 'path';
//   } else {
//     return;
//   }
//   renderBoard();
// }
//
//
// function moveRight(row, col, character) {
//
//   if(board[row][col + 1] === 'path') {
//     board[row][col + 1] = character;
//     board[row][col] = 'path';
//   } else if
//     (character === 'pizza' && board[row][col + 1] === 'eSign2') {
//       board[5][8] = character;
//       board[1].splice(1, 16, "nizar2");
//   } else {
//     return;
//   }
//   renderBoard();
// }
//
//
// function moveUp (row, col, character) {
//   transposeMatrix();
//   moveLeft(col, row, character);
//   transposeMatrix();
//   renderBoard();
// }
//
// function moveDown (row, col, character) {
//   transposeMatrix();
//   moveRight(col, row, character);
//   transposeMatrix();
//   renderBoard();
// }
