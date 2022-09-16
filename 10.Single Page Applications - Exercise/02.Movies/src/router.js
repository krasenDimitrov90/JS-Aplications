import { renderHome } from './home.js';
import { renderLogin } from './user-rendering/login.js';
import { renderRegister } from './user-rendering/register.js';
import { renderLogout } from './user-rendering/logout.js';

const sections = document.querySelectorAll('section');

hideContent();
renderHome();


const routes = {
    'Movies': renderHome,
    'Login': renderLogin,
    'Register': renderRegister,
    'Logout': renderLogout
}

export function router(path) {
    
    const renderer = routes[path] || null;
    if (renderer) {
        hideContent();
        renderer();
    }
}


export function hideContent() {
    sections.forEach(x => x.style.display = 'none');
}