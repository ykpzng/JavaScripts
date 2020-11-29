
const promiseFunction = () => {
  const isResolved = Math.floor(Math.random() * 2);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolved) {
        resolve('It is resolved Successfully');
      } else {
        reject('It is rejected!');
      }
    }, 3000)
  });
}

async function promiseHandle() {
  // Resolved value of the promiseFunction() assigned to resolveMessage variable.
  const resolveMessage = await promiseFunction();
  console.log(resolveMessage);
}

promiseHandle();