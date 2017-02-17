function moveNizar() {
  findNizar();

//if Nizar isn't on board yet, exit function.
  if (rowB === undefined || colB === undefined) {
      return;
}

//test directions and push available ones to array
var testDirections = [];
if (rowB - 1 === 'path') {
  testDirections.push('left');
}
if (rowB + 1 === 'path') {
  testDirections.push('right');
}
if (colB - 1 === 'path') {
  testDirections.push('up');
}
if (colB + 1 === 'path') {
  testDirections.push('down');
}

//store that array in availDirections then randomly pick one
var availDirections = Math.floor(Math.random() * testDirections.length);


switch(availDirections) {
  case 'up':
    moveUp(rowB, colB, 'nizar');
    break;
  case 'down':
    moveDown(rowB, colB, 'nizar');
    break;
  case 'left':
    moveLeft(rowB, colB, 'nizar');
    break;
  case 'right':
    moveRight(rowB, colB, 'nizar');
    break;
}
return;
}
