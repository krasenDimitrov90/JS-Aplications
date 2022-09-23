import { renderHome } from './sections/home.js';
import { renderLogin } from './user-forms/login.js';
import { renderRegister } from './user-forms/register.js';
import { renderLogout } from './user-forms/logout.js';
import { renderAdd } from "./sections/add-movie.js";
import { renderDetails } from './sections/details.js';


const sections = document.querySelectorAll('section');

const routes = {
    'Movies': renderHome,
    'Login': renderLogin,
    'Register': renderRegister,
    'Logout': renderLogout,
    'Add-Movie': renderAdd,
    'Details': renderDetails
}

export function router(path, id = null) { 
    
    const renderer = routes[path] || null;
    if (renderer) {
        hideContent();
        renderer(id);  // id is used only for renderDetails() function
    }
}


export function hideContent() {
    sections.forEach(x => x.style.display = 'none');
}