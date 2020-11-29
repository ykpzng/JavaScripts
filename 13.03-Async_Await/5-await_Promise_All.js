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
  const resultArray = await Promise.all([haveYourLunch(), tidyYourRoom(), doYourHomework()]);
  console.log(resultArray);
}

promiseHandle();