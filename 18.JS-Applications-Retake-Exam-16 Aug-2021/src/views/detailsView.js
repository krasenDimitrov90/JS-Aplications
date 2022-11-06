import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as request from '../services/requests.js';

export const detailsView = (ctx, next) => {
    const userId = ctx.user?._id;

    request.getGame(ctx.params.id)
        .then(game => ctx.render(detailsTemplate(userId, game)))
    next();    
}

const buttonsTemplate = (gameId) => html`
    <div class="buttons">
        <a href="/edit/${gameId}" class="button">Edit</a>
        <a href="/delete/${gameId}" class="button">Delete</a>
    </div>
`;

const detailsTemplate = (userId, game) => html`
    <!--Details Page-->
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src=${game.imageUrl} />
                <h1>Bright</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">Action, Crime, Fantasy</p>
            </div>
    
            <p class="text">
                ${game.summary}
            </p>
                
            ${userId ? userId === game._ownerId ? buttonsTemplate(game._id) : nothing : nothing}
    
            <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                <ul>
                    <!-- list all comments for current game (If any) -->
                    <li class="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li class="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                <!-- Display paragraph: If there are no games in the database -->
                <p class="no-comment">No comments.</p>
            </div>
    
            <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    
        </div>
    
        <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
        <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>
    
    </section>
`;

