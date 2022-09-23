import { router } from "../router.js";
import { createMovie } from "../user-forms/create-movie.js";


const addBtn = document.querySelector('#add-movie-button a');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    router('Add-Movie');
})

const movieForm = document.getElementById('add-movie-form');

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    createMovie(e);
})

const addMovieSection = document.getElementById('add-movie');

export const renderAdd = () => {
    addMovieSection.style.display = 'block';
}