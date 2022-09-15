import { renderHome } from './home.js';
import { renderLogin } from './loginPage.js';
import { renderRegister } from './register.js';
import { renderLogout } from './logout.js';
import { renderCreate } from './create.js';
import { render404 } from './404.js';

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
    '/logout': renderLogout
}

const mainContent = document.querySelector('.main-content');

export function router(path) {
    hideContent();

    const renderer = routes[path] || render404;
    renderer();
}

function hideContent() {
    for (let section of mainContent.children) {
        section.style.display = 'none';
    }
}
