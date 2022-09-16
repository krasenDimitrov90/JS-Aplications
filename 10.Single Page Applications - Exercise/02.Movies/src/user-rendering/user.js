
const moviesSections = document.querySelector('#movie-example');
const user = JSON.parse(localStorage.getItem('user'));
const addMovieBtn = document.getElementById('add-movie-button');
const welcomeMsg = document.getElementById('welcome-msg');

export function showMovies() {
    moviesSections.style.display = 'block';
}

function showWelcomeMsg() {
    const user = JSON.parse(localStorage.getItem('user'));
    welcomeMsg.textContent = 'Welcome, ' + user.email;
}

export function userNavigation(navigation) {

    navigation.forEach(x => {
        if (x.textContent === 'Logout' || x.textContent.includes('Welcome')) {
            x.style.display = 'inline';
        } else {
            x.style.display = 'none';
        }
    })
    
    showWelcomeMsg()

    addMovieBtn.style.display = 'block';

    showMovies();
}

