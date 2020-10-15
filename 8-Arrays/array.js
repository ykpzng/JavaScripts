//Arrays

const myAray = ['ali', 'veli', 34, 'deli', 76];

console.log(myAray);

myAray[6] = 56;   // 5.index boş kalır 6.indexe eklenir

console.log(myAray);

myAray.push('haydar'); // Dizinin <sonuna> ekleme yapar
console.log(myAray);

myAray.unshift(178); // Dizinin <başına> ekleme yapar
console.log(myAray);

let silinen = myAray.pop(); // Dizinin <sonuncu> elemanını  siler. VE silinen elemanı geri döndürebilir
console.log(myAray);
console.log(silinen); //Pop ile silinen eleman

silinen = myAray.shift(); // Dizinin <ilk> elemanını  siler. VE silinen elemanı geri döndürebilir
console.log(myAray);
console.log(silinen); //shift ile silinen eleman

//-------------------------------------------

const newArray = ['elma', 'armut', 'ayva', 'çilek'];
console.log(newArray);

silinen = newArray.splice(1, 2);  //Silinen 'armut', 'ayva'
console.log(newArray);
console.log(silinen); //splice ile silinen eleman

newArray.splice(1, 0, 'şeftali');
console.log(newArray);  //["elma", "şeftali", "çilek"]

//-------------------------------------------
//indexOf dizi içindeki elemanın index ini döner. Yoksa -1 döner
console.log(newArray.indexOf('ayva')); // -1 döner (ayva listede yok)
console.log(newArray.indexOf('çilek')); // 2 döner

console.log(Object.keys(newArray)); // ["0", "1", "2"]
