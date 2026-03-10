const ulist = document.querySelector('ul');
const itemInput = document.querySelector('#item');
const button = document.querySelector('form > button');
button.onclick = function (event) {
  event.preventDefault();

  const item = itemInput.value;
  if (item === '') {
    return;
  }
  itemInput.value = '';

  const emptyMsg = document.querySelector('.empty-msg');
  if (emptyMsg) {
    emptyMsg.remove();
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  li.appendChild(span);
  li.appendChild(deleteButton);
  span.textContent = item;
  deleteButton.textContent = 'DEL';
  deleteButton.onclick = function () {
    ulist.removeChild(li);
    if (ulist.children.length === 0) {
      const msg = document.createElement('li');
      msg.className = 'empty-msg';
      msg.textContent = 'NO ITEMS YET...';
      ulist.appendChild(msg);
    }
  };
  ulist.appendChild(li);
  itemInput.focus();
};
