const inputEl = document.querySelector('input');
const button = document.querySelector('button');
const listEl = document.querySelector('ul');

button.addEventListener('click',()=> {
  let newEl = document.createElement('li');
  newEl.textContent = inputEl.value;
  listEl.appendChild(newEl)
  inputEl.value = ''
})