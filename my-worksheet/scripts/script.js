const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    const listItem = document.createElement('li');
    listItem.textContent = prompt('What content do you want the list item to have?');
    list.appendChild(listItem);
    // alt1
    listItem.onclick = function (e) {
        e.stopPropagation();
        const listContent = prompt('Enter new content for your list item');
        this.textContent = listContent;
    }
}