import { html } from '../../node_modules/lit-html/lit-html.js';
import * as request from '../services/requests.js';

export const catalogView = (ctx, next) => {

    request.getAllGames()
        .then(games => {
            ctx.render(catalogTemplate(games))
        })
    next();
}

const gameCardTemplate = (game) => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src=${game.imageUrl}>
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>
`;

const noResults = () => html`
        <h3 class="no-articles">No articles yet</h3>
`;

const catalogTemplate = (games = []) => html`
    <!-- Catalogue -->
    <section id="catalog-page">
        <h1>All Games</h1>

        ${games.length ? games.map(g => gameCardTemplate(g)) : noResults()}
    </section>
`;

