/*  *** EXAMINE THE DOCUMENT OBJECT *** */

// console.dir(document);

// console.log(document.domain);

// console.log(document.URL);

// console.log(document.title);
// document.title = 123;

// console.log(document.doctype);

// console.log(document.head);

// console.log(document.body);

// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';

// console.log(document.forms[0]);

// console.log(document.links);

// console.log(document.images);


/*  ******   getElementById   ****** */

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// let mainTitle = document.getElementById('main-title');
// console.log(mainTitle);

// headerTitle.textContent = 'Helloooo'
// headerTitle.innerText = 'GoogByeee';
document.getElementById('spn').style = "display:none";
// console.log(headerTitle.textContent); //Item Lister Hello
// console.log(headerTitle.innerText);  //Item Lister 

// headerTitle.innerHTML = '<h3>Hello</h3';

// mainTitle.style.borderBottom = 'solid 3px #000';


/*  ******   getElementsByClassName  ****** */

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';  // Gives Error

// // This is the correct
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }


/*  ******   getElementsByTagName ****** */

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].textContent = 'Hello 3';
// li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'yellow';

// //items.style.backgroundColor = '#f4f4f4';  // Gives Error

// //This is the correct
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }


/*  ******   querySelector ****** */

// let title = document.querySelector('#main-title');
// title.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type=submit]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';  //first item selected

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';  //last item selected

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';  //second item selected



/*  ******   querySelectorAll ****** */

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0] = 'Hellooooo';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)')


// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';

// }


/*  ******   TRAVERSİNG THE DOM  ****** */

let itemList = document.querySelector('#items');

// /*  parentNode  */
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//  /* parentElement  */
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//  /*  childnodes */
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//   /*  firstChild */
// console.log(itemList.firstChild);
//   /*  firstElementChild */
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//  /*  lastChild */
// console.log(itemList.lastChild);
// /*  lastElementChild */
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


//  /*  nextSibling*/
// console.log(itemList.nextSibling);
//  /*  nextElementSibling*/
// console.log(itemList.nextElementSibling);

//  /*  previousSibling */
// console.log(itemList.previousSibling);
//  /*  previousElementSibling */
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';


/* ***** Create Element ****** */

/*  create a div */

let newDiv = document.createElement('div');

/*  Add Class */

newDiv.className = 'hello';

/* Add id  */

newDiv.id = 'hello-1';

/* Add atribute  */

newDiv.setAttribute('title', 'Hello Div');

/* create text node  */

let newDivText = document.createTextNode('Hello World');

/* Add text to div  */

newDiv.appendChild(newDivText);

console.log(newDiv);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');


newDiv.style.fontSize = '30px';


container.insertBefore(newDiv, h1);









