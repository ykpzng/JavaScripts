
console.log('Welcome to Shoping');
console.log('Please create an account to login...');
/*
* Birbiri ardına gelmesi gereken işlemlerin,işlemde kaynaklanan  -sistemsel gecikme- sebebiyle birbirlerini ezmemeleri için "promise" kullanılır.

* burada kullanıcıdan alınan ad, soyad, email ve password işlemlerine biz gecikmeker ekledik, fakat promise sayesinde birbirlerini ezmeden sırasıyla çalıştılar.
 
* herhangi bir değer boş geçildiğinde 'reject' çalışır ve işlem sonlanır.

* herhangi bir değer boş geçilmediği sürece gecikmeleri de bekleyerek bilgileri ekrana basar.

*/

const getFirstName = function () {
  return new Promise(function (resolve, reject) {
    let name = prompt('Enter your name...');
    setTimeout(function () {
      if (name.trim() === '') {
        reject('Enter a value for first name...')
      } else {
        resolve(name)
      }
    }, 1000);
  });
}

const getLastName = function (firstName) {
  return new Promise(function (resolve, reject) {
    let lastName = prompt('Enter your lastname...');
    setTimeout(function () {
      if (lastName.trim() === '') {
        reject('Enter a value for last name...');
      } else {
        resolve(firstName + ' ' + lastName);
      }
    }, 2000);
  });
}

const getEmailAddress = function (fullName) {
  return new Promise(function (resolve, reject) {
    let emailAddress = prompt('Enter your email address...');
    setTimeout(function () {
      if (emailAddress.trim() === '') {
        reject('Enter a value for email address...');
      } else {
        resolve([fullName, emailAddress]);
      }
    }, 3000);
  })
}

const getPassword = function (userInfoArrya) {
  return new Promise(function (resolve, reject) {
    let password = prompt('Enter your password...');
    setTimeout(function () {
      if (password.trim() === '') {
        reject('Enter a value for password....');
      } else {
        resolve({
          fullName: userInfoArrya[0],
          emailAddress: userInfoArrya[1],
          password: password
        });
      }
    }, 300);
  });
}


getFirstName().then(resolvedValue => {
  return getLastName(resolvedValue);
}).then(function (resolvedValue) {
  return getEmailAddress(resolvedValue);
}).then(function (resolvedValue) {
  return getPassword(resolvedValue);
}).then(function (resolvedValue) {
  console.log(resolvedValue);
}).catch(function (rejectionValue) {
  console.log(rejectionValue);
});




// let username;
// const greetPromise = new Promise(function (resolve, reject) {
//   username = window.prompt('Enter your name...');
//   setTimeout(function () {
//     resolve(username);
//   }, 3000);

// });

// greetPromise.then(function (username) {
//   console.log('Hello ' + username);
// });