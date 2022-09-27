import { render } from 'https://unpkg.com/lit-html?module';
import { getItems, postNewItem } from './request.js';
import { options } from './drop-down-template.js';

const optionMenu = document.getElementById('menu');

render(options(Object.values(await getItems())), optionMenu)

const inputField = document.getElementById('itemText');

document.querySelector('form')
    .addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const data = {'text':inputField.value}
        inputField.value = '';
        
        postNewItem(data)

        render(options(Object.values(await getItems())), optionMenu)
    })