
const haveYourLunch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Having Lunch...');
    }, 3000)
  });
}

const tidyYourRoom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tidying...')
    }, 2000)
  });
}

const doYourHomework = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Doing homework...')
    }, 1000)
  })
}


async function promiseHandle() {
  // Resolved value of the checkInventory() assigned to inStock variable.
  const hadLuch = await haveYourLunch();
  console.log(hadLuch);
  const roomTidied = await tidyYourRoom();
  console.log(roomTidied);
  const homeworkDone = await doYourHomework();
  console.log(homeworkDone);
  console.log('I can go to the cinema');
}

promiseHandle();