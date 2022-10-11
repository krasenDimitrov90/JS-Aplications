import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../services/requests.js';

const cardTemplate = (album, isThereUser) => html`
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
                ? html`<div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                        </div>`
                : nothing}
            
        </div>
    </div>
`;



const albumsTemplate = (albums, isThereUser) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>

        ${albums.map(x => cardTemplate(x, isThereUser)) }       
            
        ${albums.length === 0 
            ? html`<p>No Albums in Catalog!</p>`
            : nothing
        }
    </section>
`;

export const renderCatalog = (ctx) => 
    api.getAllAlbums()
        .then(albums => {
            ctx.hide();
            ctx.render(albumsTemplate(albums, Boolean(ctx.user)))
        })