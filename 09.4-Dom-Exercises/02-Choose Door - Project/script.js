
const doorImage1 = document.getElementById('door_a');
const doorImage2 = document.getElementById('door_b');
const doorImage3 = document.getElementById('door_c');
const flyDoorPath = './findfly.png';
const oceanDoorPath = './ocean.png';
const forestDoorPath = './forest.png';
const numClosedDoors = 3;
const ClosedDoorPath = './door_closed.png';
let openDoor1, openDoor2, openDoor3;

function isClicked(doorSrc) {
  return doorSrc === ClosedDoorPath;
}
function playDoor() {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver();
  }


}

function randomFindDoorGenerator() {
  let findDoor = Math.floor(Math.random() * numClosedDoors);
  if (findDoor === 0) {
    openDoor1 = flyDoorPath;
    openDoor2 = oceanDoorPath;
    openDoor3 = forestDoorPath;

  } else if (findDoor === 1) {
    openDoor1 = flyDoorPath;
    openDoor3 = oceanDoorPath;
    openDoor2 = forestDoorPath;

  } else if (findDoor === 2) {
    openDoor3 = flyDoorPath;
    openDoor1 = oceanDoorPath;
    openDoor2 = forestDoorPath;

  }
}


doorImage1.onclick = function () {
  if (isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    console.log(doorImage1);
    console.log(isClicked(doorImage1));

  }


  playDoor();

}

doorImage2.onclick = function () {
  doorImage2.src = openDoor2;
  playDoor();
  isClicked(doorImage2);

}
doorImage3.onclick = function () {
  doorImage3.src = openDoor3;
  playDoor();
  isClicked(doorImage3);
}

function gameOver(params) {

}



randomFindDoorGenerator();