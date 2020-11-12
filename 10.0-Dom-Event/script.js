
//Dom Event- EventListener

/*
--event   -    işlem, iş, etkinlik
---event listener - dinleme
---event trigger  - tetkleme
---event handler-  fonksiyonun çalışması
*/

const inputBox = document.getElementById('item_name');
let items, tab = [], index


function addItem(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    if (inputBox.value.trim() === "") {
      alert('Enter a value....');
    } else {
      const listItem = document.createElement('li');
      listItem.className = 'list_li';
      listItem.innerHTML = inputBox.value;
      listItem.style.cursor = 'pointer';
      listItem.addEventListener('click', selectItem);
      document.getElementById('task_list').appendChild(listItem);

      //Create Edit button
      const editBtn = document.createElement('span');
      editBtn.innerHTML = '  - edit';
      editBtn.style.color = 'blue';
      editBtn.style.cursor = 'pointer';
      editBtn.addEventListener('click', editItem);
      listItem.appendChild(editBtn);

      //Create remove button
      const removeBtn = document.createElement('span');
      removeBtn.innerHTML = '  - Remove';
      removeBtn.style.color = 'red';
      removeBtn.style.cursor = 'pointer';
      removeBtn.addEventListener('click', removeItem);
      listItem.appendChild(removeBtn);

      inputBox.value = "";
    }
  }

}



const removeItem = function (e) {
  // e.target.parentElement.remove();
  document.getElementById('task_list').removeChild(e.target.parentElement);

}

const selectItem = function (e) {
  inputBox.value = e.target.innerText.replace(' - edit - Remove', '');

}

const editItem = function (e) {
  inputBox.value = "";
}


//document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);

//keypress --> bir butona basıldığında gerçekleşen işlem

inputBox.addEventListener('keypress', addItem);


// Bir event in çalışmasını iptal etmek için -- removeEventListener  kullanılır
// document.getElementById('btn_remove').addEventListener('click', addItem);

// Html den hazır gelen remove_btn lere remove item eklmek için döngügerekir
// let listItem = document.getElementsByClassName('remove_btn');

// for (const item of listItem) {
//   item.addEventListener('click', removeItem);
// }