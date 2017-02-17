var randomExit = ['eSign1', 'eSign2', 'eSign3', 'eSign4'];
var winPos;
var winningDoor;
var winDirection;

function assignWinningDoor(){
var exitDoorWin = Math.floor(Math.random() * randomExit.length);
var spliceWinningDoor = randomExit.splice(exitDoorWin, 1);
console.log("exit door is at array index of " + exitDoorWin);
console.log(randomExit);

switch(exitDoorWin) {
case 0:
  // winningDoor = 'eSign1';
  // winPos = [1,1];
  // winDirection = 37;
  // break;
case 1:
  winningDoor = 'eSign2';
  winPos = [1,16];
  winDirection = 39;
  break;
case 2:
  winningDoor = 'eSign3';
  winPos = [11,1];
  winDirection = 37;
  break;
case 3:
  winningDoor = 'eSign4';
  winPos = [11,16];
  winDirection = 39;
  break;
} console.log("the winning door has been assigned to " + winningDoor);
}

assignWinningDoor();

// letsWin(39);


function letsWin(blah) {
  findPizza();

  if ((rowA === winPos[0] && colA === winPos[1]) && (blah === winDirection)) {
    $('#board').empty();
    $('#winPic').append('<img src="https://media.giphy.com/media/3o7TKqrD0WxaE9ivDi/giphy.gif">');
  }
}
