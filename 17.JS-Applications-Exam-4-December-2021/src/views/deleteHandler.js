import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../services/requests.js';

export const deleteAlbumHandler = (ctx) => {
    const albumId = ctx.params.id;
    ctx.show();
    
    api.deleteAlbum(albumId, ctx.token)
        .then(album => ctx.page.redirect('/catalog'));
}