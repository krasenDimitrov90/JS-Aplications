import { html } from "../../node_modules/lit-html/lit-html.js";



const userTemplates = {
    guestTemplate: () => html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`,

    userTemplate: () => html`
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>`
}

const userLinks = (user, templates) =>
    user ? templates.userTemplate() : templates.guestTemplate();


export const navigationTemplate = (user) => html`
    <header>
        <h1><a class="home" href="/">GamesPlay</a></h1>
        <nav>
            <a href="/catalog">All games</a>

            ${userLinks(user, userTemplates)}
    
        </nav>
    </header>
`;


