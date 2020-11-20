
const inputBox = document.getElementById('item_name');

function addItem(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    if (inputBox.value.trim() === "") {
      alert('Enter a value....');
    } else {

      //Create <li> item
      const listItem = document.createElement('li');
      listItem.className = 'list_li';
      document.getElementById('task_list').appendChild(listItem);

      //create input text item
      const itemInput = document.createElement('input');
      itemInput.className = 'item-input';
      itemInput.hidden = true;
      listItem.appendChild(itemInput);

      //İtem text -- span --
      const itemText = document.createElement('span');
      itemText.className = 'item-text';
      itemText.innerHTML = inputBox.value;
      itemText.style.cursor = 'pointer';
      itemText.addEventListener('click', completeItem);
      listItem.appendChild(itemText);

      //Create Edit button
      const editBtn = document.createElement('span');
      editBtn.innerHTML = '  - (Edit)';
      editBtn.className = 'edit_btn btn-grup-edit';
      editBtn.style.color = 'blue';
      editBtn.style.cursor = 'pointer';
      editBtn.addEventListener('click', editItem);
      listItem.appendChild(editBtn);

      //Create Save button
      const saveBtn = document.createElement('span');
      saveBtn.innerHTML = '  - (Save)';
      saveBtn.className = 'save_btn btn-grup-save';
      saveBtn.style.color = 'blue';
      saveBtn.style.cursor = 'pointer';
      saveBtn.hidden = true;
      saveBtn.addEventListener('click', saveItem);
      listItem.appendChild(saveBtn);

      //Create remove button
      const removeBtn = document.createElement('span');
      removeBtn.innerHTML = '  - (Remove)';
      removeBtn.className = 'remove_btn btn-grup-edit';
      removeBtn.style.color = 'red';
      removeBtn.style.cursor = 'pointer';
      removeBtn.addEventListener('click', removeItem);
      listItem.appendChild(removeBtn);

      //Create Cansel button
      const cancelBtn = document.createElement('span');
      cancelBtn.innerHTML = '  - (Cancel)';
      cancelBtn.className = 'cancel_btn btn-grup-save';
      cancelBtn.style.color = 'red';
      cancelBtn.style.cursor = 'pointer';
      cancelBtn.hidden = true;
      cancelBtn.addEventListener('click', cancelItem);
      listItem.appendChild(cancelBtn);

      inputBox.value = "";
      inputBox.select();
    }
  }

}



const removeItem = function (e) {
  // e.target.parentElement.remove();
  document.getElementById('task_list').removeChild(e.target.parentElement);

}
const saveItem = function (e) {

  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];

  const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-grup-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-grup-save');

  if (textInput.value.trim() === "") {
    alert('Enter a value....');
  } else {
    textItem.innerHTML = textInput.value;
  }
  textInput.hidden = true;
  textItem.hidden = false;

  for (let i of editGroupButtons) {
    i.hidden = false;
  }
  for (let i of saveGroupButtons) {
    i.hidden = true;
  }

}

const cancelItem = function (e) {
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-grup-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-grup-save');

  textInput.hidden = true;
  textItem.hidden = false;

  for (let i of editGroupButtons) {
    i.hidden = false;
  }
  for (let i of saveGroupButtons) {
    i.hidden = true;

  }

}

const editItem = function (e) {
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-grup-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-grup-save');

  textInput.hidden = false;
  textItem.hidden = true;
  textInput.value = textItem.innerHTML;

  textInput.select();   // Text seçilihale geliyor


  for (let i of editGroupButtons) {
    i.hidden = true;
  }
  for (let i of saveGroupButtons) {
    i.hidden = false;
  }
}

// Tektin üzerini çizer veya çizgiyi kaldırır
const completeItem = function (e) {
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  if (textItem.style.textDecoration === 'line-through') {
    textItem.style.textDecoration = 'none';
  } else {
    textItem.style.textDecoration = 'line-through';
  }
}

//document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);

//keypress --> bir butona basıldığında gerçekleşen işlem

inputBox.addEventListener('keypress', addItem);


// Bir event in çalışmasını iptal etmek için -- removeEventListener  kullanılır
// document.getElementById('btn_remove').addEventListener('click', addItem);

// Html den hazır gelen remove_btn lere remove item eklmek için döngügerekir. getElementsByClassName array döndürdüğü için döngüyle içine giriliyor

for (let i of document.getElementsByClassName('remove_btn')) {
  i.addEventListener('click', removeItem);
}

for (let i of document.getElementsByClassName('edit_btn')) {
  i.addEventListener('click', editItem);
}

for (let i of document.getElementsByClassName('save-btn')) {
  i.addEventListener('click', saveItem);
}

for (let i of document.getElementsByClassName('cancel_btn')) {
  i.addEventListener('click', cancelItem);
}

for (let i of document.getElementsByClassName('item-text')) {
  i.addEventListener('click', completeItem);
}