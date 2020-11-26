
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgArea = document.createElement('img');
    imgArea.className = 'img_path';
    imgArea.width = 200;
    imgArea.height = 300;
    imgArea.src = imgPath;
    imgContainer.appendChild(imgArea)
    setTimeout(() => {
      if (imgArea.src) {
        resolve('Resim Yüklendi');
      } else {
        reject('Resim Yüklenemedi');
      }
    }, 1000);
  });

}

createImage('https://picsum.photos/200/300')
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);

  });


//call createImage with then and catch



// create a wait function
const waitFor = function (second) {


}