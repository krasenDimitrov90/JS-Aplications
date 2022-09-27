import { render } from 'https://unpkg.com/lit-html?module';
import { initList, newList } from './template.js';
import { towns } from "./towns.js";

const townsDiv = document.getElementById('towns')

render(initList(), townsDiv);

const btn = document.querySelector('article button')
const searchBar = document.getElementById('searchText');
const resultElement = document.getElementById('result');

btn.addEventListener('click', () => {

   const mathces = search(searchBar.value, towns);
  
   let mathcesCount = Object.keys(mathces).reduce((acc, town) => {
      return mathces[town] === true ? acc += 1 : acc;
   }, 0)
   
   resultElement.textContent =`${mathcesCount} matches found`;

   render(newList(mathces), townsDiv);
})

function search(text, towns) {
   const mathes = {};

   towns.forEach(town => {
      if (town.startsWith(text) && text) {
         mathes[town] = true;
      } else {
         mathes[town] = false;
      }
   });

   return mathes;
}
