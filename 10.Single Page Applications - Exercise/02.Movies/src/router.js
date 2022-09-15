import { renderHome } from './home.js';
import { renderLogin } from './user-rendering/login.js';
import { renderRegister } from './user-rendering/register.js';

const sections = document.querySelectorAll('section');

hideContent();
renderHome();


const routes = {
    'Movies': renderHome,
    'Login': renderLogin,
    'Register': renderRegister
}

export function router(path) {
    hideContent()

    const renderer = routes[path];
    renderer();
}


function hideContent() {
    sections.forEach(x => x.style.display = 'none');
}