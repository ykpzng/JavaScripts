// Async - Await
// Async function herzaman promise döndürür.
// 'await' bir 'async' function içerisinde kullanılır.

async function name() {  // Function declaration
  //await (pedding durumundaki işlem)
}
//OR
const name1 = async () => { // Function expretion
  //await  (pedding durumundaki işlem)
}

//----------------------------------------------

const promiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('It\'s resolved');
      // reject('It\'s rejected');
    }, 2000);
  });
}




const asyncAwait = async () => {
  const successMessage = await promiseFunction();
  console.log(successMessage)
}

asyncAwait()