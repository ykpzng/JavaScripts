
let shapes = {
  1: 'circle',
  2: 'semi-circle',
  3: 'triangle',
  4: 'square',
  5: 'pentagon',
  6: 'hexagon',
  7: 'heptagon',
  8: 'octagon',
  9: 'nonagon',
  10: 'decagon'
};

let key = prompt('Enter shape number..');

function selectShapes(num) {
  return `The shape of the entered corner is ${shapes[num]}.`;
}

console.log(selectShapes(key))


