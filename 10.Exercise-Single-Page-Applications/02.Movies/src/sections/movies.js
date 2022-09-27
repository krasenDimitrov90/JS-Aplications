import { getMovies } from "../requests.js";

export function renderMovies(movieList) {
    getMovies()
        .then(movies => {
            Array.from(movies)
                .map(m => createMovieCard(m))
                .forEach(x => movieList.appendChild(x))
        })
}

function createMovieCard(movie) {
    const div = document.createElement('div');
    div.classList.add('card', 'mb-4')

    div.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="#/details/krPgQD6SWf39bM4x00co">
            <button type="button" class="btn btn-info" id="${movie._id}">Details</button>
        </a>
    </div>
    `;
    return div;
}