
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgArea = document.createElement('img');
    imgArea.width = 200;
    imgArea.height = 300;
    imgArea.src = imgPath;
    imgContainer.appendChild(imgArea);
    imgArea.addEventListener("load", function () {
      resolve(imgArea);
    });
    imgArea.addEventListener("error", function () {
      reject(new Error("İmage not fount..."));
    });
  });
}



// create a wait function
const waitFor = function (second) {
  return new Promise((resolve) => {
    console.log("Wait for 2 seconds");
    setTimeout(resolve, second * 1000);
  });

}


//call createImage with then and catch

let currentImg;
createImage('./images/img-1.jpg')
  .then((imgArea) => {
    currentImg = imgArea;
    console.log("Image 1 loaded");
    return waitFor(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage('./images/img-2.jpg');
  })
  .then((imgArea) => {
    currentImg = imgArea;
    console.log("Image 2 loaded");
    return waitFor(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    console.log("START AGAIN");
  })
  .catch((err) => {
    console.log(err);
  });

