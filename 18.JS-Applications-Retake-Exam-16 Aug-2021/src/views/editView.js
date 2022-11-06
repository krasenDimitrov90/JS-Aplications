import page from '../../node_modules/page/page.mjs';
import { html } from '../../node_modules/lit-html/lit-html.js'
import * as api from '../services/requests.js';
import { createSubmitHandler } from '../services/handlers.js';

export const editView = (ctx, next) => {
    ctx.render(editTemplate(createSubmitHandler(ctx, onSubmit)));
    next();
}

const onSubmit = (ctx, data) => {
    const gameId = ctx.params.id;

    api.edit(gameId, data)
        .then(game => page.redirect(`/details/${gameId}`));
}

const editTemplate = (onSubmit) => html`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="auth">
        <form id="edit" @submit=${onSubmit}>
            <div class="container">
    
                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value="" class="input-fields">
    
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" value="" class="input-fields">
    
                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value="" class="input-fields">
    
                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value="" class="input-fields">
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" class="input-fields"></textarea>
                <input class="btn submit" type="submit" value="Edit Game">
    
            </div>
        </form>
    </section>
`;

