import { navigation } from "./navigation.js";
import { renderMovies } from "./movies.js";
import { router } from '../router.js';

const homeSection = document.getElementById('home-page');
const movieSection = document.getElementById('movie');

movieSection.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON') {
        e.preventDefault();
        router('Details', e.target.id);
    }
})

const movieList = document.getElementById('movies-list');

export function renderHome() {

    const user = JSON.parse(localStorage.getItem('user'));

    homeSection.style.display = 'block';
    navigation(user)

    movieList.replaceChildren();
    renderMovies(movieList)
    movieSection.style.display = 'block';
}

