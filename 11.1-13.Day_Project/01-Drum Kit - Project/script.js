
//buttonlardan kontrol

const drums = document.querySelectorAll('.drum');
const order = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

for (let i = 0; i < drums.length; i++) {
  let time;
  drums[i].onclick = function () {
    let audio = new Audio('sounds/tom-' + order[i] + '.mp3');
    audio.play();

    function runTime() {
      time = setTimeout(() => { drums[i].className = 'pressed' }, 2000);
    }
  }

  function stop() {
    clearTimeout(time);
  }

}

// Klavyeden kontrol

document.onkeypress = function (e) {
  let tmp;
  if (e.code === 'KeyW') {
    tmp = 'w';
  } else if (e.code === 'KeyA') {
    tmp = 'a';
  } else if (e.code === 'KeyS') {
    tmp = 's';
  } else if (e.code === 'KeyD') {
    tmp = 'd';
  } else if (e.code === 'KeyJ') {
    tmp = 'j';
  } else if (e.code === 'KeyK') {
    tmp = 'k';
  } else if (e.code === 'KeyL') {
    tmp = 'l';
  }

  let audio = new Audio('sounds/tom-' + tmp + '.mp3');
  audio.play();
}



