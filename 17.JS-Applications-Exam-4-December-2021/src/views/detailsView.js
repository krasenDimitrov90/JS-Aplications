import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../services/requests.js'

const buttonsTemplate = (id) => html`
    <div class="actionBtn">
        <a href="/edit/${id}" class="edit">Edit</a>
        <a href="/delete/${id}" class="remove">Delete</a>
    </div>
`;

const detailsTemplate = (album, isOwner) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src=${album.imgUrl}>
            </div>
            <div class="albumInfo">
                <div class="albumText">
    
                    <h1>Name: ${album.name}</h1>
                    <h3>Artist: ${album.artist}</h3>
                    <h4>Genre: ${album.genre}</h4>
                    <h4>Price: $${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>Description: ${album.description}</p>
                </div>
    
                <!-- Only for registered user and creator of the album-->
    
                ${isOwner ? buttonsTemplate(album._id) : nothing}
    
            </div>
        </div>
    </section>
`;

export const renderDetails = (ctx) => {
    const albumId = ctx.params.id

    api.getOneAlbum(albumId)
        .then(album => {
            const isOwner = ctx.user._id === album._ownerId;
            ctx.render(detailsTemplate(album, isOwner));
        })

}