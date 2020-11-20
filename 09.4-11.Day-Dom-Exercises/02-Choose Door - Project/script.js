
const doorImage1 = document.getElementById('door_a');
const doorImage2 = document.getElementById('door_b');
const doorImage3 = document.getElementById('door_c');
const startButton = document.getElementById('start');
const flyDoorPath = 'findfly.png';
const oceanDoorPath = 'ocean.png';
const forestDoorPath = 'forest.png';
const closedDoorPath = 'door_closed.png';
let numClosedDoors = 3;
let currentlyPlaying = true;

let openDoor1, openDoor2, openDoor3;

const isFly = (door) => {
  if (door.src.includes(flyDoorPath)) {
    return true;
  } else {
    return false;
  }
};

function isClicked(door) {
  if (door.src.includes(closedDoorPath)) {
    return false;
  } else {
    return true;
  }
}
function playDoor(door) {
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isFly(door)) {
    gameOver("lose");
  }
}

function randomFindDoorGenerator() {
  let findDoor = Math.floor(Math.random() * (numClosedDoors * 2));
  if (findDoor === 0) {
    openDoor1 = flyDoorPath;
    openDoor2 = forestDoorPath;
    openDoor3 = oceanDoorPath;
  } else if (findDoor === 1) {
    openDoor2 = flyDoorPath;
    openDoor1 = forestDoorPath;
    openDoor3 = oceanDoorPath;
  } else if (findDoor === 2) {
    openDoor3 = flyDoorPath;
    openDoor1 = forestDoorPath;
    openDoor2 = oceanDoorPath;
  } else if (findDoor === 3) {
    openDoor1 = flyDoorPath;
    openDoor3 = forestDoorPath;
    openDoor2 = oceanDoorPath;
  } else if (findDoor === 4) {
    openDoor2 = flyDoorPath;
    openDoor3 = forestDoorPath;
    openDoor1 = oceanDoorPath;
  } else if (findDoor === 5) {
    openDoor3 = flyDoorPath;
    openDoor2 = forestDoorPath;
    openDoor1 = oceanDoorPath;
  }
}


doorImage1.onclick = function () {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = function () {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }

};
doorImage3.onclick = function () {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good Luck!";
  randomFindDoorGenerator();
};

function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();

