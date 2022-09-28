import { render } from 'https://unpkg.com/lit-html?module';
import { getStudents } from "./request.js";
import { tableTemplate } from './templates.js';

const studentsData = Object.values(await getStudents());
studentsData.forEach(s => s.active = false);

const table = document.querySelector('.container tbody');


render(tableTemplate(studentsData), table)

const searchField = document.getElementById('searchField');

document.getElementById('searchBtn').addEventListener('click', searchHendler);

function searchHendler(e) {
   const searchedValue = searchField.value;

   studentsData.forEach(s =>
      Object.values(s)
         .forEach(val => {
            if (typeof val == 'string' && val.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())) {
               s.active = true;
            }
         }))

   render(tableTemplate(studentsData), table);

   studentsData.forEach(s => s.active = false);

   searchField.value = '';
}

console.log(Object.entries(...studentsData));


