const toDos = [
  { title: 'Todo 1', description: 'JavaScript derslerine çalış...' },
  { title: 'Todo 2', description: 'Üniversite derslerine çalış...' },
  { title: 'Todo 3', description: 'Çocuklara vakit ayır...' }
];
// Nesnelerden oluşturduğumuz diziyi database den çekiyormuş gibi(senaryo) ekrana listeleyelim. Veri çekerken oluşabilecek geçikmeyi settimeOut() foksiyonu kullanarak simüle ediyorum. 

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



//1- Bu listeye yeni bir eleman ekleme senaryosu. Yeni todo list i toDos A push edeceğiz.Son eklenen listenin database e yazmasının zaman alacağını varsaymazsak son ekleneni en sona ekler. Fakat zaman geçikmesi eklersek ve bu zaman yukardakinden fazla olursa o zaman son eklenen eklenmez. Yani asenkron işlemler bu düzeyde birbirini beklemiyor.

//2- Bu rorunu düzeltmek için callback fonksiyonlar kullanılır

//3 -İkinci bir parametre olarak callback verelim

function newTodo(todo, callback) {
  setTimeout(() => {
    toDos.push(todo);
    callback();
  }, 2000);

}

//1- newTodo yu çağıralım ve içine bir obje gönderelim 
//3- fonksiyonun callback paremetresine toDoList()i arguman olarak verelim

newTodo({
  title: 'Todo 4',
  description: 'Kitap oku'
}, toDoList);



// NOT : calllback fonksiyonlar asenkron işlemleri sıraya koyabilir fakat ES& ile gelen "Promise" yapısı bu iş için özel dir ve daha kullanışlıdır......