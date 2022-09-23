import { renderHome } from './sections/home.js';
import { renderLogin } from './user-forms/login.js';
import { renderRegister } from './user-forms/register.js';
import { renderLogout } from './user-forms/logout.js';
import { renderAdd } from "./sections/add-movie.js";


const sections = document.querySelectorAll('section');

const routes = {
    'Movies': renderHome,
    'Login': renderLogin,
    'Register': renderRegister,
    'Logout': renderLogout,
    'Add-Movie': renderAdd
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