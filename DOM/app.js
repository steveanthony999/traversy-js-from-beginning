// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all[3];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script) {
//   console.log(script);
// });

// console.log(val);

// DOM Selectors *** jquery is unnecessary for dom manipulation

// document.getElementById();

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling for dynamic functionality
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '50px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task List';
// taskTitle.innerHTML = "<span style='color:red'>Task List</span>";

// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

//document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Bitch';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');

// console.log(listItems);

//document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);

// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Bitch';

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.quesrySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index) {
//   li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// Traversing the DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'Hello';
// Children of chidren
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
// First Child
val = list.firstChild;
val = list.firstElementChild;
// Last Child
val = list.lastChild;
val = list.lastElementChild;
// Count child elements
val = list.childElementCount;
// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
