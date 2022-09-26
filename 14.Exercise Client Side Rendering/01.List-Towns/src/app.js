import { render } from 'https://unpkg.com/lit-html?module';
import { template } from './template.js';

const root = document.getElementById('root');
const input = document.getElementById('towns');

document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();
    
    render(template(input.value.split(', ')), root)
})



