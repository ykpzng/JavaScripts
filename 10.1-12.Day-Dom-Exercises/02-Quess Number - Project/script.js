
let random = Math.floor(Math.random() * 50 + 1);

const guess = document.querySelector('#input_box');

let point = 10, score = 0, highScore = 0;

document.querySelector('#input_box').select();

document.querySelector('#again_btn').onclick = function () {
  point = 10;
  random = Math.floor(Math.random() * 50 + 1);
  document.body.style.background = 'black';
  document.querySelector('.score').innerHTML = 10;
  document.querySelector('#input_box').value = "";
  document.querySelector('#input_box').select();
}


document.querySelector('#check_btn').onclick = function () {

  if (point == 0) {
    document.querySelector('.message').innerHTML = 'Your right is over...';
    document.body.style.background = 'red';
  } else {

    if (Number(guess.value) < 1 || Number(guess.value) > 50) {
      document.querySelector('.message').innerHTML = 'You must enter between 1-50';
      point--;
    }
    else {
      if (guess.value > random) {
        document.querySelector('.message').innerHTML = 'it is high...';
        document.body.style.background = 'orange';
        point--;
      } else if (guess.value < random) {
        document.querySelector('.message').innerHTML = 'it is low...';
        document.body.style.background = 'black';
        point--;
      } else {
        document.querySelector('#input_box').disabled = true;
        document.querySelector('.message').innerHTML = 'You are winner...';
        document.body.style.background = 'green';
        document.querySelector('.number').innerHTML = random;
        score = point;
        if (score > highScore) {
          highScore = score;
        }
        point = 0;
        document.querySelector('.highscore').innerHTML = highScore;
      }
      document.querySelector('.score').innerHTML = point;

      console.log('score : ' + score)
      console.log('rnd : ' + random);
      console.log('thm : ' + guess.value);
    }
    document.querySelector('#input_box').value = "";
    document.querySelector('#input_box').select();
  }

}


