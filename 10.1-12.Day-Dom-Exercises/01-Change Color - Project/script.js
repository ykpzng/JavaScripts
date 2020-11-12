//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];


const button1 = document.getElementById('button1');


button1.onclick = function () {
  const rnd = Math.floor(Math.random() * colors.length)
  document.body.style.background = colors[rnd];

}



const button2 = document.getElementById('button2');

button2.onclick = function () {

  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.background = '#' + randomColor;

  document.querySelector('.textField').innerHTML = '#' + randomColor;

  let tmp = randomColor.split('').reverse().join('').toString();

  document.querySelector('.textField1').innerHTML = '#' + tmp;



  document.querySelector('.textField1').style.color = '#' + tmp;



}