
// login button

document.querySelector('#login_btn').onclick = function () {
  const userName = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (userName === 'john' && password === '123') {
    document.getElementById('welcome').innerHTML = userName;
    document.querySelector('#login').hidden = true;
    document.getElementById('logout').style.display = 'block';
    loadContent();

  } else {
    alert('Wrong username or password...');
  }

}

//Logout button

document.querySelector('#btn_logout').onclick = function () {
  const mainContent = document.querySelector('#main_content');
  document.body.removeChild(mainContent);
  document.getElementById('logout').style.display = 'none';
  document.querySelector('#login').hidden = false;

  document.querySelector('#username').value = '';
  document.querySelector('#password').value = '';

}


function loadContent() {
  //New create div in body
  let mainContent = document.createElement('div');
  mainContent.id = 'main_content';
  mainContent.style.border = '1px solid blue';
  document.body.appendChild(mainContent);

  //New create h1 in mainContent
  let heading = document.createElement('h1');
  heading.innerHTML = 'ToDo List';
  mainContent.appendChild(heading);

  //New create button-1 in mainContent
  let button = document.createElement('button');
  button.id = 'add_item';
  button.innerHTML = 'Add Item';
  mainContent.appendChild(button);

  //New create button-2 in mainContent
  let removeButton = document.createElement('input');
  removeButton.type = 'button';
  removeButton.id = 'remove_item';
  removeButton.value = 'Remove Last Item';
  mainContent.appendChild(removeButton);
}


