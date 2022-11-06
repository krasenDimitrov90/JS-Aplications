import { html } from '../../node_modules/lit-html/lit-html.js';
import * as request from '../services/requests.js';


export const homeView = (ctx, next) => {

    request.getRecentGames()
        .then(games => ctx.render(homeTemplate(games)))
    next();    
}

const gameCardTemplate = (game) => html`
    <div class="game">
        <div class="image-wrap">
            <img src=${game.imageUrl}>
        </div>
        <h3>{game.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/details/${game._id}" class="btn details-btn">Details</a>
        </div>
    </div>
`;


const noResults = () => html`
    <p class="no-articles">No games yet</p>
`;

const homeTemplate = (games = []) => html`
    <!--Home Page-->
    <section id="welcome-world">
    
        <div class="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero">
    
        <div id="home-page">
            <h1>Latest Games</h1>
    
            <!-- Display div: with information about every game (if any) -->
            ${games.length ? games.map(g => gameCardTemplate(g)) : noResults()}
    
            <!-- Display paragraph: If there is no games  -->
        </div>
    </section>
`;


