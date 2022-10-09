import page from "//unpkg.com/page/page.mjs";
import { html } from 'https://unpkg.com/lit-html?module';
import { getUser } from '../auth.js';
import { deleteUser } from '../auth.js';


const logoutUser = (e) => {
    deleteUser();
    page.redirect('/dashboard');
}

const userNavigation = (dash, create, myFur, log) => html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/dashboard" class=${dash}>Dashboard</a>
        <div id="user">
            <a id="createLink" href="/create" class=${create}>Create Furniture</a>
            <a id="profileLink" href="/my-furniture" class=${myFur}>My Publications</a>

            <a id="logoutBtn" href="javascript:void(0)" class=${log} @click=${logoutUser}>Logout</a>
        </div>
    </nav>
    `;

const guestNavigation = (dash, log, reg) => html`
<h1><a href="/">Furniture Store</a></h1>
<nav>
    <a id="catalogLink" href="/dashboard" class=${dash}>Dashboard</a>
    <div id="guest">
        <a id="loginLink" href="/login" class=${log}>Login</a>
        <a id="registerLink" href="/register" class=${reg}>Register</a>
    </div>
</nav>
`;

export const navigation = (...args) => getUser() ? userNavigation(...args) : guestNavigation(...args);