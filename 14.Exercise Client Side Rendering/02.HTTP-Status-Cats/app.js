import { render } from 'https://unpkg.com/lit-html?module';
import { catList } from './catTemplate.js';


render(catList(), document.getElementById('allCats'));