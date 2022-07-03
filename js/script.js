const items = ['uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'verdura', 'frutta'];

const shoppingListElement = document.getElementById('shopping-list');

let i = 0;
while(i < items.length){
    const listItem = document.createElement('li');
    listItem.append(items[i]);
    shoppingListElement.appendChild(listItem);
    i++;
}