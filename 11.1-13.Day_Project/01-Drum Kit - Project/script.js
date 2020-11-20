
//buttonlardan kontrol
const drums = document.querySelectorAll('.drum');
const order = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

for (let i = 0; i < drums.length; i++) {

  drums[i].onclick = function () {
    let audio = new Audio('sounds/tom-' + order[i] + '.mp3');
    audio.play();

    let active = document.querySelector('.' + order[i]);
    active.classList.add('pressed');
    setTimeout(() => { active.classList.remove('pressed') }, 100);
  }
}

// Klavyeden kontrol
// e.key version

document.onkeypress = function (e) {
  let audio = new Audio('sounds/tom-' + e.key + '.mp3');
  audio.play();

  let active = document.querySelector('.' + e.key);
  active.classList.add('pressed');
  setTimeout(() => { active.classList.remove('pressed') }, 100);
}

//e.code version
/*
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

*/

