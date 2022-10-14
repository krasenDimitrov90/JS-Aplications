import { html } from "../../node_modules/lit-html/lit-html.js";

export const navigationTemplate = () => html`
    <header>
        <!-- Navigation -->
        <h1><a class="home" href="/">GamesPlay</a></h1>
        <nav>
            <a href="/catalog">All games</a>
            <!-- Logged-in users -->
            <div id="user">
                <a href="/create">Create Game</a>
                <a href="/logout">Logout</a>
            </div>
            <!-- Guest users -->
            <div id="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </nav>
    </header>
`;


