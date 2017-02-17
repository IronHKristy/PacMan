var randomExit = ['eSign1', 'eSign2', 'eSign3', 'eSign4'];
var winPos;
var winningDoor = 'eSign2';

function assignWinningDoor(){
var exitDoorWin = Math.floor(Math.random() * randomExit.length);
console.log(exitDoorWin);

switch(exitDoorWin) {
case 0:
  winningDoor = 'eSign1';
  winPos = [1,0];
  break;
case 1:
  winningDoor = 'eSign2';
  winPos = [1,17];
  break;
case 2:
  winningDoor = 'eSign3';
  winPos = [11,0];
  break;
case 3:
  winningDoor = 'eSign4';
  winPos = [17,11];
  break;
}
}


// letsWin(39);
console.log(winningDoor);

function letsWin(blah) {
//for testing, function letsWin(keyCode)

  findPizza();

  if ((winningDoor === 'eSign2') && (rowA === 1 && colA === 16) && (blah === 39)) {
    alert("You Win");
    $('#board').empty();
    $('#winPic').append('<img src="https://media.giphy.com/media/3o7TKqrD0WxaE9ivDi/giphy.gif">');
  }
}
