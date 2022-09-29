import { render } from 'https://unpkg.com/lit-html?module';
import { getStudents } from "./request.js";
import { tableTemplate } from './templates.js';

const table = document.querySelector('.container tbody');
const searchField = document.getElementById('searchField');
const studentsData = Object.values(await getStudents());

studentsData.forEach(s => s.active = false);

render(tableTemplate(studentsData), table);

document.getElementById('searchBtn').addEventListener('click', searchHendler);

function searchHendler(e) {
   const searchedValue = searchField.value;

   studentsData.forEach(s => 
      s.active = Object.values(s).some(val => 
         typeof val == 'string' && val.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()))
   )
      
   render(tableTemplate(studentsData), table);
   studentsData.forEach(s => s.active = false);
   searchField.value = '';
}