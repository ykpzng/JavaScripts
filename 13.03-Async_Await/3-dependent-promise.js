
const checkInventory = () => {
  return new Promise((resolve, reject) => {
    console.log('Checking inventory...');
    const inStock = true;
    setTimeout(() => {
      if (inStock) {
        console.log('We have in stock')
        resolve(true);
      } else {
        reject("Out of stock.");
      }

    }, 3000)
  });
}

const processPayment = (resolvedValue) => {
  return new Promise((resolve, reject) => {
    console.log('Processing credit card...')
    setTimeout(() => {
      if (resolvedValue) {
        console.log('Payment has been accepted')
        resolve(true)
      } else {
        reject('Not enough money');
      }
    }, 2000)
  });
}

const shipOrder = (resolvedValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolvedValue) {
        resolve('Your order has been shipped')
      } else {
        reject('Cannot ship to your country');
      }
    }, 1000)
  })
}


async function promiseHandle() {

  // Resolved value of the checkInventory() assigned to inStock variable.
  const inStock = await checkInventory();
  const paymentDone = await processPayment(inStock);
  const isShipped = await shipOrder(paymentDone);
  console.log(isShipped);

}

promiseHandle();