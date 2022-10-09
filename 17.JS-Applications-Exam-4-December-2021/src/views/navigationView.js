import { html, render } from "../../node_modules/lit-html/lit-html.js"

const navBox = document.querySelector('#box header');

const guestTemplate = () => html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`;

const userTemplate = () => html`
    <li><a href="/create">Create Album</a></li>
    <li><a href="/logout">Logout</a></li>
`;

const navigationTemplate = (user) => html`
        <nav>
            <img src="/images/headphones.png">
            <a href="/">Home</a>
            <ul>
                <!--All user-->
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/search">Search</a></li>
                ${user ? userTemplate() : guestTemplate()}
            </ul>
        </nav>
`;

export const renderNavigation = (ctx) => {
    render(navigationTemplate(ctx.user), navBox);
}