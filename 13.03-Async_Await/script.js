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

// Promise Handle farki
// async(keyword) await(operator)

// 1 - async await ile promiseHandle fonksiyonunu olusturmak.
// 2 - handling Independent promises (Birbirinden bağımsız)
// 3 - handling dependent promises (Birbirine bağımlı)
// 4- Catchhing error promise (try-catch)
// 4-II Catchhing error promise (function.catch...)
// 5- await promise all


//----------------------------------------------

/*1 */
// require('./1-async-await');

/*2 */
// require('./2-independent-promises');

/*3 */
// require('./3-dependent-promise');

/*4 */
// require('./4-catching-errors');

/*4 II*/
// require('./4-cathcing-errors-II');

/*5 */
require('./5-await_Promise_All');