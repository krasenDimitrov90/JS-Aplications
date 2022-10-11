import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../services/requests.js';

const searchHandler = (ctx, e) => {

    ctx.show();
    const input = document.getElementById('search-input');

    if (input.value === '') {
        return alert('Fill the field')
    }
    api.searchAlbums(encodeURIComponent(input.value))
        .then(albums => {
            ctx.hide();
            ctx.render(searchTemplate(ctx, albums, searchResultTemplate))
        })
}

const noResultTemplate = () => html`
    <p class="no-result">No result.</p>
`;

const albumCardTemplate = (album, isThereUser) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${isThereUser 
                ? html`
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>`
                : nothing}
        </div>
    </div>
`;

const searchResultTemplate = (albums, isThereUser) => html`
    <div class="search-result">
            ${albums.length > 0 
                ? albums.map(x => albumCardTemplate(x, isThereUser))
                : noResultTemplate()}
     </div>
`;

const searchTemplate = (ctx, albums, resultTemplate = null) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list" @click=${searchHandler.bind(null,ctx)}>Search</button>
        </div>
    
        <h2>Results:</h2>

        ${resultTemplate !== null
            ? resultTemplate(albums, Boolean(ctx.user))
            : nothing }
        
    </section>
`;


export const renderSearch = (ctx) => {
    ctx.hide()
    ctx.render(searchTemplate(ctx, []));
}