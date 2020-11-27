// callback.js deki örnekten devam edelim. Burada nevTodo işlemi sona erdiğinde todoList fonksiyonunun çalışması gerektiğini düşünelim.

const toDos = [
  { title: 'Todo 1', description: 'JavaScript derslerine çalış...' },
  { title: 'Todo 2', description: 'Üniversite derslerine çalış...' },
  { title: 'Todo 3', description: 'Çocuklara vakit ayır...' }
];



let todoListElement = document.getElementById('todolist');

function toDoList() {
  setTimeout(() => {
    let todoItems = '';
    toDos.forEach(item => {
      todoItems += `
     <li>
     <b>${item.title}</b>
     <p>${item.description}</p>
     </li>`;
    });
    todoListElement.innerHTML = todoItems;
  }, 1000);
}

// Bu fonksiyona promise uygulayalım. Bu fonksiyon yuklendikten sonra toDoList() i çalıştırır dolayısıyla liste doğru sıralanmış olur.

// Promise doğru çalışırsa resolve döndürür. Herhangi bir hata durumunda reject döndürür..

function newTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      toDos.push(todo);
      const e = false;
      if (!e) {
        resolve(toDos);
      } else {
        reject('Hata var...');
      }
    }, 2000);
  });
}


// resolve işleminin "then" metodu ile karşılarız. resolve den gelen parametreyi burda kullanırız.
// reject işlemini "catch" metonu karşılar. Catch den gelen hatayı burda kullanırız.

newTodo({
  title: 'Todo 4',
  description: 'Kitap oku'
})
  .then((response) => {
    console.log(response);
    toDoList();
  })
  .catch((er) => {
    console.log(er);
  });


//* Birden çok promis olursa bunları then metotlarıyla zincirleme yaparız

//* veya Promise All kullanırız.

const p1 = Promise.resolve("P1");
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('burası P2 promise dir')
  }, 1000);
});
const p3 = 23436657;
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

Promise.all([p1, p2, p3, p4]).then(promises => {
  console.log("promises" + promises);
});