
document.querySelector('#start').onclick = function () {
  let rndNum1 = Math.floor(Math.random() * 6);
  let rndNum2 = Math.floor(Math.random() * 6);

  document.getElementById('dice_A').src = 'images/' + rndNum1 + '.png';

  document.getElementById('dice_B').src = 'images/' + rndNum2 + '.png';

  if (rndNum1 > rndNum2) {
    document.getElementById('press').innerHTML = 'Player 1 Win...';
    document.getElementById('player_1').className = 'changecolor';
    document.getElementById('player_2').className = '';


  } else if (rndNum1 < rndNum2) {
    document.getElementById('press').innerHTML = 'Player 2 Win...';
    document.getElementById('player_2').className = 'changecolor';
    document.getElementById('player_1').className = '';

  } else {
    document.getElementById('press').innerHTML = 'You are drawn';
    document.getElementById('player_1').className = '';

  }


}