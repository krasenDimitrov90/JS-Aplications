import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../services/requests.js';


const editHandler = (ctx, albumId, e) => {
    e.preventDefault();
    ctx.show();

    const data = Object.fromEntries(new FormData(e.target));

    if (Object.values(data).some(x => x === '')) {
        alert('All fields must be filled');
        return e.target.reset();
    }

    api.editAlbum(albumId, data, ctx.user.accessToken)
        .then(album => {
            ctx.hide();
            ctx.page.redirect(`/details/${album._id}`)
        })
}

const editTemplate = (ctx, album, albumId) => html`
    <section class="editPage">
        <form @submit=${editHandler.bind(null, ctx, albumId)}>
            <fieldset>
                <legend>Edit Album</legend>

                <div class="container">
                    <label for="name" class="vhide">Album name</label>
                    <input id="name" name="name" class="name" type="text" value=${album.name}>

                    <label for="imgUrl" class="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value=${album.imgUrl}>

                    <label for="price" class="vhide">Price</label>
                    <input id="price" name="price" class="price" type="text" value=${album.price}>

                    <label for="releaseDate" class="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value=${album.releaseDate}>

                    <label for="artist" class="vhide">Artist</label>
                    <input id="artist" name="artist" class="artist" type="text" value=${album.artist}>

                    <label for="genre" class="vhide">Genre</label>
                    <input id="genre" name="genre" class="genre" type="text" value=${album.genre}>

                    <label for="description" class="vhide">Description</label>
                    <textarea name="description" class="description" rows="10"
                        cols="10">${album.description}</textarea>

                    <button class="edit-album" type="submit">Edit Album</button>
                </div>
            </fieldset>
        </form>
    </section>
`;


export const renderEdit = (ctx) => {
    const albumId = ctx.params.id;

    api.getOneAlbum(albumId)
        .then(album => {
            ctx.hide();
            ctx.render(editTemplate(ctx, album, albumId))
        })
    
}